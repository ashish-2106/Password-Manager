"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import toast from "react-hot-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addPasswordServer } from "@/actions/actions"
import { useUser } from "@clerk/clerk-react"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  website: z.string().url({
    message: "Please enter a valid URL.",
  }),
  username: z
    .string()
    .min(4, {
      message: "Username must be at least 4 characters long.",
    })
    .max(16, {
      message: "Username must be at most 16 characters long.",
    })
    .regex(/^[a-zA-Z0-9_]*$/, {
      message: "Username must contain only letters, numbers, and underscores.",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long.",
    })
    .max(16, {
      message: "Password must be at most 16 characters long.",
    })
    .refine(
      (value) => {
        return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
      },
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      },
    ),
  
})

export function AddPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      website: "",
      username: "",
      password: "",
    },
  })
  // 2. Define a submit handler.
  const { user } = useUser()
  const router = useRouter()
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (user?.id) {
      addPasswordServer(values.website, values.username, values.password, user.id)
      toast.success("Password added successfully")
      form.reset()
      router.refresh()
    }
    console.log(values)
  }

  return (
    <Card className="w-full bg-black text-white min-h-[400px]">
      <CardHeader>
        <CardTitle>Add New Password</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Jhone21" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Jhone@23" type="password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full bg-white text-black font-semibold" type="submit">
              Add Password
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

