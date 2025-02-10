import { AddCard } from "@/components/AddCard"
import { AddPassword } from "@/components/AddPassword"
import { YourCards } from "@/components/YourCards"
import { YourPasswords } from "@/components/YourPasswords"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Password Manager</h1>
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
  )
}

