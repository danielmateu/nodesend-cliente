import { createContext, useReducer } from 'react'
import authContext from './authContext';
import authReducer from './authReducer';



const AuthState = ({ children }) => {

    //Definir un state inicial
    const initialState = {
        token: '',
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    //Definir Reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    //Usuario Autenticado
    const usuarioAutenticado = (nombre) => {
        
    }


    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}
        >
            {children}
        </authContext.Provider>
    )
}



export default AuthState
