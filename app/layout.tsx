import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import Navbar from '@/components/Navbar'
import { dark, neobrutalism } from '@clerk/themes'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,

      }}>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Navbar />
          <Toaster
           toastOptions={{
            style: {
              background: '#1a202c', // Dark theme background
              color: '#f7fafc',      // Light text color
            }}}
            position="top-center"
            reverseOrder={true}
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}