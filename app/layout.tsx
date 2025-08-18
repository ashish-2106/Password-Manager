import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import Navbar from '@/components/Navbar'
import { dark } from '@clerk/themes'
import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'

// ✅ Add metadata for SEO & tab title
export const metadata: Metadata = {
  title: 'Password-Manager',
  description: 'Securely manage your passwords and cards in one place – simplicity meets top-notch security.',
}
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