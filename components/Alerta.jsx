import appContext from 'context/app/appContext'
import authContext from 'context/auth/authContext'
import { useContext } from 'react'



export const Alerta = () => {

    //extraer mensaje de error para usuarios
    const AuthContext = useContext(authContext)
    const { mensaje } = AuthContext;

    //Extraer el mensaje de error de archivos   
    const AppContext = useContext(appContext)
    const { mensaje_archivo } = AppContext;


    return (
        <div className='bg-gray-200 p-4 my-4 text-center rounded text-lg text-red-400 font-semibold'>
            {mensaje || mensaje_archivo}
        </div>
    )
}
