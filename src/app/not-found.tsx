import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center'>
            <div className='text-9xl mb-4'>🥀</div>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>
                Parece que la flor que buscas se ha marchitado
            </h2>
            <p className='text-gray-600 mb-8 max-w-md'>
                La flor que buscas no está en nuestro jardín virtual.
                Pero no te preocupes, tenemos muchas otras flores hermosas para ti.
            </p>
            <Link
                href='/'
                className='px-6 py-3 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-600/90 transition-colors shadow-lg'
            >
                Volver al catálogo
            </Link>
        </div>
    )
}