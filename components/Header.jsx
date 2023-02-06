import appContext from 'context/app/appContext'
import authContext from 'context/auth/authContext'
import { CONFIG_FILES } from 'next/dist/shared/lib/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'


export const Header = () => {

    //Routing
    const router = useRouter()

    /* Destructuring the context. */
    const AuthContext = useContext(authContext)
    const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext
    /* Context de la app */
    const AppContext = useContext(appContext)
    const { limpiarState } = AppContext

    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const redireccionar = () => {
        // console.log('Redireccionando...')
        router.push('/')
        limpiarState()
    }



    return (
        <header className='flex flex-col sm:flex-row items-center justify-between p-10'>
            <Link 
            href="/" 
            className='font-bold text-red-500 gap-1 text-2xl sm:text-4xl'
            onClick={() => redireccionar()}
            >
                ReactNode <span className='text-gray-500'>Send</span>
            </Link>

            <div className='flex gap-2'>
                {
                    usuario ? (
                        <div className='flex gap-2'>
                            <p>Hola {usuario.nombre}</p>
                            <button
                                onClick={() => cerrarSesion()}
                                className='bg-red-300 hover:bg-red-400 px-2 rounded transition-colors'>
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link href='/login' className='bg-sky-200 p-2 rounded-2xl hover:bg-sky-300 transition-colors text-gray-500 '>Iniciar Sesión</Link>
                            <Link href='/crear-cuenta' className='bg-green-200 p-2 rounded-2xl hover:bg-green-300 transition-colors text-gray-500 '>Crear Cuenta</Link>
                        </>
                    )
                }
            </div>
        </header>
    )
}
