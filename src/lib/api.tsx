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