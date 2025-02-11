"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  cardName: z.string().min(2, {
    message: "Card name must be at least 2 characters.",
  }),
  cardNumber: z.string().regex(/^\d{16}$/, {
    message: "Card number must be exactly 16 digits.",
  }),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Expiration date must be in MM/YY format.",
  }),
  cvv: z.string().regex(/^\d{3}$/, {
    message: "CVV must be exactly 3 digits.",
  }),
})
export function AddCard() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      
    },
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ cardNumber, cardName, expiryDate, cvv })
  }

  return (

    <Card className="w-full bg-black text-white min-h-[400px]">
    <CardHeader>
      <CardTitle>Add New Card</CardTitle>
    </CardHeader>
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="cardName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234567890123456"
                    {...field}
                    maxLength={16}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "")
                      field.onChange(value)
                    }}
                  />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="expirationDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiration Date</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="MM/YY"
                      {...field}
                      maxLength={5}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "")
                        if (value.length > 2) {
                          value = value.slice(0, 2) + "/" + value.slice(2)
                        }
                        field.onChange(value)
                      }}
                    />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="123"
                      {...field}
                      maxLength={3}
                      type="password"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        field.onChange(value)
                      }}
                    />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button  className="w-full bg-white text-black font-semibold" onClick={handleSubmit} >
            Add Card
          </Button>
        </form>
      </Form>
    </CardContent>
  </Card>
  )
}

