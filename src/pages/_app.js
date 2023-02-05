import '@/styles/globals.css'
import appState from 'context/app/appState'
import AuthState from 'context/auth/authState'


export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (

    <AuthState>
      <appState>
        <Component {...pageProps} />
      </appState>
    </AuthState>
  )
}
