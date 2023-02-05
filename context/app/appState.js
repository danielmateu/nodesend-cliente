import { useContext, useReducer } from 'react';
import { CREAR_ENLACE_ERROR, CREAR_ENLACE_EXITO, LIMPIAR_ALERTA, MOSTRAR_ALERTA, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO } from 'types';
import appContext from './appContext';
import appReducer from './appReducer';


const AppState = ({children}) => {

    const initialState = {
        alerta: null,
        mensaje_archivo: null
    }

    //Crear Dispatch y state
    const [state, dispatch] = useReducer(appReducer, initialState);

    //Show an alert
    const mostrarAlerta = msg => {
        // console.log(msg);
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg
            
        });

        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA
            })
        }, 3000);
    }

    return(
        <appContext.Provider
            value={{
                mostrarAlerta,
                mensaje_archivo: state.mensaje_archivo
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default AppState;



