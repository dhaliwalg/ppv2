import { Lato } from 'next/font/google'
import { Providers } from "./providers"
import './globals.css'

const lato = Lato({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'PAGG PROS',
  description: 'Turban tying professionals located within the DMV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
