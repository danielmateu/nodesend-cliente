import { Layout } from 'components/Layout'
import clientAxios from 'config/axios';


export async function getServerSideProps({ params }) {

    const {enlace} = params
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

const Enlace = ({enlace}) => {

    return (
        <Layout>
        <h1>Desde [enlace].js</h1>    
        </Layout>
    )
}

export default Enlace;
