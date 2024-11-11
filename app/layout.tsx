import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coste Ionut | Personal Portfolio',
  description: 'Coste Ionut Frontend Web Developer with 2 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        {children}
        </body>
    </html>
  )
}
