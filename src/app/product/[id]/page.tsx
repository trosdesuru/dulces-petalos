import { getProductById } from '@/lib/api'
import { ProductDetail } from '@/components/feature/ProductDetail'

import { notFound } from 'next/navigation'
import clsx from 'clsx'

interface PageProps {
    params: Promise<{ id: string }>
}

// // Generar metadatos dinámicos para SEO
export async function generateMetadata({ params }: PageProps) {
    const { id } = await params
    const product = await getProductById(id)

    if (!product) return { title: 'Producto no encontrado' }

    return {
        title: `${product.name} | Dulces Pétalos`,
        description: product.binomialName,
    }
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params

    // Fetch de datos usando el servicio getProductById
    const product = await getProductById(id)

    // // Disparar pantalla error 404 si el producto no existe
    if (!product) {
        notFound()
    }

    return (
        <main
            className={clsx(
                'w-full min-h-[calc(100vh-var(--spacing-header-height))]',
                'flex justify-center',
                'pt-12 pb-12'
            )}
        >

            <div
                className={clsx(
                    'w-full max-w-300',
                    'px-4 md:px-6'
                )}
                style={{
                    maxHeight: '905px'
                }}
            >
                <ProductDetail product={product} />
            </div>
        </main>
    )
}