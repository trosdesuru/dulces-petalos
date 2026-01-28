import { getProducts } from '@/lib/api'
import { get } from 'http'

export default async function Home() {

  const products = await getProducts()

  return (
    <main className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Floristería Dulces Pétalos</h1>

      <pre className='bg-gray-100 p-4 rounded text-xs overflow-auto'>
        {JSON.stringify(products, null, 2)}
      </pre>

      <p className='mt-4 text-gray-600'>
        Productos cargados: {products.length}
      </p>
    </main>
  )
}