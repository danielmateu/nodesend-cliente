import { Alerta } from "components/Alerta";
import { DropZone } from "components/DropZone";
import { Layout } from "components/Layout";
import appContext from "context/app/appContext";
import authContext from "context/auth/authContext";
import Link from "next/link";
import { useContext, useEffect } from "react";



export default function Home() {

  //Extraer el Usuario autenticado del Storage
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado } = AuthContext;

  //Extraer el mensaje de error de archivo
  const AppContext = useContext(appContext);
  const { mensaje_archivo, url } = AppContext;


  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
      <Layout>
        {/* <h1 className="font-semibold text-center p-4 hover:font-light transition-all">Hello world in NextJs</h1> */}
        <div className="md:w-4/5 xl:w-3/5 mx-auto ">
          {url ? (
            <>
              <p className="text-center text-4xl"><span className="text-red-500">Tu URL es: </span>{`${process.env.frontEndURL}/enlaces/${url}`}</p>

              <button
              onClick={() => navigator.clipboard.writeText(`${process.env.frontEndURL}/enlaces/${url}`)}
                type="button"
                className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold mt-10 rounded-lg transition-all"
              >Copiar enlace</button>
            </>
          ) : (
            <>
              {mensaje_archivo && <Alerta />}
              <div className="lg:flex hover:shadow-lg p-4 bg-white rounded-lg py-10 transition-all">
                <div className="md:flex-1 m-4 lg:mt-0">
                  <DropZone />
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
            </>
          )}
        </div>
      </Layout>
    </>
  )
}
