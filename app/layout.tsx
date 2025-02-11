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
      <html lang="en">
        <body>
         <Navbar/> 
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}