import clientAxios from "config/axios"
import appContext from "context/app/appContext"
import { useCallback, useContext } from "react"
import { useDropzone } from "react-dropzone"

export const DropZone = () => {

    const AppContext = useContext(appContext);

    const { mostrarAlerta, subirArchivo, cargando, crearEnlace } = AppContext;

    const onDropRejected = () => {
        mostrarAlerta('No se pudo subir, el límite se ha excedido');
    }

    const onDropAccepted = useCallback(async (acceptedFiles) => {
        // console.log(acceptedFiles)

        //Crear un forma data
        const formData = new FormData()
        formData.append('archivo', acceptedFiles[0])

        subirArchivo(formData, acceptedFiles[0].path)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Extraer contenido de Dropzone
    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDropAccepted, onDropRejected, maxSize: 1000000 })
    const archivos = acceptedFiles.map(archivo => (
        <li key={archivo.lastModified} className="bg-white flex-1 p-3 mb-4 shadow-lg rounded mt-2" >
            <p className="text-xl ">{archivo.path}</p>
            <p className="text-xl text-center ">{(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB</p>
        </li>
    ))
    

    return (
        <div className="flex md:flex-1 h-full flex-col items-center justify-center border-dashed border-4 border-gray-500 hover:border-gray-600 bg-gray-100 hover:bg-gray-200 rounded transition-all">
            {acceptedFiles.length > 0 ? (
                <div className="w-full p-4">
                    <h4 className="text-center text-2xl">Archivos agregados</h4>
                    <ul>
                        {archivos}
                    </ul>

                    {cargando ? <p className="text-center text-2xl text-gray-400">Subiendo archivo...</p> : (
                        <button className="bg-red-400 p-2 rounded hover:shadow-lg transition-all" onClick={() => crearEnlace()}>Crear enlace</button>
                    )}  
                </div>

            ) : (
                <div {...getRootProps({ className: 'dropzone w-full py-32' })}>
                    <input className="h-100" {...getInputProps()} />

                    <div className="text-center">
                        {
                            isDragActive ? <p className="text-2xl">Suelta el archivo</p> : <p className="text-2xl">Arrastra el archivo aquí</p>
                        }
                        {/* <p className="text-2xl">Selecciona un archivo y arrástralo aquí</p> */}
                        <button className="bg-gray-300 hover:bg-gray-400 px-10 rounded py-2 my-6">Selecciona archivos</button>
                    </div>
                </div>)}


        </div>
    )
}
