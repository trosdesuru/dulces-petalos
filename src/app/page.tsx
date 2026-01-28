import { getProducts } from '@/lib/api'
import { ProductGrid } from '@/components/feature/ProductGrid'

export default async function Home() {
  const products = await getProducts()

  return (
    <main className='container mx-auto px-4 py-8 min-h-screen'>
      <header className='mb-8 text-center sm:text-left'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-2'>
          Dulces Pétalos 🌺
        </h1>
        <p className='text-gray-600'>
          Descubre nuestra selección de flores frescas
        </p>
      </header>

      <ProductGrid products={products} />
    </main>
  )
}