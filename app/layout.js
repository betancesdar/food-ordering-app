import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400','500', '700']})

export const metadata = {
  title: 'AX Delivery',
  description: 'Website created by Dario Betances Dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <main className='max-w-4xl mx-auto p-4'>
            {children}
          </main>
        </body>
    </html>
  )
}
