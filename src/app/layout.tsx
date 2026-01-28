import type { Metadata } from 'next'
import { Nunito, DM_Sans } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

const DMSans = DM_Sans({
  variable: '--font-DM-Sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dulces Pétalos',
  description: 'JAKALA Project - Dulces Pétalos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${nunito.variable} ${DMSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
