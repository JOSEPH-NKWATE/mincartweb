export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  nameFr: string
  descriptionFr: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Product 1',
    image: '/placeholder.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    shortDescription: 'A generic product description for your first product.',
    nameFr: 'Produit 1',
    descriptionFr: 'Description générique du produit. Cette page de démonstration présente les informations essentielles du produit sélectionné.',
    price: 3000,
  },
]

export default products
