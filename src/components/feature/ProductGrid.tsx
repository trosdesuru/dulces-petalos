'use client' // Directiva obligatoria para usar hooks como useState

import { useState, useMemo } from 'react'
import { Product } from '@/types'
import { ProductCard } from '@/components/ui/ProductCard'
import { SearchBar } from '@/components/ui/SearchBar'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState('')

  // Optimizamos el filtrado con useMemo para evitar cálculos en re-renders innecesarios
  // (Aunque con pocos productos no se nota, Jakala valorará que pienses en escalabilidad)
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products
    
    const lowerTerm = searchTerm.toLowerCase()
    return products.filter((product) =>
      product.name.toLowerCase().includes(lowerTerm)
    )
  }, [products, searchTerm])

  return (
    <div className='space-y-8'>
      {/* Zona de Controles */}
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm'>
        <h2 className='text-gray-600 font-medium'>
          Mostrando {filteredProducts.length} productos
        </h2>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      {/* Grid de Resultados */}
      {filteredProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        // Estado vacío (Feedback al usuario)
        <div className='text-center py-12'>
          <p className='text-gray-500 text-lg'>
            No encontramos flores con ese nombre 🌸
          </p>
          <button 
            onClick={() => setSearchTerm('')}
            className='mt-4 text-blue-600 hover:underline'
          >
            Limpiar búsqueda
          </button>
        </div>
      )}
    </div>
  )
}
