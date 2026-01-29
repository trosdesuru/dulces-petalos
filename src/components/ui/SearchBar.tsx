import { IconSearch } from "@tabler/icons-react"
import clsx from "clsx"

interface SearchBarProps {
    value: string
    onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className={clsx(
            'relative',
            'h-10 w-full xl:max-w-150',
            'mx-auto'
        )}
        >
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <IconSearch
                    style={
                        { color: 'var(--color-neutral-500)' }
                    }
                />
            </div>

            <input
                type='text'
                className={clsx(
                    'block w-full h-full',
                    'p-4 pl-10',
                    'text-sm text-neutral-800',
                    'border border-neutral-400 rounded-lg',
                    'bg-gray-50 outline-none',
                    'focus:ring-accent-600 focus:border-accent-600'
                )}
                placeholder='Buscar en nuestra tienda'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            />
        </div>
    )
}