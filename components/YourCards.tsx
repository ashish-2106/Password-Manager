import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

interface CardProps {
  cardName: string,
  cardNumber: string,
  expirationDate: string,
  cvv: number
}

export function YourCards({cards}:{cards:CardProps[]}) {
  return (
    <div className="space-y-4 bg-black text-white">
      {cards.map((card :CardProps) => (
        <Card key={card.cardNumber} >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.cardNumber}</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardDescription>{card.cardName}</CardDescription>
            <CardDescription>Expires {card. expirationDate}</CardDescription>
            <CardDescription>Cvv {card. cvv}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

