"use client"

import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { getCardsServer } from "../actions-uqjGV5JohUL2HLv9Jn2XqsgMVCO26d"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CardData {
  cardName: string
  cardNumber: string
  expirationDate: string
  cvv: string
}

function maskCardNumber(cardNumber: string): string {
  const lastFourDigits = cardNumber.slice(-4)
  const maskedPart = "*".repeat(cardNumber.length - 4)
  return maskedPart + lastFourDigits
}

export default function UserCards() {
  const { user } = useUser()
  const [cards, setCards] = useState<CardData[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      if (user) {
        const userCards = await getCardsServer(user.id)
        setCards(userCards)
      }
    }

    fetchCards()
  }, [user])

  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-bold">Your Cards</h2>
      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        cards.map((card, index) => (
          <Card key={index} className="w-full max-w-md">
            <CardHeader>
              <CardTitle>{card.cardName}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Card Number:</span> {maskCardNumber(card.cardNumber)}
                </p>
                <p>
                  <span className="font-semibold">Expiration Date:</span> {card.expirationDate}
                </p>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

