'use client'

import clsx from 'clsx'
import Link from 'next/link'
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
        <div className='min-h-screen flex flex-col items-center justify-center bg-neutral-200 px-4 text-center'>
            <div className='bg-white p-8 rounded-xl shadow-xl max-w-lg border border-neutral-300'>
                <h2 className='text-2xl font-bold text-accent-600 mb-2'>
                    Algo salió mal
                </h2>
                <p className='text-gray-600 mb-6'>
                    Hemos tenido un problema al cargar el jardín virtual. No es culpa tuya.
                </p>
                <div className='flex gap-4 justify-center'>
                    <button
                        onClick={() => reset()}
                        className={clsx(
                            'px-6 py-2',
                            'bg-accent-600 text-white',
                            'rounded-lg font-medium',
                            'hover:bg-accent-600/90 transition-colors',
                            'cursor-pointer'
                        )}
                    >
                        Intentar de nuevo
                    </button>
                    <Link
                        href='/'
                        className={clsx(
                            'px-6 py-2 border',
                            'border-neutral-300 text-neutral-800',
                            'rounded-lg font-medium',
                            'hover:bg-gray-50 transition-colors'
                        )}
                    >
                        Ir al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}