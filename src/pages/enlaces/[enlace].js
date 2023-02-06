import { Layout } from 'components/Layout'
import clientAxios from 'config/axios';


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

const Enlace = ({ enlace }) => {

    return (
        <Layout>
            <h1 className='text-4xl text-center text-gray-600'>Descarga tu archivo</h1>
            <div className="flex items-center justify-center">
                <a
                    download
                    href={`${process.env.backendURL}/api/archivos/${enlace.archivo}`}
                    className='bg-red-500 hover:bg-gray-600 text-center px-6 py-2 rounded-xl text-white cursor-pointer transition-colors uppercase mt-5'>
                    Aquí
                </a>
            </div>

        </Layout>
    )
}

export default Enlace;
