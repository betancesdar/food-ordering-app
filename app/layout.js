import { Roboto } from 'next/font/google'
import './globals.css'
import {ToastContainer}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '/components/layout/Header'
import Footer from '/components/footer/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: ['400','500', '700']})

export const metadata = {
  title: 'AX Delivery',
  description: 'Website created by Dario Betances Dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <main className='max-w-4xl mx-auto p-4 m-4'>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Header />
            {children}
          <Footer />
          </main>
        </body>
    </html>
  )
}
