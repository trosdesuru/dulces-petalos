import { Product } from '@/types'

const API_URL = 'https://dulces-petalos.jakala.es/api/v1/product'

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error(`Error fetching products: ${response.statusText}`)
        }

        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getProductById = async (id: string): Promise<Product | null> => {
    try {
        const response = await fetch(`${API_URL}/${id}`)

        if (!response.ok) {
            return null
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error)

        return null
    }
}