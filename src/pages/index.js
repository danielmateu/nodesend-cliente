import { DropZone } from "components/DropZone";
import { Layout } from "components/Layout";
import authContext from "context/auth/authContext";
import Link from "next/link";
import { useContext, useEffect } from "react";


export default function Home() {

  //Extraer el Usuario autenticado del Storage
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado } = AuthContext;

  useEffect(() => {
    usuarioAutenticado()
  }, [usuarioAutenticado])



  return (
    <>
      <Layout>
        {/* <h1 className="font-semibold text-center p-4 hover:font-light transition-all">Hello world in NextJs</h1> */}
        <div className="md:w-4/5 xl:w-3/5 mx-auto ">
          <div className="lg:flex hover:shadow-lg p-4 bg-white rounded-lg py-10 transition-all">
            <div className="md:flex-1 m-4 lg:mt-0">
              <DropZone/>
            </div>
            <div className="md:flex-1 m-4 lg:mt-0">
              <h2 className="text-4xl">Compartir archivos de forma sencilla y privada</h2>
              <p className="text-lg leading-loose">
                <span className="text-red-500">ReactNode Send</span> incluye cifrado de archivos y protección con contraseña, te permite enviar archivos (de 1GB hasta 2.5GB) de forma segura. Al subir un archivo, Firefox Send genera un enlace que puedes compartir con tus colegas. 
                Los archivos no se guardan en la nube. <span className="drop-shadow-md">😉</span> 
              </p>
              <Link href="/crear-cuenta" className="text-red-500 font-bold text-lg hover:text-red-700 transition-all">
                Crear Cuenta para más beneficios
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
