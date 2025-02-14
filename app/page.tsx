import { useUser } from "@clerk/clerk-react";
import { AddCard } from "@/components/AddCard";
import { AddPassword } from "@/components/AddPassword";
import { YourCards } from "@/components/YourCards";
import { YourPasswords } from "@/components/YourPasswords";
import { SignInButton } from "@clerk/clerk-react";
import { currentUser } from '@clerk/nextjs/server'
import LandingPage from "./landing/LandingPage"
import { redirect } from "next/navigation"
import { Instagram, Github, Linkedin } from "lucide-react";


export default  async function Home() {
  const user = await currentUser()
  console.log(user?.privateMetadata)


  if (!user) {
    return <LandingPage />
  }

  // return <LandingPage />

  
  // const { isSignedIn } = useUser();

  // if (!isSignedIn) {
  //   return (
  //     <div className="h-screen flex flex-col items-center justify-center bg-black text-white ">
  //       <div className="text-center">
  //       <h1 className="text-3xl font-bold mb-4">Please Sign In to Access Your Password Manager</h1>

  //       </div>
  //       <div className="border rounded-lg p-2"><SignInButton mode="modal" /></div>

  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-black text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
        <h1 className=" text-4xl font-bold mb-8 text-center text-white g-white/20 backdrop-blur-md border border-white/50 rounded-xl p-4 max-w-2xl shadow-lg">Password Manager</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Add a Credit/Debit Card</h2>
              <AddCard />
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Cards</h2>
              <YourCards  cards={Array.isArray(user?.privateMetadata.cards)?user?.privateMetadata.cards:[]}/>
            </section>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Add a Password</h2>
              <AddPassword />
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Passwords</h2>
              <YourPasswords passwords={Array.isArray(user?.privateMetadata.passwords)?user?.privateMetadata.passwords:[]} />
            </section>
          </div>
        </div>
      </div>
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

    
  );
}