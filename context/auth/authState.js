import { createContext, useReducer } from 'react'
import authContext from './authContext';
import authReducer from './authReducer';
import { USUARIO_AUTENTICADO } from 'types';
import clientAxios from 'config/axios';


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

    //Registrar nuevos usuarios
    const registrarUsuario = async datos => {
        try { 
            const respuesta = await clientAxios.post('/api/usuarios', datos);
            console.log(respuesta);
            
        }catch(error) {
            console.log(error);
        }
    }

    //Usuario Autenticado
    const usuarioAutenticado = (nombre) => {
        dispatch({
            type: USUARIO_AUTENTICADO,
            payload: nombre
        })
    }


    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                usuarioAutenticado
            }}
        >
            {children}
        </authContext.Provider>
    )
}



export default AuthState
