import { Layout } from 'components/Layout'
import { useFormik } from 'formik'


const CrearCuenta = () => {

    //Formulario y validación con Formik y Yup
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            password: ''
        },
    })

    return (
        <Layout>
            {/* <h1>Crear-cuenta</h1> */}
            <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
                <h2 className="text-4xl text-gray-500 text-center">Crear Cuenta</h2>

                <div className="flex justify-center">
                    <div className="w-full max-w-lg">
                        <form className='bg-white rounded hover:shadow-lg p-10 m-6 transition-all' action="">
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                    type="text" 
                                    placeholder="Introduce tu nombre" 
                                    id='nombre'
                                    className='p-4 bg-slate-100 rounded appearance-none focus:outline-none'
                                    />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="Introduce tu email" 
                                    id='email'
                                    className='p-4 bg-slate-100 rounded appearance-none focus:outline-none'
                                    />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    placeholder="Introduce tu contraseña" 
                                    id='password'
                                    className='p-4 bg-slate-100 rounde appearance-none focus:outline-none'
                                    />
                            </div>
                            <input type="submit" value='Crear cuenta' className="w-full bg-green-200 hover:bg-green-300 transition-colors py-4 rounded mt-2"/>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CrearCuenta