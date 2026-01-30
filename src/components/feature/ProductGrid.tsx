'use client'

import { useState, useMemo } from 'react'

import { Product } from '@/types'
import { ProductCard } from '@/components/ui/ProductCard'
import { SearchBar } from '@/components/ui/SearchBar'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState('')

  // Filtrar productos memorizando resultado para optimizar rendimiento
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products

    const lowerTerm = searchTerm.toLowerCase()
    return products.filter((product) =>
      product.name.toLowerCase().includes(lowerTerm)
    )
  }, [products, searchTerm])

  return (
    <div className='space-y-8'>
      <div className='flex flex-col'>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      {filteredProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-300 mx-auto'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className='text-center py-12'>
          <p className='text-gray-500 text-lg'>
            No encontramos flores con ese nombre 🌸
          </p>
          <button
            onClick={() => setSearchTerm('')}
            className='mt-4 text-blue-600 hover:underline cursor-pointer'
          >
            Limpiar búsqueda
          </button>
        </div>
      )}
    </div>
  )
}
