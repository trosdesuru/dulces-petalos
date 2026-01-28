import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
    }).format(product.price)

    return (
        <Link
            href={`/product/${product.id}`}
            className='group flex flex-col border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300'
        >
            <div className='relative aspect-4/3 w-full overflow-hidden bg-gray-100'>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                    priority={false}
                />
            </div>

            <div className='p-4 flex flex-col gap-2 grow'>
                <h2 className='text-lg font-semibold text-gray-800 line-clamp-1 title={product.name}'>
                    {product.name}
                </h2>

                <p className='text-sm text-gray-500 line-clamp-2 grow'>
                    {product.binomialName}
                </p>

                <div className='mt-2 flex items-center justify-between'>
                    <span className='text-xl font-bold text-primary-600'>
                        {formattedPrice}
                    </span>

                    <span className='text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full group-hover:bg-blue-100 transition-colors'>
                        Ver detalle
                    </span>
                </div>
            </div>
        </Link>
    )
}