"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function AddPassword() {
  const [website, setWebsite] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ website, username, password })
  }

  return (
    <Card className="w-full bg-black text-white">
      <CardHeader>
        <CardTitle>Add New Password</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder=""
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-white text-black font-semibold" onClick={handleSubmit}>
          Add Password
        </Button>
      </CardFooter>
    </Card>
  )
}

