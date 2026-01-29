import { render, screen } from '@testing-library/react'

import { ProductCard } from '@/components/ui/ProductCard'
import { Product } from '@/types'

// Mockear datos para aislar el componente
const mockProduct: Product = {
    id: '1',
    name: 'Orquídea Fantasma',
    binomialName: 'Una orquídea rara y hermosa.',
    imgUrl: 'https://dulces-petalos.jakala.es/images/orquidea.jpg',
    price: 25.50,
    wateringsPerWeek: 3,
    fertilizerType: 'nitrogen',
    heightInCm: 50
}

describe('ProductCard Component', () => {
    it('debe renderizar la información del producto correctamente', () => {
        render(<ProductCard product={mockProduct} />)

        // Verificar presencia de datos críticos
        expect(screen.getByText('Orquídea Fantasma')).toBeInTheDocument()
        expect(screen.getByText(/25,50/)).toBeInTheDocument()
    })

    it('debe renderizar la imagen cuando imgUrl es válida', () => {
        render(<ProductCard product={mockProduct} />)

        const image = screen.getByAltText('Orquídea Fantasma')
        // Validar que la fuente de la imagen contiene la URL esperada
        expect(image).toBeInTheDocument()
        expect(image.getAttribute('src')).toContain('orquidea.jpg')
    })

    it('debe mostrar el fallback (🌸) si no hay imagen disponible', () => {
        // Simular escenario de error en datos
        const productWithoutImage = { ...mockProduct, imgUrl: '' }

        render(<ProductCard product={productWithoutImage} />)

        // Validar renderizado de elemento alternativo
        expect(screen.getByText('🌸')).toBeInTheDocument()
        expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })
})