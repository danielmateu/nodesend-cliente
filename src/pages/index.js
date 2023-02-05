import { Layout } from "components/Layout";
import authContext from "context/auth/authContext";
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
        <h1 className="">Home</h1>
      </Layout>
    </>
  )
}
