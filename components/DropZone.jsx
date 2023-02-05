import clientAxios from "config/axios"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"



export const DropZone = () => {

    // const [archivo, setArchivo] = useState({})

    const onDrop = useCallback(async (acceptedFiles) => {
        console.log(acceptedFiles)

        //Crear un forma data
        const formData = new FormData()
        formData.append('archivo', acceptedFiles[0])

        const resultado = await clientAxios.post('/api/archivos', formData)
        console.log(resultado.data);
    }, [])

    //Extraer contenido de Dropzone
    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    const archivos = acceptedFiles.map(archivo => (
        <li key={archivo.lastModified} className="bg-white flex-1 p-3 mb-4 shadow-lg rounded mt-2" >
            <p className="text-xl ">{archivo.path}</p>
            <p className="text-xl text-center ">{(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB</p>
        </li>
    ))
        //Creating link
    const crearEnlace = () => {
        console.log('Creando Enlace...');
        
    }




    return (
        <div className="flex md:flex-1 h-full flex-col items-center justify-center border-dashed border-4 border-gray-500 hover:border-gray-600 bg-gray-100 hover:bg-gray-200 rounded transition-all">
            {acceptedFiles.length > 0 ? (
                <div className="w-full p-4">
                    <h4 className="text-center text-2xl">Archivos agregados</h4>
                    <ul>
                        {archivos}
                    </ul>

                    <button className="bg-red-400 p-2 rounded hover:shadow-lg transition-all" onClick={crearEnlace}>Crear enlace</button>
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
