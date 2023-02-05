// const initialState = {}

import {
    CERRAR_SESION,
    LIMPIAR_ALERTA,
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    REGISTRO_ERROR,
    REGISTRO_EXITOSO,
    USUARIO_AUTENTICADO
} from "types"


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload,
                autenticado: true
            }
        case REGISTRO_EXITOSO:
            return {
                ...state,
                mensaje: action.payload,
            }

        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                token: action.payload,
                autenticado: true,
            }

        case REGISTRO_ERROR:
        case LOGIN_ERROR:
            return {
                ...state,
                mensaje: action.payload,
            }

        case LIMPIAR_ALERTA:
            return {
                ...state,
                mensaje: null
            }

        //Case close session
        /* Removing the token from local storage and setting the user to null, token to null, autenticated to
        false, and message to null. */
        case CERRAR_SESION:
            localStorage.removeItem('token')
            return {
                ...state,
                usuario: null,
                token: null,
                autenticado: null,
                mensaje: null,
            }

        default: return state
    }
}
