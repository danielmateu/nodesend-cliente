import { Alerta } from 'components/Alerta';
import { Layout } from 'components/Layout'
import clientAxios from 'config/axios';
import appContext from 'context/app/appContext';
import { useContext, useState } from 'react';

export async function getServerSideProps({ params }) {

    const { enlace } = params
    const resultado = await clientAxios.get(`/api/enlaces/${enlace}`);
    // console.log(resultado);
    return {
        props: {
            enlace: resultado.data
        }
    }
}

export async function getServerSidePaths() {
    const enlaces = await clientAxios.get('/api/enlaces');
    // console.log(enlaces.data);

    return {
        paths: enlaces.data.enlaces.map(enlace => ({
            params: { enlace: enlace.url }
        })),
        fallback: false
    }
}

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ enlace }) => {

    //Context de la app
    const AppContext = useContext(appContext);
    const { mostrarAlerta, mensaje_archivo } = AppContext;

    const [tienePassword, setTienePassword] = useState(enlace.password);
    const [password, setPassword] = useState('')
    const [fileLink, setFileLink] = useState(enlace.archivo);

    // console.log(tienePassword);

    //Verificar que el password introducido coincide
    const verificarPassword = async e => {
        e.preventDefault()
        // console.log('Verificando password');
        const data = { password }

        try {
            const resultado = await clientAxios.post(`/api/enlaces/${enlace.enlace}`, data);
            // console.log(resultado);
            setTienePassword(resultado.data.password);
            //Aqui obtenemos el archivo a descargar
            setFileLink(resultado.data.archivo);
            console.log(resultado.data, enlace)

        } catch (error) {
            mostrarAlerta(error.response.data.msg);
        }


    }


    return (
        <Layout>
            {
                tienePassword ? (
                    <>
                        <p className='text-2xl text-center text-gray-600'>Este archivo está protegido por un password, si lo sabes... ya tu sabes!</p>
                        <div className="flex items-center justify-center mx-auto">
                            <form
                                // onSubmit={formik.handleSubmit}
                                onSubmit={e => verificarPassword(e)}
                                className='bg-white rounded hover:shadow-lg p-10 m-6 transition-all w-2/6' action="">
                                <div className="mb-4 flex flex-col">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Introduce la contraseña para descargar el archivo"
                                        id='password'
                                        className='p-4 bg-slate-100 rounded appearance-none focus:outline-none'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                {mensaje_archivo && <Alerta />}
                                <input type="submit" value='Validar Password' className="w-full bg-green-200 hover:bg-green-300 transition-colors py-4 rounded my-2" />
                            </form>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className='text-4xl text-center text-gray-600'>Descarga tu archivo</h1>
                        <div className="flex items-center justify-center">
                            <a
                                download
                                href={`${process.env.backendURL}/api/archivos/${fileLink}`}
                                className='bg-red-500 hover:bg-gray-600 text-center px-6 py-2 rounded-xl text-white cursor-pointer transition-colors uppercase mt-5'>
                                Aquí
                            </a>
                        </div>
                    </>
                )
            }
        </Layout>
    )
}


