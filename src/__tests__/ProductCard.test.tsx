import { render, screen } from '@testing-library/react'

import { ProductCard } from '@/components/ui/ProductCard'
import { Product } from '@/types'

const mockProduct: Product = {
    id: '1',
    name: 'Orquídea Fantasma',
    binomialName: 'Una orquídea rara y hermosa.',
    imgUrl: 'https://dulces-petalos.jakala.es/images/orquidea.jpg',
    price: 25.50,
    wateringsPerWeek: 3,
    fertilizerType: 'nitrogen',
    heighInCm: 50
}

describe('ProductCard Component', () => {
    it('debe renderizar la información del producto correctamente', () => {
        render(<ProductCard product={mockProduct} />)

        // Verificar el nombre
        expect(screen.getByText('Orquídea Fantasma')).toBeInTheDocument()

        // Verificar el precio formateado
        expect(screen.getByText(/25,50/)).toBeInTheDocument()
    })

    it('debe renderizar la imagen cuando imgUrl es válida', () => {
        render(<ProductCard product={mockProduct} />)

        // Buscar la imagen por su texto alternativo
        const image = screen.getByAltText('Orquídea Fantasma')

        expect(image).toBeInTheDocument()
        expect(image.getAttribute('src')).toContain('orquidea.jpg')
    })

    it('debe mostrar el fallback (🌸) si no hay imagen', () => {
        // Crear un producto con la imagen vacía para probar la lógica defensiva
        const productWithoutImage = { ...mockProduct, imgUrl: '' }

        render(<ProductCard product={productWithoutImage} />)

        // Buscamos el icono del fallback
        expect(screen.getByText('🌸')).toBeInTheDocument()

        // Asegurar que no intenta renderizar una imagen rota
        const image = screen.queryByRole('img')
        expect(image).not.toBeInTheDocument()
    })
})