"use server"

import { clerkClient } from '@clerk/nextjs/server'
interface card {
    cardName: string,
    cardNumber: string,
    expirationDate: string,
    cvv: string
}

export async function addCardServer(cardName: string, cardNumber: string, expirationDate: string, cvv: string, userId: string) {
    const client = await clerkClient()
    const user = await client.users.getUser(userId)

    let cards: card[] = []
    if (Array.isArray(user.privateMetadata.cards)) {
        cards = user.privateMetadata.cards || []
        cards.push({ cardName, cardNumber, expirationDate, cvv })
    }

    await client.users.updateUserMetadata(userId, {
        privateMetadata: {
            cards: cards
        },
    })
}