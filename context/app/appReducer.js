import { CREAR_ENLACE_ERROR, CREAR_ENLACE_EXITO, LIMPIAR_ALERTA, MOSTRAR_ALERTA, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO } from 'types';

//Create AppReducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
        return {
            ...state,
            user: action.payload,
        };
        case "SET_TOKEN":
        return {
            ...state,
            token: action.payload,
        };
        default:
        return state;
    }
}

export default appReducer;