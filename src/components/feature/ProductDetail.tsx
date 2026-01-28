import { Product } from '@/types'

import Image from 'next/image'
import Link from 'next/link'

interface ProductDetailProps {
    product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
    const formattedPrice = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
    }).format(product.price)

    const image = product.imgUrl && product.imgUrl.trim() !== ''

    return (
        <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden animate-in fade-in zoom-in duration-300'>
            <div className='md:flex'>
                {/* Columna Imagen */}
                <div className='md:w-1/2 relative aspect-square md:aspect-auto h-64 md:h-auto bg-gray-100'>
                    {image ? (
                        <Image
                            src={product.imgUrl}
                            alt={product.name}
                            fill
                            className='object-cover'
                            priority // Prioridad alta porque es la imagen principal
                            sizes='(max-width: 768px) 100vw, 50vw'
                        />
                    ) : (
                        <div className='flex items-center justify-center w-full h-full text-6xl'>
                            🌸
                        </div>
                    )}
                </div>

                {/* Columna Info */}
                <div className='p-8 md:w-1/2 flex flex-col justify-center'>
                    <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1'>
                        Detalle de flor
                    </div>
                    <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                        {product.name}
                    </h1>
                    <p className='text-gray-600 text-lg mb-6 leading-relaxed'>
                        {product.binomialName}
                    </p>

                    <div className='flex items-center justify-between mt-auto'>
                        <span className='text-3xl font-bold text-gray-900'>
                            {formattedPrice}
                        </span>
                        <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl'>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>

            {/* Botón Volver (Requisito explícito del PDF) */}
            <div className='bg-gray-50 px-8 py-4 border-t border-gray-100'>
                <Link
                    href='/'
                    className='text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2'
                >
                    ← Volver al catálogo
                </Link>
            </div>
        </div>
    )
}
