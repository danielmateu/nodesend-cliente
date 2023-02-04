import Link from 'next/link'


export const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row items-center justify-between p-10'>
            <Link href="/" className='font-bold text-red-500 gap-1 text-2xl sm:text-4xl'>
                ReactNode <span className='text-gray-500'>Send</span>
            </Link>

            <div className='flex gap-2'>
                <Link href='/login' className='bg-sky-200 p-2 rounded-2xl hover:bg-sky-300 transition-colors text-gray-500 '>Iniciar Sesión</Link>
                <Link href='/crear-cuenta' className='bg-green-200 p-2 rounded-2xl hover:bg-green-300 transition-colors text-gray-500 '>Crear Cuenta</Link>
            </div>
        </header>
    )
}
