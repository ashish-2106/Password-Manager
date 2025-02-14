"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to Pass-Manager</h2>
        <p className="text-xl mb-8  max-w-2xl">
         Securely manage your passwords and cards in one place – simplicity meets top-notch security.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/sign-in">Log In</Link>
          </Button>
        </div>
      </main>

      <footer className="p-4 text-center text-gray-200">
        © {new Date().getFullYear()} YourApp. All rights reserved.
      </footer>
    </div>
  )
}

