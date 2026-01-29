'use client'

import { useEffect } from 'react'

export default function Error({ error, reset, }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Capturar el error para logging
        console.error('Error capturado en boundary:', error)
    }, [error])

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-red-50 px-4 text-center'>
            <div className='bg-white p-8 rounded-xl shadow-xl max-w-lg border border-red-100'>
                <div className='text-6xl mb-4'>🌵</div>
                <h2 className='text-2xl font-bold text-red-600 mb-2'>
                    ¡Ups! Algo salió mal
                </h2>
                <p className='text-gray-600 mb-6'>
                    Hemos tenido un problema al cargar el jardín virtual. No es culpa tuya.
                </p>
                <div className='flex gap-4 justify-center'>
                    <button
                        onClick={() => reset()}
                        className='px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors'
                    >
                        Intentar de nuevo
                    </button>
                    <a
                        href='/'
                        className='px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors'
                    >
                        Ir al inicio
                    </a>
                </div>
            </div>
        </div>
    )
}