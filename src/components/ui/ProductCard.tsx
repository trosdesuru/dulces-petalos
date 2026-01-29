import { Product } from '@/types'
import Flor from '../../../public/assets/Flor.svg'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { IconArrowUpRight } from '@tabler/icons-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(product.price)

  const image = product.imgUrl && product.imgUrl.trim() !== ''

  return (
    <Link
      href={`/product/${product.id}`}
      className={clsx(
        'px-4 py-4 ',
        'group block h-full',
        'rounded-4xl',
        'transition-all duration-300',
        'hover:-translate-y-1',
        'shadow-md'
      )}
    >
      <div className="mb-4">
        <h4 className="text-xl font-bold leading-tight">
          {product.name}
        </h4>
        <p className="text-sm text-neutral-800 font-medium mt-1">
          {product.binomialName}
        </p>
      </div>

      <div className="relative aspect-4/3 w-full overflow-hidden rounded-1.5rem bg-neutral-100 shadow-sm rounded-3xl">
        {image ? (
          <Image
            src={product.imgUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-neutral-200 text-neutral-400 rounded-3xl">
            <Image
              src={Flor}
              alt='Imagen no disponible'
              width={64}
              height={64} />
          </div>
        )}

        <div className={clsx(
          'absolute bottom-3 left-3',
          'px-4 py-1.5 rounded-full',
          'bg-white/95 backdrop-blur-sm',
          'shadow-sm z-10'
        )}>
          <span className="text-neutral-1000 font-medium text-[20px]">
            {formattedPrice}
          </span>
        </div>

        <div
          className={clsx(
            'absolute bottom-3 right-3 z-10',
            'flex h-9 w-9 items-center justify-center rounded-full',
            'bg-white text-neutral-1000 shadow-sm transition-colors',
            'group-hover:bg-accent-600 group-hover:text-white'
          )}
        >
          <IconArrowUpRight />
        </div>
      </div>
    </Link>
  )
}