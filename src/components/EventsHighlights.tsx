import { AlertCircle, ChevronLeft, ChevronRight, ExternalLink, Pause, Play } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

// Ordered list of highlight videos. Keep every source in this single list.
export const HIGHLIGHT_VIDEOS = [
  'https://res.cloudinary.com/dxv0ghali/video/upload/v1793000041/VN20261023_015003_akf97w.mp4',
  'https://res.cloudinary.com/dxv0ghali/video/upload/v1792999806/VN20261023_014300_txscjt.mp4',
  'https://res.cloudinary.com/dxv0ghali/video/upload/v1792999735/VN20261023_013530_kmpfry.mp4',
  'https://res.cloudinary.com/dxv0ghali/video/upload/v1792999244/VN20261023_015402_lbj4rt.mp4',
  'https://res.cloudinary.com/dxv0ghali/video/upload/v1792622243/BANDE_ANNONCE_GRAND_DOCUMENTAIRE_MUSEE_2022_2023_kbwwu6.mp4',
] as const

const PREVIEW_SECONDS = 5
const FADE_MS = 700
const STALL_MS = 15000
const ERROR_SKIP_MS = 3500
const VISIBLE_RATIO = 0.4

// Cloudinary extracts a still frame when a video URL is requested with an image extension.
function frameUrl(src: string, transform: string) {
  return src.replace('/video/upload/', `/video/upload/so_1,${transform},q_auto/`).replace(/\.mp4$/, '.jpg')
}

const pad = (n: number) => String(n).padStart(2, '0')

export interface HighlightsCopy {
  label: string
  title: string
  desc: string
  badge: string
  preview_note: string
  player: string
  prev: string
  next: string
  play: string
  pause: string
  start: string
  blocked: string
  error: string
  full: string
  new_tab: string
  counter: string
  select: string
  thumbs: string
  videos: readonly { readonly title: string; readonly caption: string }[]
}

