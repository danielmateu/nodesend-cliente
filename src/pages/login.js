import { Layout } from 'components/Layout'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const Login = () => {
  //Formulario y validación con Formik y Yup
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('El email es obligatorio').email('El email no es válido'),
      password: Yup.string().required('El password es obligatorio').min(6, 'El password debe contener al menos 6 caracteres'),
    }),
    onSubmit: valores => {
      console.log(valores);

    }
  })

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <h2 className="text-4xl text-gray-500 text-center">Login</h2>

        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <form
              onSubmit={formik.handleSubmit}
              className='bg-white rounded hover:shadow-lg p-10 m-6 transition-all' action="">
              <div className="mb-4 flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Introduce tu email"
                  id='email'
                  className='p-4 bg-slate-100 rounded appearance-none focus:outline-none'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {
                  formik.touched.email && formik.errors.email ? (
                    <div className="my-2 text-red-400 border-l-4 border-red-400 bg-red-200 text-center rounded hover:bg-red-400 hover:text-white transition-colors py-2">
                      <p>{formik.errors.email}</p>
                    </div>
                  ) : null
                }
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Introduce tu contraseña"
                  id='password'
                  className='p-4 bg-slate-100 rounde appearance-none focus:outline-none'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {
                  formik.touched.password && formik.errors.password ? (
                    <div className="my-2 text-red-400 border-l-4 border-red-400 bg-red-200 text-center rounded hover:bg-red-400 hover:text-white transition-colors py-2">
                      <p>{formik.errors.password}</p>
                    </div>
                  ) : null
                }
              </div>
              <input type="submit" value='Iniciar sesión' className="w-full bg-sky-200 hover:bg-sky-300 transition-colors py-4 rounded mt-2" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
