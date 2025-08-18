"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Github, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-black relative overflow-hidden">
      {/* Circular gradient background from bottom */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
                     w-[150%] h-[90%] 
                     bg-[radial-gradient(circle_at_bottom,_rgba(147,51,234,0.35),_rgba(59,130,246,0.25),_transparent_70%)] 
                     rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 
                     w-[100%] h-[100%] 
                     bg-[radial-gradient(circle_at_bottom,_rgba(236,72,153,0.3),_rgba(168,85,247,0.2),_transparent_70%)] 
                     rounded-full blur-2xl"
        />
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 text-center relative z-10 mt-20">
        <h1 className="text-5xl font-bold mb-6">Welcome to Password-Manager</h1>
        <p className="text-xl mb-8 max-w-2xl">
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

      {/* Footer always at bottom */}
      <footer className="w-full text-center p-20 z-10 text-white">
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
