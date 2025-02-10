import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"

// Mock data for demonstration
const passwords = [
  { id: 1, website: "example.com", username: "johndoe@example.com" },
  { id: 2, website: "anothersite.com", username: "janesmith@example.com" },
]

export function YourPasswords() {
  return (
    <div className="space-y-4 bg-black text-white">
      {passwords.map((password) => (
        <Card key={password.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{password.website}</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardDescription>{password.username}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

