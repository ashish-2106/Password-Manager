"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Github, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
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

      <footer className="p-4 text-center bg-black text-gray-200">
      <div className="flex items-center justify-center space-x-4 mb-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/ashish-2106"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/ashish2106/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Pass-Manager. All rights reserved.</p>
    </footer>
    </div>
  )
}

