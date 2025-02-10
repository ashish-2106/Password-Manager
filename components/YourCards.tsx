import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

// Mock data for demonstration
const cards = [
  { id: 1, last4: "1234", name: "John Doe", expiry: "12/24" },
  { id: 2, last4: "5678", name: "Jane Smith", expiry: "06/25" },
]

export function YourCards() {
  return (
    <div className="space-y-4 bg-black text-white">
      {cards.map((card) => (
        <Card key={card.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">•••• •••• •••• {card.last4}</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardDescription>{card.name}</CardDescription>
            <CardDescription>Expires {card.expiry}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

