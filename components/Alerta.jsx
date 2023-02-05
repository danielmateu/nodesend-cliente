import authContext from 'context/auth/authContext'
import { useContext } from 'react'



export const Alerta = () => {

    const AuthContext = useContext(authContext)
    const { mensaje } = AuthContext;

    return (
        <div className='bg-sky-200 p-4 text-center rounded text-lg text-gray-600'>
            {mensaje}
        </div>
    )
}
