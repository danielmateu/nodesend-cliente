import authContext from 'context/auth/authContext'
import { useContext } from 'react'



export const Alerta = () => {

    const AuthContext = useContext(authContext)
    const { mensaje } = AuthContext;

    return (
        <div className='bg-gray-600 p-4 text-center rounded text-lg text-red-600 font-semibold'>
            {mensaje}
        </div>
    )
}
