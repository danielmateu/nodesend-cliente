import { CREAR_ENLACE_ERROR, CREAR_ENLACE_EXITO, LIMPIAR_ALERTA, MOSTRAR_ALERTA, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO } from 'types';

// Create AppReducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: action.payload
            }
        case LIMPIAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: null
            }
        
        default: state

    }
}

export default appReducer;