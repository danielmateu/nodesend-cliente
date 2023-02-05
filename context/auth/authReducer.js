// const initialState = {}

import { REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from "types"


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


        default: return state
    }
}
