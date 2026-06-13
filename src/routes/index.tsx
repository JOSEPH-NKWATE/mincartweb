import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef, useCallback } from 'react'

export const Route = createFileRoute('/')({
  component: MinacWebsite,
})

// ─── TRANSLATIONS ──────────────────────────────────────────────────────────────
const T = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_arts: 'Arts & Culture',
    nav_events: 'Events',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_news: 'News',
    nav_contact: 'Contact',
    ministry_name: 'Ministry of Arts and Culture',
    ministry_sub: 'Republic of Cameroon',
    ministry_top: 'Official Government Portal',
    slide1_title: "Celebrating Cameroon's Cultural Heritage",
    slide1_sub: 'Discover the richness of 280 ethnic groups and centuries of tradition',
    slide2_title: 'Promoting Arts for National Development',
    slide2_sub: 'Empowering artists and creators to shape our cultural economy',
    slide3_title: 'Preserving Our Traditions',
    slide3_sub: 'Safeguarding ancestral knowledge, dances, and languages for future generations',
    slide4_title: 'Building a Creative Economy',
    slide4_sub: 'Harnessing culture as a driver of sustainable development',
    cta_explore: 'Explore Culture',
    cta_services: 'Our Services',
    slide_eyebrow: 'Republic of Cameroon',
    about_label: 'About the Ministry',
    about_title: "Guardians of Cameroon's Cultural Soul",
    about_p: "The Ministry of Arts and Culture (MINAC) is the government body responsible for defining and implementing Cameroon's cultural policy. Since its establishment, MINAC has worked tirelessly to preserve, promote, and valorize Cameroon's extraordinary cultural heritage — one of Africa's most diverse, encompassing over 280 ethnic groups, languages, traditions, and art forms.",
    mission_label: 'Our Mission',
    mission_text: "To promote, protect and develop the cultural and artistic heritage of Cameroon for the well-being of its people and the enrichment of humanity.",
    vision_label: 'Our Vision',
    vision_text: "A Cameroon where culture is a pillar of national identity, economic development, and international influence.",
    val1_title: 'Cultural Diversity',
    val1_desc: 'Celebrating and preserving the richness of our 280+ ethnic communities.',
    val2_title: 'Artistic Excellence',
    val2_desc: 'Nurturing world-class talent and creative expression across all art forms.',
    val3_title: 'Heritage Protection',
    val3_desc: 'Safeguarding tangible and intangible cultural heritage for future generations.',
    about_badge_num: '60+',
    about_badge_label: 'Years',
    est_label: 'Est. 1960',
    arts_label: 'Arts & Culture',
    arts_title: "The Many Faces of Cameroon's Culture",
    arts_sub: "From ancient traditions to contemporary creativity, Cameroon's cultural landscape is breathtaking in its diversity.",
    trad_title: 'Traditional Culture',
    trad_desc: 'Over 280 ethnic groups bring to life a dazzling tapestry of dances, languages, ceremonies, and crafts — from the Bamiléké masks to Fulani horsemen, Bassa rhythms to Kirdi cliff-dwellers.',
    modern_title: 'Modern Arts',
    modern_desc: "Cameroon's vibrant contemporary scene spans Afrobeats, Makossa music, fashion design, film, and visual arts — reaching global audiences while staying rooted in African identity.",
    heritage_title: 'Cultural Heritage',
    heritage_desc: "From the Royal Palaces of the Grassfields to the ancient rock paintings of Bidzar, Cameroon's tangible heritage tells 10,000 years of human story.",
    learn_more: 'Learn More',
    events_label: 'Featured Events',
    events_title: 'Cultural Calendar',
    events_sub: "Experience the richness of Cameroon through our vibrant programme of national and international cultural events.",
    ev1_name: 'FESTAC Cameroon',
    ev1_date: 'April 15–22, 2025',
    ev1_loc: 'Yaoundé, Centre Region',
    ev1_desc: 'International Festival of Arts and Culture bringing together artists from across Africa and the diaspora.',
    ev2_name: 'FESPAM',
    ev2_date: 'July 7–14, 2025',
    ev2_loc: 'Brazzaville / Douala',
    ev2_desc: 'Pan-African Music Festival celebrating the diversity of African musical traditions and contemporary sounds.',
    ev3_name: 'National Day Celebrations',
    ev3_date: 'May 20, 2025',
    ev3_loc: 'Yaoundé & All Regions',
    ev3_desc: "Grand national cultural parade and festivities marking Cameroon's Unity Day across all ten regions.",
    ev4_name: 'Ngondo Festival',
    ev4_date: 'November 2025',
    ev4_loc: 'Douala, Littoral Region',
    ev4_desc: 'Ancient Sawa water festival celebrating the traditions of the Douala people on the Wouri River.',
    ev5_name: 'Bafut Cultural Festival',
    ev5_date: 'December 2025',
    ev5_loc: 'Bafut, North West',
    ev5_desc: 'A royal celebration at the Bafut Palace featuring traditional dances, music, and masquerades.',
    services_label: 'Services',
    services_title: 'Government Cultural Services',
    services_sub: 'Access official cultural services, permits, and support programmes of the Ministry of Arts and Culture.',
    srv1_title: 'Cultural Permits',
    srv1_desc: 'Obtain official authorizations for cultural events, shows, exhibitions, and artistic performances across Cameroon.',
    srv2_title: 'Artist Registration',
    srv2_desc: 'Register as an official artist with the national registry and gain access to state support programmes and protections.',
    srv3_title: 'Funding & Grants',
    srv3_desc: 'Apply for government grants, subsidies, and funding opportunities for artistic and cultural projects.',
    srv4_title: 'Cultural Certification',
    srv4_desc: 'Certify cultural institutions, schools, and training centres for official recognition by the Ministry.',
    srv5_title: 'Heritage Protection',
    srv5_desc: 'Report and protect endangered cultural sites, artefacts, and intangible cultural practices.',
    srv6_title: 'International Cooperation',
    srv6_desc: 'Access bilateral and multilateral cultural cooperation programmes with partner countries and international organisations.',
    apply_btn: 'Apply Now',
    gallery_label: 'Gallery',
    gallery_title: 'Visual Journey Through Cameroon',
    filter_all: 'All',
    filter_events: 'Events',
    filter_heritage: 'Heritage',
    filter_arts: 'Arts',
    filter_festivals: 'Festivals',
    news_label: 'News & Announcements',
    news_title: 'Latest Updates',
    news_sub: "Stay informed about the Ministry's activities, cultural events, and policy announcements.",
    tag_announcement: 'Announcement',
    tag_event: 'Event',
    tag_policy: 'Policy',
    tag_heritage: 'Heritage',
    tag_arts: 'Arts',
    tag_coop: 'Cooperation',
    news1_title: 'MINAC Launches National Artist Support Fund 2025',
    news1_excerpt: 'A new CFA 500 million fund has been established to support Cameroonian artists across all disciplines, with applications now open.',
    news2_title: 'UNESCO Lists Cameroonian Bamiléké Dance as Intangible Heritage',
    news2_excerpt: 'The Bamiléké mask dance tradition has been officially inscribed on the UNESCO list of Intangible Cultural Heritage of Humanity.',
    news3_title: 'FESTAC 2025 Programme Announced',
    news3_excerpt: 'The full programme for the International Festival of Arts and Culture has been unveiled, featuring 45 countries and 500 artists.',
    news4_title: 'New Cultural Centre Opens in Garoua',
    news4_excerpt: 'The Ministry inaugurates a state-of-the-art cultural complex in the North Region, serving over 300,000 citizens.',
    news5_title: 'Cameroon–France Cultural Partnership Renewed',
    news5_excerpt: 'A landmark bilateral agreement ensuring ongoing collaboration in cinema, music, visual arts, and heritage preservation.',
    news6_title: 'Digital Archive of Cameroonian Art Launched',
    news6_excerpt: 'Over 10,000 works by Cameroonian artists are now accessible online through the new National Digital Cultural Archive.',
    read_more: 'Read More →',
    date1: 'March 5, 2025',
    date2: 'February 18, 2025',
    date3: 'February 10, 2025',
    date4: 'January 28, 2025',
    date5: 'January 15, 2025',
    date6: 'December 20, 2024',
    proj_label: 'Projects & Initiatives',
    proj_title: 'Transforming Culture into Development',
    proj1_title: 'National Cultural Digital Archive',
    proj1_desc: 'Digitising over 50,000 cultural artefacts, photographs, recordings, and manuscripts to ensure their preservation and global accessibility.',
    proj1_prog: '65% Complete',
    proj2_title: 'Cultural Centres Modernisation',
    proj2_desc: "Rehabilitating and constructing modern cultural centres in all 10 regions to bring world-class cultural infrastructure to every Cameroonian.",
    proj2_prog: '40% Complete',
    proj3_title: 'Creative Industries Development',
    proj3_desc: "A comprehensive programme to formalize and grow Cameroon's creative economy — music, film, fashion, crafts — generating 50,000 new jobs.",
    proj3_prog: 'Planning Phase',
    status_active: 'Active',
    status_planning: 'In Planning',
    status_progress: 'In Progress',
    tour_label: 'Cultural Tourism',
    tour_title: "Discover Cameroon's Cultural Destinations",
    tour_sub: "Africa in miniature — Cameroon offers an unparalleled concentration of cultures, landscapes, and heritage sites.",
    tour_cta: 'Plan Your Visit',
    dest1_name: 'Foumban Royal Palace',
    dest1_desc: 'The magnificent palace of the Bamoun Sultanate, housing one of Africa\'s richest royal museums.',
    dest1_tag: 'Heritage',
    dest2_name: 'Bafut Palace & Shrine',
    dest2_desc: 'A UNESCO-listed royal complex in the Northwest — a living centre of Bafut traditions.',
    dest2_tag: 'Royal Heritage',
    dest3_name: 'Limbe Botanical Garden',
    dest3_desc: 'Founded in 1892, one of Africa\'s oldest botanical gardens at the foot of Mount Cameroon.',
    dest3_tag: 'Nature & Culture',
    dest4_name: 'Waza National Park',
    dest4_desc: "Cameroon's premier safari destination in the Far North, a UNESCO World Heritage Site.",
    dest4_tag: 'Wildlife',
    dest5_name: 'Mount Cameroon',
    dest5_desc: "West Africa's highest peak — a sacred mountain central to Bakweri cultural identity.",
    dest5_tag: 'Adventure',
    dest6_name: 'Dja Faunal Reserve',
    dest6_desc: 'A vast Congo rainforest reserve, home to Baka pygmy communities and extraordinary biodiversity.',
    dest6_tag: 'Rainforest',
    contact_label: 'Contact Us',
    contact_title: 'Get in Touch',
    contact_sub: 'We welcome your inquiries, applications, and feedback. Our teams are available Monday to Friday, 7:30 AM – 3:30 PM.',
    addr_label: 'Address',
    addr_value: 'Avenue du 20 Mai, Yaoundé, Cameroon',
    phone_label: 'Phone',
    email_label: 'Email',
    hours_label: 'Office Hours',
    hours_value: 'Mon – Fri: 7:30 AM – 3:30 PM',
    map_text: 'Yaoundé, Centre Region, Cameroon',
    form_name: 'Full Name',
    form_email: 'Email Address',
    form_subject: 'Subject',
    form_message: 'Your Message',
    form_submit: 'Send Message',
    form_success: 'Thank you! Your message has been sent. We will respond within 3 business days.',
    err_name: 'Please enter your full name.',
    err_email: 'Please enter a valid email address.',
    err_subject: 'Please enter a subject.',
    err_message: 'Please enter your message.',
    sub1: 'Cultural Permit Inquiry',
    sub2: 'Artist Registration',
    sub3: 'Funding & Grants',
    sub4: 'Event Information',
    sub5: 'Heritage Protection',
    sub6: 'General Inquiry',
    footer_tagline: "Preserving our heritage. Inspiring our future. Promoting Cameroon's cultural richness to the world.",
    footer_links: 'Quick Links',
    footer_services: 'Services',
    footer_newsletter: 'Newsletter',
    footer_newsletter_sub: 'Subscribe for cultural news and event announcements.',
    footer_newsletter_ph: 'Your email address',
    footer_subscribe: 'Subscribe',
    footer_copy: '© 2025 Ministry of Arts and Culture – Republic of Cameroon. All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Use',
    footer_sitemap: 'Sitemap',
  },
  fr: {
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_arts: 'Arts & Culture',
    nav_events: 'Événements',
    nav_services: 'Services',
    nav_gallery: 'Galerie',
    nav_news: 'Actualités',
    nav_contact: 'Contact',
    ministry_name: 'Ministère des Arts et de la Culture',
    ministry_sub: 'République du Cameroun',
    ministry_top: 'Portail Officiel du Gouvernement',
    slide1_title: 'Célébrons le Patrimoine Culturel du Cameroun',
    slide1_sub: 'Découvrez la richesse de 280 groupes ethniques et des siècles de tradition',
    slide2_title: 'Promouvoir les Arts pour le Développement National',
    slide2_sub: 'Renforcer les artistes et créateurs pour façonner notre économie culturelle',
    slide3_title: 'Préserver Nos Traditions',
    slide3_sub: 'Sauvegarder les savoirs ancestraux, danses et langues pour les générations futures',
    slide4_title: 'Bâtir une Économie Créative',
    slide4_sub: 'La culture comme moteur du développement durable',
    cta_explore: 'Explorer la Culture',
    cta_services: 'Nos Services',
    slide_eyebrow: 'République du Cameroun',
    about_label: 'À propos du Ministère',
    about_title: "Gardiens de l'Âme Culturelle du Cameroun",
    about_p: "Le Ministère des Arts et de la Culture (MINAC) est l'organe gouvernemental chargé de définir et de mettre en œuvre la politique culturelle du Cameroun. Depuis sa création, le MINAC œuvre sans relâche pour préserver, promouvoir et valoriser l'extraordinaire patrimoine culturel camerounais — l'un des plus divers d'Afrique, englobant plus de 280 groupes ethniques, langues, traditions et formes d'expression artistique.",
    mission_label: 'Notre Mission',
    mission_text: "Promouvoir, protéger et développer le patrimoine culturel et artistique du Cameroun pour le bien-être de son peuple et l'enrichissement de l'humanité.",
    vision_label: 'Notre Vision',
    vision_text: "Un Cameroun où la culture est un pilier de l'identité nationale, du développement économique et du rayonnement international.",
    val1_title: 'Diversité Culturelle',
    val1_desc: 'Célébrer et préserver la richesse de nos 280+ communautés ethniques.',
    val2_title: 'Excellence Artistique',
    val2_desc: "Cultiver des talents de renommée mondiale et l'expression créative dans toutes les formes d'art.",
    val3_title: 'Protection du Patrimoine',
    val3_desc: 'Sauvegarder le patrimoine culturel matériel et immatériel pour les générations futures.',
    about_badge_num: '60+',
    about_badge_label: 'Ans',
    est_label: 'Fondé en 1960',
    arts_label: 'Arts & Culture',
    arts_title: 'Les Multiples Visages de la Culture Camerounaise',
    arts_sub: "Des traditions ancestrales à la créativité contemporaine, le paysage culturel camerounais est d'une diversité époustouflante.",
    trad_title: 'Culture Traditionnelle',
    trad_desc: "Plus de 280 groupes ethniques donnent vie à une tapisserie éblouissante de danses, langues, cérémonies et artisanat — des masques Bamiléké aux cavaliers Foulbé, des rythmes Bassa aux habitants des falaises Kirdi.",
    modern_title: 'Arts Modernes',
    modern_desc: "La scène contemporaine camerounaise embrasse l'Afrobeats, le Makossa, la mode, le cinéma et les arts visuels — atteignant des audiences mondiales tout en restant ancrée dans l'identité africaine.",
    heritage_title: 'Patrimoine Culturel',
    heritage_desc: "Des Palais Royaux des Grassfields aux peintures rupestres de Bidzar, le patrimoine tangible du Cameroun raconte 10 000 ans d'histoire humaine.",
    learn_more: 'En Savoir Plus',
    events_label: 'Événements à la Une',
    events_title: 'Calendrier Culturel',
    events_sub: "Vivez la richesse du Cameroun à travers notre vibrant programme d'événements culturels nationaux et internationaux.",
    ev1_name: 'FESTAC Cameroun',
    ev1_date: '15–22 avril 2025',
    ev1_loc: 'Yaoundé, Région du Centre',
    ev1_desc: "Festival International des Arts et de la Culture réunissant des artistes d'Afrique et de la diaspora.",
    ev2_name: 'FESPAM',
    ev2_date: '7–14 juillet 2025',
    ev2_loc: 'Brazzaville / Douala',
    ev2_desc: 'Festival Panafricain de Musique célébrant la diversité des traditions musicales africaines.',
    ev3_name: 'Fête Nationale',
    ev3_date: '20 mai 2025',
    ev3_loc: 'Yaoundé et toutes régions',
    ev3_desc: "Grand défilé national et festivités culturelles marquant la Fête de l'Unité à travers les dix régions.",
    ev4_name: 'Festival Ngondo',
    ev4_date: 'Novembre 2025',
    ev4_loc: 'Douala, Région Littoral',
    ev4_desc: "Ancien festival de l'eau Sawa célébrant les traditions du peuple Douala sur le fleuve Wouri.",
    ev5_name: 'Festival Culturel de Bafut',
    ev5_date: 'Décembre 2025',
    ev5_loc: 'Bafut, Nord-Ouest',
    ev5_desc: 'Une célébration royale au Palais de Bafut avec danses traditionnelles, musique et mascarades.',
    services_label: 'Services',
    services_title: 'Services Culturels Gouvernementaux',
    services_sub: "Accédez aux services officiels, autorisations et programmes de soutien du Ministère des Arts et de la Culture.",
    srv1_title: 'Permis Culturels',
    srv1_desc: "Obtenez les autorisations officielles pour les événements culturels, spectacles, expositions et performances artistiques.",
    srv2_title: 'Enregistrement des Artistes',
    srv2_desc: "Enregistrez-vous comme artiste officiel au registre national et accédez aux programmes de soutien de l'État.",
    srv3_title: 'Financement & Subventions',
    srv3_desc: "Postulez aux subventions, aides et opportunités de financement gouvernemental pour les projets artistiques et culturels.",
    srv4_title: 'Certification Culturelle',
    srv4_desc: "Certifiez les institutions culturelles, écoles et centres de formation pour la reconnaissance officielle du Ministère.",
    srv5_title: 'Protection du Patrimoine',
    srv5_desc: "Signalez et protégez les sites culturels, artefacts et pratiques culturelles immatérielles en danger.",
    srv6_title: 'Coopération Internationale',
    srv6_desc: "Accédez aux programmes de coopération culturelle bilatérale et multilatérale avec les pays partenaires.",
    apply_btn: 'Postuler Maintenant',
    gallery_label: 'Galerie',
    gallery_title: 'Voyage Visuel à travers le Cameroun',
    filter_all: 'Tout',
    filter_events: 'Événements',
    filter_heritage: 'Patrimoine',
    filter_arts: 'Arts',
    filter_festivals: 'Festivals',
    news_label: 'Actualités & Annonces',
    news_title: 'Dernières Nouvelles',
    news_sub: "Restez informé des activités du Ministère, des événements culturels et des annonces politiques.",
    tag_announcement: 'Annonce',
    tag_event: 'Événement',
    tag_policy: 'Politique',
    tag_heritage: 'Patrimoine',
    tag_arts: 'Arts',
    tag_coop: 'Coopération',
    news1_title: 'Le MINAC Lance le Fonds National de Soutien aux Artistes 2025',
    news1_excerpt: 'Un nouveau fonds de 500 millions CFA a été créé pour soutenir les artistes camerounais dans toutes les disciplines.',
    news2_title: "L'UNESCO Inscrit la Danse Bamiléké comme Patrimoine Immatériel",
    news2_excerpt: "La tradition de la danse des masques Bamiléké est officiellement inscrite sur la Liste du Patrimoine Culturel Immatériel de l'UNESCO.",
    news3_title: 'Programme du FESTAC 2025 Dévoilé',
    news3_excerpt: 'Le programme complet du Festival International des Arts et de la Culture révèle 45 pays et 500 artistes participants.',
    news4_title: "Inauguration d'un Nouveau Centre Culturel à Garoua",
    news4_excerpt: "Le Ministère inaugure un complexe culturel ultramoderne dans la Région du Nord, au service de plus de 300 000 citoyens.",
    news5_title: 'Renouvellement du Partenariat Culturel Cameroun–France',
    news5_excerpt: "Un accord bilatéral historique garantissant une collaboration continue dans le cinéma, la musique, les arts visuels et la préservation du patrimoine.",
    news6_title: "Lancement des Archives Numériques de l'Art Camerounais",
    news6_excerpt: "Plus de 10 000 œuvres d'artistes camerounais sont désormais accessibles en ligne via les nouvelles Archives Culturelles Numériques Nationales.",
    read_more: 'Lire Plus →',
    date1: '5 mars 2025',
    date2: '18 février 2025',
    date3: '10 février 2025',
    date4: '28 janvier 2025',
    date5: '15 janvier 2025',
    date6: '20 décembre 2024',
    proj_label: 'Projets & Initiatives',
    proj_title: 'Transformer la Culture en Développement',
    proj1_title: 'Archives Numériques Culturelles Nationales',
    proj1_desc: "Numérisation de plus de 50 000 artefacts culturels, photographies, enregistrements et manuscrits pour assurer leur préservation.",
    proj1_prog: '65% Achevé',
    proj2_title: 'Modernisation des Centres Culturels',
    proj2_desc: "Réhabilitation et construction de centres culturels modernes dans les 10 régions pour apporter une infrastructure culturelle à chaque Camerounais.",
    proj2_prog: '40% Achevé',
    proj3_title: 'Développement des Industries Créatives',
    proj3_desc: "Un programme complet pour formaliser et développer l'économie créative camerounaise — musique, cinéma, mode, artisanat — créant 50 000 emplois.",
    proj3_prog: 'Phase de Planification',
    status_active: 'Actif',
    status_planning: 'En Planification',
    status_progress: 'En Cours',
    tour_label: 'Tourisme Culturel',
    tour_title: 'Découvrez les Destinations Culturelles du Cameroun',
    tour_sub: "L'Afrique en miniature — le Cameroun offre une concentration inégalée de cultures, paysages et sites patrimoniaux.",
    tour_cta: 'Planifier Votre Visite',
    dest1_name: 'Palais Royal de Foumban',
    dest1_desc: "Le magnifique palais du Sultanat Bamoun, abritant l'un des musées royaux les plus riches d'Afrique.",
    dest1_tag: 'Patrimoine',
    dest2_name: 'Palais et Sanctuaire de Bafut',
    dest2_desc: "Un complexe royal classé par l'UNESCO dans le Nord-Ouest — centre vivant des traditions Bafut.",
    dest2_tag: 'Patrimoine Royal',
    dest3_name: 'Jardin Botanique de Limbé',
    dest3_desc: "Fondé en 1892, l'un des plus anciens jardins botaniques d'Afrique au pied du Mont Cameroun.",
    dest3_tag: 'Nature & Culture',
    dest4_name: 'Parc National de Waza',
    dest4_desc: "La première destination safari du Cameroun dans l'Extrême-Nord, site du Patrimoine Mondial de l'UNESCO.",
    dest4_tag: 'Faune Sauvage',
    dest5_name: 'Mont Cameroun',
    dest5_desc: "Le plus haut sommet d'Afrique de l'Ouest — une montagne sacrée au cœur de l'identité culturelle Bakweri.",
    dest5_tag: 'Aventure',
    dest6_name: 'Réserve du Dja',
    dest6_desc: "Une vaste réserve forestière du Congo, habitat des communautés Baka et d'une biodiversité exceptionnelle.",
    dest6_tag: 'Forêt Tropicale',
    contact_label: 'Contactez-nous',
    contact_title: 'Prendre Contact',
    contact_sub: "Nous accueillons vos demandes, candidatures et commentaires. Nos équipes sont disponibles du lundi au vendredi, de 7h30 à 15h30.",
    addr_label: 'Adresse',
    addr_value: 'Avenue du 20 Mai, Yaoundé, Cameroun',
    phone_label: 'Téléphone',
    email_label: 'Email',
    hours_label: "Heures d'ouverture",
    hours_value: 'Lun – Ven : 7h30 – 15h30',
    map_text: 'Yaoundé, Région du Centre, Cameroun',
    form_name: 'Nom Complet',
    form_email: 'Adresse Email',
    form_subject: 'Sujet',
    form_message: 'Votre Message',
    form_submit: 'Envoyer le Message',
    form_success: 'Merci ! Votre message a été envoyé. Nous vous répondrons sous 3 jours ouvrables.',
    err_name: 'Veuillez entrer votre nom complet.',
    err_email: 'Veuillez entrer une adresse email valide.',
    err_subject: 'Veuillez entrer un sujet.',
    err_message: 'Veuillez entrer votre message.',
    sub1: 'Demande de Permis Culturel',
    sub2: "Enregistrement d'Artiste",
    sub3: 'Financement & Subventions',
    sub4: "Informations sur les Événements",
    sub5: 'Protection du Patrimoine',
    sub6: 'Demande Générale',
    footer_tagline: "Préserver notre patrimoine. Inspirer notre avenir. Promouvoir la richesse culturelle du Cameroun dans le monde.",
    footer_links: 'Liens Rapides',
    footer_services: 'Services',
    footer_newsletter: 'Newsletter',
    footer_newsletter_sub: "Abonnez-vous pour les actualités culturelles et les annonces d'événements.",
    footer_newsletter_ph: 'Votre adresse email',
    footer_subscribe: "S'abonner",
    footer_copy: '© 2025 Ministère des Arts et de la Culture – République du Cameroun. Tous droits réservés.',
    footer_privacy: 'Politique de Confidentialité',
    footer_terms: "Conditions d'Utilisation",
    footer_sitemap: 'Plan du Site',
  },
} as const