export function EventsHighlights({ copy }: { copy: HighlightsCopy }) {
  const total = HIGHLIGHT_VIDEOS.length
  const stageRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const activeRef = useRef(0)
  const stallTimer = useRef<number | null>(null)

  const [slide, setSlide] = useState<{ active: number; previous: number | null }>({ active: 0, previous: null })
  const [hasEntered, setHasEntered] = useState(false)
  const [inView, setInView] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [userPaused, setUserPaused] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [failedIndex, setFailedIndex] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  const { active, previous } = slide
  const failed = failedIndex === active
  const shouldPlay = hasEntered && inView && pageVisible && !userPaused && !autoplayBlocked && !failed

  // The ref is the source of truth so rapid clicks and timer ticks always resolve against the latest index.
  const goTo = useCallback((target: number) => {
    const next = ((target % total) + total) % total
    const current = activeRef.current
    if (next === current) return
    activeRef.current = next
    setSlide({ active: next, previous: current })
    setFailedIndex(null)
    setProgress(0)
  }, [total])

  const goNext = useCallback(() => goTo(activeRef.current + 1), [goTo])
  const goPrev = useCallback(() => goTo(activeRef.current - 1), [goTo])

  const clearStall = useCallback(() => {
    if (stallTimer.current !== null) window.clearTimeout(stallTimer.current)
    stallTimer.current = null
  }, [])

  const armStall = useCallback(() => {
    clearStall()
    stallTimer.current = window.setTimeout(goNext, STALL_MS)
  }, [clearStall, goNext])

  // Visibility of the player in the viewport.
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setHasEntered(true)
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasEntered(true)
        setInView(entry.isIntersecting && entry.intersectionRatio >= VISIBLE_RATIO)
      },
      { threshold: [0, VISIBLE_RATIO, 0.75] }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Browser tab visibility and reduced-motion preference.
  useEffect(() => {
    const onVisibility = () => setPageVisible(document.visibilityState === 'visible')
    onVisibility()
    document.addEventListener('visibilitychange', onVisibility)

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => setReducedMotion(motion.matches)
    onMotion()
    motion.addEventListener('change', onMotion)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      motion.removeEventListener('change', onMotion)
    }
  }, [])

  // Every newly active video starts its preview from the beginning.
  useEffect(() => {
    const video = videoRefs.current[active]
    if (video && video.currentTime !== 0) video.currentTime = 0
  }, [active])

  // Single place that decides what plays: only the active video, and only when allowed.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== active && !v.paused) v.pause()
    })
    const video = videoRefs.current[active]
    if (!video) return
    if (!shouldPlay) {
      video.pause()
      return
    }
    video.muted = true
    video.play()?.catch((error: DOMException) => {
      if (error.name === 'NotAllowedError') setAutoplayBlocked(true)
    })
  }, [active, shouldPlay])

  // Watchdog: skip a video that never makes progress (slow network, stalled stream).
  useEffect(() => {
    if (shouldPlay) armStall()
    else clearStall()
    return clearStall
  }, [active, shouldPlay, armStall, clearStall])

  // A failed video shows a message briefly, then the rotation moves on.
  useEffect(() => {
    if (!failed || userPaused || !inView || !pageVisible) return
    const id = window.setTimeout(goNext, ERROR_SKIP_MS)
    return () => window.clearTimeout(id)
  }, [failed, userPaused, inView, pageVisible, goNext])

  // Remove the outgoing video once the crossfade completes.
  useEffect(() => {
    if (previous === null) return
    videoRefs.current[previous]?.pause()
    const id = window.setTimeout(
      () => setSlide(s => (s.previous === previous ? { ...s, previous: null } : s)),
      reducedMotion ? 0 : FADE_MS
    )
    return () => window.clearTimeout(id)
  }, [previous, reducedMotion])

  const handleTimeUpdate = (index: number, video: HTMLVideoElement) => {
    if (index !== activeRef.current) return
    const time = video.currentTime
    setProgress(Math.min(time / PREVIEW_SECONDS, 1))
    if (stallTimer.current !== null) armStall()
    if (time >= PREVIEW_SECONDS) goNext()
  }

  const startPlayback = () => {
    setUserPaused(false)
    setAutoplayBlocked(false)
    // Calling play() inside the click handler counts as a user gesture for autoplay policies.
    const video = videoRefs.current[activeRef.current]
    if (video) {
      video.muted = true
      video.play()?.catch(() => {})
    }
  }

  const playing = !userPaused && !autoplayBlocked
  const togglePlayback = () => (playing ? setUserPaused(true) : startPlayback())

  const current = copy.videos[active]
  const counterLabel = copy.counter.replace('{n}', String(active + 1)).replace('{total}', String(total))
  const showPlayOverlay = (autoplayBlocked || userPaused) && !failed

  return (
    <section id="highlights" className="highlights-section" aria-labelledby="highlights-title">
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">{copy.label}</span>
          <h2 id="highlights-title" className="section-title">{copy.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle highlights-subtitle">{copy.desc}</p>
        </div>

        <div className="highlights-player">
          <div
            ref={stageRef}
            className="highlights-stage"
            role="region"
            aria-roledescription="carousel"
            aria-label={copy.player}
          >
            <div
              key={`backdrop-${active}`}
              className="highlights-backdrop"
              style={{ backgroundImage: `url("${frameUrl(HIGHLIGHT_VIDEOS[active], 'w_480,c_limit')}")` }}
              aria-hidden="true"
            />

            <div className="highlights-frame">
              {HIGHLIGHT_VIDEOS.map((src, i) =>
                i === active || i === previous ? (
                  <video
                    key={src}
                    ref={el => { videoRefs.current[i] = el }}
                    className={`highlights-video${i === active ? ' is-active' : ''}`}
                    src={hasEntered ? src : undefined}
                    poster={frameUrl(src, 'w_720,c_limit')}
                    muted
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    tabIndex={-1}
                    aria-hidden={i !== active}
                    aria-label={copy.videos[i].title}
                    onTimeUpdate={e => handleTimeUpdate(i, e.currentTarget)}
                    onError={() => { if (i === activeRef.current) setFailedIndex(i) }}
                  />
                ) : null
              )}
            </div>

            <div className="highlights-shade" aria-hidden="true" />

            <div className="highlights-badge">
              <span className="highlights-badge-dot" aria-hidden="true" />
              {copy.badge}
            </div>

            <button
              type="button"
              className="highlights-toggle"
              onClick={togglePlayback}
              aria-label={playing ? copy.pause : copy.play}
              title={playing ? copy.pause : copy.play}
            >
              {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
            </button>

            <button type="button" className="highlights-arrow highlights-arrow--prev" onClick={goPrev} aria-label={copy.prev} title={copy.prev}>
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button type="button" className="highlights-arrow highlights-arrow--next" onClick={goNext} aria-label={copy.next} title={copy.next}>
              <ChevronRight size={24} aria-hidden="true" />
            </button>

            {showPlayOverlay && (
              <div className="highlights-overlay">
                <button type="button" className="highlights-play" onClick={startPlayback}>
                  <Play size={22} aria-hidden="true" />
                  <span>{copy.start}</span>
                </button>
                {autoplayBlocked && <p>{copy.blocked}</p>}
              </div>
            )}

            {failed && (
              <div className="highlights-overlay highlights-overlay--error" role="status">
                <AlertCircle size={26} aria-hidden="true" />
                <p>{copy.error}</p>
              </div>
            )}

            <div className="highlights-progress" aria-hidden="true">
              <span style={{ transform: `scaleX(${progress})` }} />
            </div>
          </div>

          <div className="highlights-toolbar">
            <div key={`caption-${active}`} className="highlights-caption">
              <span className="highlights-caption-index" aria-hidden="true">{pad(active + 1)}</span>
              <h3>{current.title}</h3>
              <p>{current.caption}</p>
            </div>
            <div className="highlights-meta">
              <button type="button" className="highlights-mini-arrow" onClick={goPrev} aria-label={copy.prev}>
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <span className="highlights-counter" aria-label={counterLabel}>
                <strong>{pad(active + 1)}</strong> / {pad(total)}
              </span>
              <button type="button" className="highlights-mini-arrow" onClick={goNext} aria-label={copy.next}>
                <ChevronRight size={18} aria-hidden="true" />
              </button>
              <span className="highlights-note">{copy.preview_note}</span>
            </div>
            <a
              className="highlights-full-link"
              href={HIGHLIGHT_VIDEOS[active]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy.full} – ${current.title} (${copy.new_tab})`}
            >
              {copy.full}
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>

          <ol className="highlights-thumbs" aria-label={copy.thumbs}>
            {HIGHLIGHT_VIDEOS.map((src, i) => (
              <li key={src}>
                <button
                  type="button"
                  className={`highlights-thumb${i === active ? ' is-active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`${copy.select.replace('{n}', String(i + 1))} – ${copy.videos[i].title}`}
                  aria-current={i === active ? 'true' : undefined}
                >
                  <img src={frameUrl(src, 'w_320,h_200,c_fill')} alt="" width={320} height={200} loading="lazy" decoding="async" />
                  <span className="highlights-thumb-label">
                    <span className="highlights-thumb-num">{pad(i + 1)}</span>
                    <span className="highlights-thumb-title">{copy.videos[i].title}</span>
                  </span>
                  {i === active && (
                    <span className="highlights-thumb-progress" aria-hidden="true">
                      <span style={{ transform: `scaleX(${progress})` }} />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
