import { getProductById } from '@/lib/api'
import { ProductDetail } from '@/components/feature/ProductDetail'

import { notFound } from 'next/navigation'

interface PageProps {
    params: Promise<{ id: string }>
}

// Metadata Dinámica
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
    // Desempaquetamos los params
    const { id } = await params

    // Fetch de datos usando el servicio
    const product = await getProductById(id)

    // Validación: Si no hay producto dispara la página 404
    if (!product) {
        notFound()
    }

    // Renderizado usando el componente visual
    return (
        <main className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
            <ProductDetail product={product} />
        </main>
    )
}