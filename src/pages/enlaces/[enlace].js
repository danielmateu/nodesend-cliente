import { Layout } from 'components/Layout'
import clientAxios from 'config/axios';


export async function getStaticProps({ params }) {
    const resultado = await clientAxios.get(`/api/enlaces/${params.enlace}`);

    // console.log(resultado);
    return {
        props: {
            enlace: resultado.data
        }
    }
}

export async function getStaticPaths() {
    const enlaces = await clientAxios.get('/api/enlaces');
    // console.log(enlaces.data);

    return {
        paths: enlaces.data.enlaces.map(enlace => ({
            params: { enlace: enlace.url }
        })),
        fallback: false
    }
}

const Enlace = () => {

    return (
        <Layout>
        <h1>Desde [enlace].js</h1>    
        </Layout>
    )
}

export default Enlace;
