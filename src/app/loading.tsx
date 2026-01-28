export default function Loading() {
    return (
        <main className='container mx-auto px-4 py-8 min-h-screen'>
            {/* Skeleton del Header */}
            <div className='mb-8 space-y-4 animate-pulse'>
                <div className='h-10 bg-gray-200 rounded w-64 mx-auto sm:mx-0'></div>
                <div className='h-6 bg-gray-100 rounded w-96 mx-auto sm:mx-0'></div>
            </div>

            {/* Skeleton del Search Bar */}
            <div className='bg-white p-4 rounded-lg shadow-sm mb-8 animate-pulse'>
                <div className='h-12 bg-gray-100 rounded w-full max-w-md'></div>
            </div>

            {/* Skeleton del Grid de Productos */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className='border border-gray-200 rounded-lg overflow-hidden bg-white h-full animate-pulse'>
                        <div className='aspect-4/3 bg-gray-200 w-full'></div>
                        <div className='p-4 space-y-3'>
                            <div className='h-6 bg-gray-200 rounded w-3/4'></div>
                            <div className='h-4 bg-gray-100 rounded w-full'></div>
                            <div className='h-4 bg-gray-100 rounded w-2/3'></div>
                            <div className='flex justify-between items-center pt-2'>
                                <div className='h-8 bg-gray-200 rounded w-20'></div>
                                <div className='h-6 bg-blue-100 rounded w-24'></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}