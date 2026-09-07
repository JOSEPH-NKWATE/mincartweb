import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { InstitutionalFooter } from '@/components/InstitutionalFooter'
import { InstitutionalHeader } from '@/components/InstitutionalHeader'
import { useLanguage } from '@/lib/language'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()
  const { language } = useLanguage()
  const french = language === 'fr'

  return (
    <div className="institutional-page">
      <InstitutionalHeader />
      <main className="flex flex-col md:flex-row gap-8 p-5">
        <div className="w-full md:w-[55%]">
          <img
            src={product.image}
            alt={french ? product.nameFr : product.name}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="w-full md:w-[45%] p-8">
          <Link to="/" className="inline-block mb-4">
            &larr; {french ? 'Retour à l’accueil' : 'Back to home'}
          </Link>
          <h1 className="text-3xl font-bold mb-2">{french ? product.nameFr : product.name}</h1>
          <p className="mb-6">{french ? product.descriptionFr : product.description}</p>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              ${product.price.toLocaleString()}
            </div>
            <button className="px-6 py-2 rounded-lg border">
              {french ? 'Ajouter au panier' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </main>
      <InstitutionalFooter />
    </div>
  )
}
