import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Toaster } from '@/components/ui/toaster'
const inter = Inter({ subsets: ['latin'] })


import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
       <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/images/loho2.png",
          },
          variables: {
            colorText: "white",
            // colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}>
      <body  className={`${inter.className} bg-dark-2`}>
        <Toaster/>
        {children}</body>
      </ClerkProvider>
    </html>
  )
}
