// const initialState = {}

import { LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, REGISTRO_ERROR, REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from "types"


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload,
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


        default: return state
    }
}
