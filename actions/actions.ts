"use server"

import { clerkClient } from '@clerk/nextjs/server'
interface card {
    cardName: string,
    cardNumber: string,
    expirationDate: string,
    cvv: string
}
interface password {
    website: string,
    username: string,
    password: string
}

export async function addCardServer(cardName: string, cardNumber: string, expirationDate: string, cvv: string, userId: string) {
    const client = await clerkClient()
    const user = await client.users.getUser(userId)

    let cards: card[] = []
    if (Array.isArray(user.privateMetadata.cards)) {
        cards = user.privateMetadata.cards || []
        cards.push({ cardName, cardNumber, expirationDate, cvv })
        await client.users.updateUserMetadata(userId, {
            privateMetadata: {
                cards: cards
            },  
        })
    }
    else{
        await client.users.updateUserMetadata(userId, {
            privateMetadata: {
                cards: [{ cardName, cardNumber, expirationDate, cvv }]
            },  
        })
    }

    
}
export async function addPasswordServer(website: string,username: string,password: string, userId: string) {
    const client = await clerkClient()
    const user = await client.users.getUser(userId)

    let passwords: password[] = []
    if (Array.isArray(user.privateMetadata.passwords)) {
        passwords = user.privateMetadata.passwords || []
        passwords.push({ website, username, password })
        await client.users.updateUserMetadata(userId, {
            privateMetadata: {
                passwords: passwords
            },
        })
    }
    else{
        await client.users.updateUserMetadata(userId, {
            privateMetadata: {
                passwords: [{ website, username, password }]
            },
        })
    }

    
}