type Lang = 'en' | 'fr'

const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&q=80',
  'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1800&q=80',
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1800&q=80',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1800&q=80',
]

const GALLERY_ITEMS = [
  { img: 'https://images.unsplash.com/photo-1580746738099-1cc1d10d5a5d?w=600&q=80', cat: 'festivals', tall: true },
  { img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', cat: 'arts' },
  { img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', cat: 'heritage' },
  { img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', cat: 'events' },
  { img: 'https://images.unsplash.com/photo-1572204292164-b35ba943fca7?w=600&q=80', cat: 'heritage' },
  { img: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80', cat: 'arts', tall: true },
  { img: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&q=80', cat: 'festivals' },
  { img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80', cat: 'events' },
  { img: 'https://images.unsplash.com/photo-1580204928616-f39aa66e4f67?w=600&q=80', cat: 'heritage' },
  { img: 'https://images.unsplash.com/photo-1607027811564-72a5faa8c3bf?w=600&q=80', cat: 'arts' },
  { img: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&q=80', cat: 'festivals' },
  { img: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&q=80', cat: 'events' },
]

const GAL_CAPS: Record<Lang, string[]> = {
  en: ['Traditional Festival','Bamiléké Mask Dance','Mount Cameroon','Yaoundé Skyline','Waza Wildlife','Traditional Weaving','Ngondo Festival','Foumban Palace','Rainforest','Contemporary Art','Cameroonian Music','Kirdi Village'],
  fr: ['Festival Traditionnel','Danse du Masque Bamiléké','Mont Cameroun','Skyline de Yaoundé','Faune de Waza','Tissage Traditionnel','Festival Ngondo','Palais de Foumban','Forêt Tropicale','Art Contemporain','Musique Camerounaise','Village Kirdi'],
}

export default function MinacWebsite() {
  const [lang, setLang] = useState<Lang>('en')
  const [slide, setSlide] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [galFilter, setGalFilter] = useState('all')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const slideTimer = useRef<ReturnType<typeof setInterval> | null>(null)
  const t = T[lang]

  const nextSlide = useCallback(() => setSlide(s => (s + 1) % HERO_SLIDES.length), [])
  const prevSlide = useCallback(() => setSlide(s => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), [])

  useEffect(() => {
    slideTimer.current = setInterval(nextSlide, 5000)
    return () => { if (slideTimer.current) clearInterval(slideTimer.current) }
  }, [nextSlide])

  const goSlide = (i: number) => {
    setSlide(i)
    if (slideTimer.current) clearInterval(slideTimer.current)
    slideTimer.current = setInterval(nextSlide, 5000)
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
      { threshold: 0.3 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const validateForm = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = t.err_name
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = t.err_email
    if (!formData.subject) errs.subject = t.err_subject
    if (!formData.message.trim()) errs.message = t.err_message
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validateForm()
    if (Object.keys(errs).length) { setFormErrors(errs); return }
    setFormErrors({})
    setFormSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const navLinks = [
    { id: 'home', label: t.nav_home },
    { id: 'about', label: t.nav_about },
    { id: 'arts', label: t.nav_arts },
    { id: 'events', label: t.nav_events },
    { id: 'services', label: t.nav_services },
    { id: 'gallery', label: t.nav_gallery },
    { id: 'news', label: t.nav_news },
    { id: 'contact', label: t.nav_contact },
  ]

  const heroSlides = [
    { title: t.slide1_title, sub: t.slide1_sub },
    { title: t.slide2_title, sub: t.slide2_sub },
    { title: t.slide3_title, sub: t.slide3_sub },
    { title: t.slide4_title, sub: t.slide4_sub },
  ]

  const galCaps = GAL_CAPS[lang]
  const filteredGal = galFilter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === galFilter)

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a className="navbar-brand" href="#home" onClick={e => { e.preventDefault(); scrollTo('home') }}>
            <div className="navbar-logo-icon">🎭</div>
            <div className="navbar-brand-text">
              <span className="navbar-brand-top">{t.ministry_top}</span>
              <span className="navbar-brand-main">{lang === 'en' ? 'Min. Arts & Culture' : 'Min. Arts et Culture'}</span>
              <span className="navbar-brand-sub">{t.ministry_sub}</span>
            </div>
          </a>
          <div className="navbar-links">
            {navLinks.map(l => (
              <a key={l.id} href={`#${l.id}`}
                className={activeSection === l.id ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(l.id) }}>
                {l.label}
              </a>
            ))}
            <Link to="/reglementation-cinematographique" className="navbar-cine-link">
              🎬 {lang === 'en' ? 'Cinema Regulation' : 'Réglementation Ciné'}
            </Link>
          </div>
          <div className="navbar-right">
            <div className="lang-toggle">
              <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
              <button className={`lang-btn${lang === 'fr' ? ' active' : ''}`} onClick={() => setLang('fr')}>FR</button>
            </div>
            <button className="hamburger" aria-label="Menu" onClick={() => setMobileOpen(o => !o)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id) }}>{l.label}</a>
        ))}
        <Link to="/reglementation-cinematographique" onClick={() => setMobileOpen(false)}>
          🎬 {lang === 'en' ? 'Cinema Regulation' : 'Réglementation Ciné'}
        </Link>
        <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '1rem' }}>
          {(['en', 'fr'] as Lang[]).map(lg => (
            <button key={lg} onClick={() => setLang(lg)} style={{ padding: '0.4rem 1rem', borderRadius: '4px', border: '1px solid rgba(201,168,76,0.4)', cursor: 'pointer', background: lang === lg ? 'var(--gold)' : 'transparent', color: lang === lg ? 'var(--dark-bg)' : 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
              {lg === 'en' ? 'English' : 'Français'}
            </button>
          ))}
        </div>
      </div>

      {/* HERO CAROUSEL */}
      <section id="home" className="hero">
        {HERO_SLIDES.map((src, i) => (
          <div key={i} className={`carousel-slide${i === slide ? ' active' : ''}`}>
            <img src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
            <div className="carousel-overlay" />
          </div>
        ))}
        <div className="carousel-content">
          <span className="carousel-eyebrow">{t.slide_eyebrow}</span>
          <h1 className="carousel-title">{heroSlides[slide].title}</h1>
          <p className="carousel-subtitle">{heroSlides[slide].sub}</p>
          <div className="hero-cta">
            <a className="btn-primary" href="#arts" onClick={e => { e.preventDefault(); scrollTo('arts') }}>{t.cta_explore}</a>
            <a className="btn-outline" href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>{t.cta_services}</a>
          </div>
        </div>
        <button className="carousel-arrow prev" aria-label="Previous" onClick={prevSlide}>‹</button>
        <button className="carousel-arrow next" aria-label="Next" onClick={nextSlide}>›</button>
        <div className="carousel-controls">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} className={`carousel-dot${i === slide ? ' active' : ''}`} aria-label={`Slide ${i + 1}`} onClick={() => goSlide(i)} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pattern-bg">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-stack fade-in">
              <img className="about-img-main" src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=80" alt="Cultural heritage" loading="lazy" />
              <img className="about-img-accent" src="https://images.unsplash.com/photo-1572204292164-b35ba943fca7?w=500&q=80" alt="Arts" loading="lazy" />
              <div className="about-badge">
                <strong style={{ fontSize: '1.5rem', lineHeight: 1 }}>{t.about_badge_num}</strong>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.about_badge_label}</span>
                <span style={{ fontSize: '0.5rem', letterSpacing: '0.06em' }}>{t.est_label}</span>
              </div>
            </div>
            <div className="fade-in">
              <span className="section-label">{t.about_label}</span>
              <h2 className="section-title">{t.about_title}</h2>
              <div className="gold-divider" />
              <p style={{ color: 'var(--text-medium)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{t.about_p}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                {[{ label: t.mission_label, text: t.mission_text, icon: '🎯' }, { label: t.vision_label, text: t.vision_text, icon: '🌟' }].map((item, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: '10px', padding: '1.25rem', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', borderTop: '3px solid var(--gold)' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.4rem' }}>{item.label}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="values-grid">
                {[{ icon: '🌍', title: t.val1_title, desc: t.val1_desc }, { icon: '🎭', title: t.val2_title, desc: t.val2_desc }, { icon: '🏺', title: t.val3_title, desc: t.val3_desc }].map((v, i) => (
                  <div className="value-card" key={i}>
                    <div className="value-icon">{v.icon}</div>
                    <div className="value-title">{v.title}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTS & CULTURE */}
      <section id="arts">
        <div className="container">
          <div className="section-header centered fade-in">
            <span className="section-label">{t.arts_label}</span>
            <h2 className="section-title">{t.arts_title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{t.arts_sub}</p>
          </div>
          <div className="cards-grid-3">
            {[
              { img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', icon: '🥁', title: t.trad_title, desc: t.trad_desc },
              { img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80', icon: '🎵', title: t.modern_title, desc: t.modern_desc },
              { img: 'https://images.unsplash.com/photo-1580204928616-f39aa66e4f67?w=600&q=80', icon: '🏛️', title: t.heritage_title, desc: t.heritage_desc },
            ].map((c, i) => (
              <div className="culture-card fade-in" key={i}>
                <img className="culture-card-img" src={c.img} alt={c.title} loading="lazy" />
                <div className="culture-card-body">
                  <div className="culture-card-icon">{c.icon}</div>
                  <h3 className="culture-card-title">{c.title}</h3>
                  <p className="culture-card-desc">{c.desc}</p>
                  <button className="btn-card">{t.learn_more}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="pattern-bg">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">{t.events_label}</span>
            <h2 className="section-title">{t.events_title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{t.events_sub}</p>
          </div>
          <div className="events-scroll">
            {[
              { img: 'https://images.unsplash.com/photo-1580746738099-1cc1d10d5a5d?w=500&q=80', name: t.ev1_name, date: t.ev1_date, loc: t.ev1_loc, desc: t.ev1_desc },
              { img: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=500&q=80', name: t.ev2_name, date: t.ev2_date, loc: t.ev2_loc, desc: t.ev2_desc },
              { img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&q=80', name: t.ev3_name, date: t.ev3_date, loc: t.ev3_loc, desc: t.ev3_desc },
              { img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80', name: t.ev4_name, date: t.ev4_date, loc: t.ev4_loc, desc: t.ev4_desc },
              { img: 'https://images.unsplash.com/photo-1572204292164-b35ba943fca7?w=500&q=80', name: t.ev5_name, date: t.ev5_date, loc: t.ev5_loc, desc: t.ev5_desc },
            ].map((ev, i) => (
              <div className="event-card" key={i}>
                <img className="event-card-img" src={ev.img} alt={ev.name} loading="lazy" />
                <div className="event-card-body">
                  <div className="event-date-badge">📅 {ev.date}</div>
                  <div className="event-name">{ev.name}</div>
                  <div className="event-location">📍 {ev.loc}</div>
                  <p className="event-desc">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-header centered fade-in">
            <span className="section-label">{t.services_label}</span>
            <h2 className="section-title">{t.services_title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{t.services_sub}</p>
          </div>
          <div className="services-grid">
            {[
              { icon: '📋', title: t.srv1_title, desc: t.srv1_desc },
              { icon: '🎨', title: t.srv2_title, desc: t.srv2_desc },
              { icon: '💰', title: t.srv3_title, desc: t.srv3_desc },
              { icon: '🏅', title: t.srv4_title, desc: t.srv4_desc },
              { icon: '🛡️', title: t.srv5_title, desc: t.srv5_desc },
              { icon: '🌐', title: t.srv6_title, desc: t.srv6_desc },
            ].map((s, i) => (
              <div className="service-card fade-in" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <a className="btn-primary" href="#contact" style={{ fontSize: '0.83rem', padding: '0.6rem 1.5rem' }} onClick={e => { e.preventDefault(); scrollTo('contact') }}>{t.apply_btn}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="pattern-bg">
        <div className="container">
          <div className="section-header centered fade-in">
            <span className="section-label">{t.gallery_label}</span>
            <h2 className="section-title">{t.gallery_title}</h2>
            <div className="gold-divider" />
          </div>
          <div className="gallery-filters fade-in">
            {[
              { val: 'all', label: t.filter_all },
              { val: 'events', label: t.filter_events },
              { val: 'heritage', label: t.filter_heritage },
              { val: 'arts', label: t.filter_arts },
              { val: 'festivals', label: t.filter_festivals },
            ].map(f => (
              <button key={f.val} className={`filter-btn${galFilter === f.val ? ' active' : ''}`} onClick={() => setGalFilter(f.val)}>{f.label}</button>
            ))}
          </div>
          <div className="gallery-grid">
            {filteredGal.map((item, i) => {
              const idx = GALLERY_ITEMS.indexOf(item)
              return (
                <div key={i} className={`gallery-item${item.tall ? ' tall' : ''}`}>
                  <img src={item.img} alt={galCaps[idx] || ''} loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="gallery-caption">{galCaps[idx] || ''}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news">
        <div className="container">
          <div className="section-header centered fade-in">
            <span className="section-label">{t.news_label}</span>
            <h2 className="section-title">{t.news_title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{t.news_sub}</p>
          </div>
          <div className="news-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1607027811564-72a5faa8c3bf?w=500&q=80', tag: t.tag_announcement, date: t.date1, title: t.news1_title, excerpt: t.news1_excerpt },
              { img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&q=80', tag: t.tag_heritage, date: t.date2, title: t.news2_title, excerpt: t.news2_excerpt },
              { img: 'https://images.unsplash.com/photo-1580746738099-1cc1d10d5a5d?w=500&q=80', tag: t.tag_event, date: t.date3, title: t.news3_title, excerpt: t.news3_excerpt },
              { img: 'https://images.unsplash.com/photo-1589307357824-1e234f0cf60a?w=500&q=80', tag: t.tag_policy, date: t.date4, title: t.news4_title, excerpt: t.news4_excerpt },
              { img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=500&q=80', tag: t.tag_coop, date: t.date5, title: t.news5_title, excerpt: t.news5_excerpt },
              { img: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=500&q=80', tag: t.tag_arts, date: t.date6, title: t.news6_title, excerpt: t.news6_excerpt },
            ].map((n, i) => (
              <div className="news-card fade-in" key={i}>
                <img className="news-card-img" src={n.img} alt={n.title} loading="lazy" />
                <div className="news-card-body">
                  <div className="news-meta">
                    <span className="news-tag">{n.tag}</span>
                    <span className="news-date">{n.date}</span>
                  </div>
                  <h3 className="news-headline">{n.title}</h3>
                  <p className="news-excerpt">{n.excerpt}</p>
                  <button className="btn-card">{t.read_more}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div className="section-header centered fade-in">
            <span className="section-label">{t.proj_label}</span>
            <h2 className="section-title">{t.proj_title}</h2>
            <div className="gold-divider" />
          </div>
          <div className="projects-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1580204928616-f39aa66e4f67?w=600&q=80', status: t.status_progress, statusClass: 'status-active', title: t.proj1_title, desc: t.proj1_desc, prog: 65, progLabel: t.proj1_prog },
              { img: 'https://images.unsplash.com/photo-1589307357824-1e234f0cf60a?w=600&q=80', status: t.status_active, statusClass: 'status-active', title: t.proj2_title, desc: t.proj2_desc, prog: 40, progLabel: t.proj2_prog },
              { img: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&q=80', status: t.status_planning, statusClass: 'status-planning', title: t.proj3_title, desc: t.proj3_desc, prog: 10, progLabel: t.proj3_prog },
            ].map((p, i) => (
              <div className="project-card fade-in" key={i}>
                <img className="project-img" src={p.img} alt={p.title} loading="lazy" />
                <div className="project-body">
                  <span className={`project-status ${p.statusClass}`}>{p.status}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: `${p.prog}%` }} />
                  </div>
                  <span className="progress-label">{p.progLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURISM BANNER */}
      <div className="fullwidth-banner">
        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1800&q=80" alt="" loading="lazy" />
        <div className="fullwidth-banner-overlay" />
        <div className="fullwidth-banner-content fade-in">
          <span className="section-label" style={{ color: 'var(--gold)' }}>{t.tour_label}</span>
          <h2 className="section-title">{t.tour_title}</h2>
          <p>{t.tour_sub}</p>
          <a className="btn-primary" href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }}>{t.tour_cta}</a>
        </div>
      </div>

      {/* TOURISM DESTINATIONS */}
      <section style={{ paddingTop: '4rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="container">
          <div className="tourism-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1580204928616-f39aa66e4f67?w=600&q=80', tag: t.dest1_tag, name: t.dest1_name, desc: t.dest1_desc },
              { img: 'https://images.unsplash.com/photo-1572204292164-b35ba943fca7?w=600&q=80', tag: t.dest2_tag, name: t.dest2_name, desc: t.dest2_desc },
              { img: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80', tag: t.dest3_tag, name: t.dest3_name, desc: t.dest3_desc },
              { img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', tag: t.dest4_tag, name: t.dest4_name, desc: t.dest4_desc },
              { img: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&q=80', tag: t.dest5_tag, name: t.dest5_name, desc: t.dest5_desc },
              { img: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&q=80', tag: t.dest6_tag, name: t.dest6_name, desc: t.dest6_desc },
            ].map((d, i) => (
              <div className="tourism-card fade-in" key={i}>
                <img src={d.img} alt={d.name} loading="lazy" />
                <div className="tourism-card-overlay" />
                <div className="tourism-card-content">
                  <span className="tourism-card-tag">{d.tag}</span>
                  <div className="tourism-card-name">{d.name}</div>
                  <div className="tourism-card-desc">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pattern-bg">
        <div className="container">
          <div className="section-header centered fade-in">
            <span className="section-label">{t.contact_label}</span>
            <h2 className="section-title">{t.contact_title}</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">{t.contact_sub}</p>
          </div>
          <div className="contact-grid">
            <div className="fade-in">
              {[
                { icon: '📍', label: t.addr_label, value: t.addr_value },
                { icon: '📞', label: t.phone_label, value: '+237 222 22 34 48' },
                { icon: '✉️', label: t.email_label, value: 'contact@minac.cm' },
                { icon: '🕐', label: t.hours_label, value: t.hours_value },
              ].map((item, i) => (
                <div className="contact-info-item" key={i}>
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </div>
              ))}
              <div className="map-placeholder">
                <span style={{ fontSize: '2rem', position: 'relative', zIndex: 2 }}>🗺️</span>
                <span style={{ position: 'relative', zIndex: 2, fontWeight: 600 }}>{t.map_text}</span>
                <span style={{ position: 'relative', zIndex: 2, opacity: 0.7, fontSize: '0.8rem' }}>3° 52′ N, 11° 31′ E</span>
              </div>
            </div>
            <div className="fade-in">
              {formSubmitted ? (
                <div className="form-success">{t.form_success}</div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">{t.form_name}</label>
                      <input className="form-input" type="text" placeholder={t.form_name} value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} />
                      {formErrors.name && <span className="form-error">{formErrors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t.form_email}</label>
                      <input className="form-input" type="email" placeholder={t.form_email} value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} />
                      {formErrors.email && <span className="form-error">{formErrors.email}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t.form_subject}</label>
                    <select className="form-select" value={formData.subject} onChange={e => setFormData(d => ({ ...d, subject: e.target.value }))}>
                      <option value="">— {t.form_subject} —</option>
                      <option value="permit">{t.sub1}</option>
                      <option value="artist">{t.sub2}</option>
                      <option value="funding">{t.sub3}</option>
                      <option value="event">{t.sub4}</option>
                      <option value="heritage">{t.sub5}</option>
                      <option value="general">{t.sub6}</option>
                    </select>
                    {formErrors.subject && <span className="form-error">{formErrors.subject}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t.form_message}</label>
                    <textarea className="form-textarea" placeholder={t.form_message} value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))} />
                    {formErrors.message && <span className="form-error">{formErrors.message}</span>}
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.9rem 2.5rem' }}>{t.form_submit}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-logo">
              <div className="footer-brand-icon">🎭</div>
              <div>
                <div style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '0.95rem' }}>{t.ministry_name}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', letterSpacing: '0.06em' }}>{t.ministry_sub}</div>
              </div>
            </div>
            <p className="footer-tagline">{t.footer_tagline}</p>
            <div className="social-links">
              {['𝕏', 'f', 'in', '▶'].map((s, i) => (
                <a key={i} className="social-link" href="#" aria-label="Social media" onClick={e => e.preventDefault()}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-heading">{t.footer_links}</div>
            <ul className="footer-links">
              {navLinks.map(l => (
                <li key={l.id}><a href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id) }}>› {l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-heading">{t.footer_services}</div>
            <ul className="footer-links">
              {[t.srv1_title, t.srv2_title, t.srv3_title, t.srv4_title, t.srv5_title, t.srv6_title].map((s, i) => (
                <li key={i}><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>› {s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-heading">{t.footer_newsletter}</div>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem', lineHeight: 1.6 }}>{t.footer_newsletter_sub}</p>
            <div className="newsletter-input-wrap">
              <input className="newsletter-input" type="email" placeholder={t.footer_newsletter_ph} />
              <button className="newsletter-btn">{t.footer_subscribe}</button>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <div className="footer-heading" style={{ marginBottom: '0.75rem' }}>🇨🇲 Cameroun • Cameroon</div>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>📍 Avenue du 20 Mai, Yaoundé<br />📞 +237 222 22 34 48<br />✉️ contact@minac.cm</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer_copy}</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[t.footer_privacy, t.footer_terms, t.footer_sitemap].map((lnk, i) => (
              <a key={i} href="#" style={{ color: 'inherit', textDecoration: 'none' }} onClick={e => e.preventDefault()}>{lnk}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
