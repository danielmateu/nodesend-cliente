import clientAxios from "config/axios"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"



export const DropZone = () => {

    const [archivo, setArchivo] = useState({})
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({})
    const archivos = acceptedFiles.map(archivo => (
        <li key={archivo.lastModified} className="bg-white flex-1 p-3 mb-4 shadow-lg rounded" />

    ))

    return (
        <div className="flex md:flex-1 h-full flex-col items-center justify-center border-dashed border-4 border-gray-500 hover:border-gray-600 bg-gray-100 hover:bg-gray-200 rounded transition-all">
            <p>DropZone</p> 
        </div>
    )
}
