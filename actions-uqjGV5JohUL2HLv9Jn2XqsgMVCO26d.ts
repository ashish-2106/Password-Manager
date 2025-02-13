"use server"

import { clerkClient } from "@clerk/nextjs/server"

interface Card {
  cardName: string
  cardNumber: string
  expirationDate: string
  cvv: string
}

export async function addCardServer(
  cardName: string,
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  userId: string,
) {
  const user = await clerkClient.users.getUser(userId)

  let cards: Card[] = []
  if (Array.isArray(user.privateMetadata.cards)) {
    cards = user.privateMetadata.cards
  }
  cards.push({ cardName, cardNumber, expirationDate, cvv })

  await clerkClient.users.updateUserMetadata(userId, {
    privateMetadata: {
      cards: cards,
    },
  })
}

export async function getCardsServer(userId: string): Promise<Card[]> {
  const user = await clerkClient.users.getUser(userId)

  if (Array.isArray(user.privateMetadata.cards)) {
    return user.privateMetadata.cards
  }

  return []
}

