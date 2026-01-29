import { IconChevronRight } from '@tabler/icons-react'
import { Product } from '@/types'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const formattedPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(product.price)

  return (
    <div className="animate-in fade-in duration-500 h-full">
      <nav className="mb-6 flex items-center gap-2 text-sm text-neutral-800">
        <Link href="/" className="hover:text-gray-900 transition-colors">
          Inicio
        </Link>
        <IconChevronRight size={24} color="currentColor" />
        <h1 className="text-neutral-800 font-medium">{product.name}</h1>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className={clsx(
          'relative w-full overflow-hidden rounded-4xl bg-white shadow-sm',
          'aspect-4/3 md:aspect-3/4',
          'md:col-span-5'
        )}
        >
          {product.imgUrl ? (
            <Image
              src={product.imgUrl}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-6xl bg-gray-100">
              🌸
            </div>
          )}
        </div>

        <div className="flex flex-col md:col-span-7 h-full justify-center">

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-1000 mb-2 font-nunito">
            {product.name}
          </h1>

          <p className="text-[16px] text-neutral-800 font-regular mb-6 font-dm-sans">
            {product.binomialName}
          </p>

          <h4 className="text-[28px] font-bold text-neutral-1000 mb-8 font-dm-sans">
            {formattedPrice}
          </h4>

          <div className="space-y-4 mb-10 font-dm-sans text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">•</span>
              <span>Regar {product.wateringsPerWeek} vez por semana</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400">•</span>
              <span>Fertilizar con {product.fertilizerType}</span>
            </div>
          </div>

          <button
            className={clsx(
              'w-full md:w-auto px-10 py-4 rounded-full',
              'bg-accent-600 text-white font-bold text-lg',
              'hover:opacity-90 transition-opacity shadow-sm',
              'active:scale-95 duration-100'
            )}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  )
}
