import { CREAR_ENLACE_ERROR, CREAR_ENLACE_EXITO, LIMPIAR_ALERTA, MOSTRAR_ALERTA, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO, SUBIR_ARCHIVO } from 'types';

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

        case SUBIR_ARCHIVO:
            return {
                ...state,
                cargando: true
            }

        case SUBIR_ARCHIVO_EXITO:
            return {
                ...state,
                nombre: action.payload.nombre,
                nombre_original: action.payload.nombre_original,
                cargando: null
            }
            case SUBIR_ARCHIVO_ERROR:
                return {
                    ...state,
                    mensaje_archivo: action.payload,
                    cargando: null
            }
        
        default: state

    }
}

export default appReducer;