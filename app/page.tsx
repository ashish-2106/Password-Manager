"use client"; // Keep this for Clerk's useUser hook

import { useUser } from "@clerk/clerk-react";
import { AddCard } from "@/components/AddCard";
import { AddPassword } from "@/components/AddPassword";
import { YourCards } from "@/components/YourCards";
import { YourPasswords } from "@/components/YourPasswords";
import { SignInButton } from "@clerk/clerk-react";

export default function Home() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white ">
        <h1 className="text-3xl font-bold mb-4">Please Sign In to Access Your Password Manager</h1>
        <div className="border rounded-lg p-2"><SignInButton mode="modal" /></div>

      </div>
    );
  }

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
              <YourCards />
            </section>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Add a Password</h2>
              <AddPassword />
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Passwords</h2>
              <YourPasswords />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
