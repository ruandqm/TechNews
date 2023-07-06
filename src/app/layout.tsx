// React
import React from 'react'

// Components
import Header from '@/components/Header/index'
import { ToastContainer } from 'react-toastify'

// Styles
import '@/globals.css'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'

// Context
import { AuthProvider } from '@/contexts/AuthContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech News',
  description: 'The best news about the tech world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <AuthProvider>
        <body className={`${inter.className} bg-zinc-950 text-zinc-50`}>
          <Header />
          <ToastContainer position='bottom-right' />
          {children}
        </body>
      </AuthProvider>
    </html>
  )
}
