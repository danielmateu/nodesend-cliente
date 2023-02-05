import { createContext, useEffect, useReducer } from 'react'
import authContext from './authContext';
import authReducer from './authReducer';
import { CERRAR_SESION, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, REGISTRO_ERROR, REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from 'types';

import clientAxios from 'config/axios';
import tokenAuth from 'config/tokenAuth';


const AuthState = ({ children }) => {

    //Definir un state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
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
            // console.log(respuesta.data.msg);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg
            })


        } catch (error) {
            // console.log(error.response.data.msg);
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })
        }

        //Clean alert after 3 seconds 
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA
            })
        }, 3000);
    }

    //authenticate users    
    const iniciarSesion = async datos => {
        // console.log(datos);
        try {
            const respuesta = await clientAxios.post('/api/auth', datos);
            // console.log(respuesta.data.token);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
            })
        } catch (error) {
            // console.log(error.response.data.msg)
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }

        //Clean alert after 3 seconds 
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA
            })
        }, 3000);
    }

    //Return the user authenticated for the JWT
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            //Function to send the token by headers
            tokenAuth(token);
        }

        try {
            const respuesta = await clientAxios.get('/api/auth');
            // console.log(respuesta);
            if (respuesta.data.usuario) {
                dispatch({
                    type: USUARIO_AUTENTICADO,
                    payload: respuesta.data.usuario
                })
            }
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    //Close sesion
    const cerrarSesion = async() => {
        dispatch({
            type: CERRAR_SESION
        })

        // console.log('Cerrar Sesion');
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                usuarioAutenticado,
                iniciarSesion,
                cerrarSesion,
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState
