import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className='flex  items-center justify-between p-10'>
            <Link href="/" className='font-bold text-red-500 gap-1 text-2xl sm:text-4xl md:text-7xl'>
                ReactNode <span className='text-gray-500'>Send</span>
            </Link>
        </header>
    )
}
