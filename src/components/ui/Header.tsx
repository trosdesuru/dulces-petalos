import Link from 'next/link'

export function Header() {
    return (
        <header
            className='sticky top-0 z-50 w-full shadow-sm transition-all'
            style={{
                backgroundColor: 'var(--color-neutral-100)',
                height: 'var(--spacing-header-height)',
                paddingTop: 'var(--spacing-2xs)',
                paddingBottom: 'var(--spacing-2xs)',
                paddingLeft: 'var(--spacing-3xs)',
                paddingRight: 'var(--spacing-3xs)',
                gap: 'var(--spacing-3xs)',
            }}
        >
            <div className='mx-auto flex h-full max-w-1728px items-center justify-center'>
                <Link
                    href='/'
                    className='hover:opacity-80 transition-opacity flex items-center justify-center'
                    aria-label='Volver al inicio'
                >
                    <span className='text-4xl leading-none select-none'>🌸</span>
                </Link>
            </div>
        </header>
    )
}