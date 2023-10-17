import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import { MyContextProvider } from '@/provider/MyContext'


const poppins = Poppins({weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <MyContextProvider>
      <Component {...pageProps} />
      </MyContextProvider>
      
    </div>
 
  )
}
