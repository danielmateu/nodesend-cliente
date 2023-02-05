import { useContext, useReducer } from 'react';
import { CREAR_ENLACE_ERROR, CREAR_ENLACE_EXITO, LIMPIAR_ALERTA, MOSTRAR_ALERTA, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO } from 'types';
// import CategoriasContext from '../context/CategoriasProvider';
import appContext from './appContext';
import appReducer from './appReducer';


const appState = ({children}) => {

    return(
        <appContext.Provider
            value={{

            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default appState;

