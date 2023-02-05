import clientAxios from 'config/axios';
import { useContext, useReducer } from 'react';
import { CREAR_ENLACE_ERROR, CREAR_ENLACE_EXITO, LIMPIAR_ALERTA, MOSTRAR_ALERTA, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO, SUBIR_ARCHIVO } from 'types';
import appContext from './appContext';
import appReducer from './appReducer';


const AppState = ({ children }) => {

    const initialState = {
        alerta: null,
        mensaje_archivo: null,
        nombre: '',
        nombre_original: '',
        cargando: null,
        descargas: 1,
        password: '',
        autor: null,
        url: ''
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

    //upload files to the server
    const subirArchivo = async (formData, nombreArchivo) => {

        dispatch({
            type: SUBIR_ARCHIVO,

        })
        // console.log(formData);
        try {
            const resultado = await clientAxios.post('/api/archivos', formData);
            // console.log(resultado);
            dispatch({
                type: SUBIR_ARCHIVO_EXITO,
                payload: {
                    nombre: resultado.data.archivo,
                    nombre_original: nombreArchivo
                }
            })
        } catch (error) {
            // console.log(error);
            dispatch({
                type: SUBIR_ARCHIVO_ERROR,
                payload: error.response.data.msg
            })
        }

    }

    //Create a link when the file is uploaded
    const crearEnlace = async () => {
        const data = {
            nombre: state.nombre,
            nombre_original: state.nombre_original,
            descargas: state.descargas,
            password: state.password,
            autor: state.autor,
        }

        try {
            const resultado = await clientAxios.post('/api/enlaces', data);
            console.log(resultado.data.msg);
            dispatch({
                type: CREAR_ENLACE_EXITO,
                payload: resultado.data.msg
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: CREAR_ENLACE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    return (
        <appContext.Provider
            value={{
                mostrarAlerta,
                mensaje_archivo: state.mensaje_archivo,
                nombre: state.nombre,
                nombre_original: state.nombre_original,
                subirArchivo,
                cargando: state.cargando,
                crearEnlace,
                descargas: state.descargas,
                password: state.password,
                autor: state.autor,
                url: state.url,
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default AppState;



