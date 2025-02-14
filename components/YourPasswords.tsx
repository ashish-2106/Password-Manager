import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"

interface PasswordProps {
  website: string,
  username: string,
  password: string
}

export function YourPasswords({passwords}:{passwords:PasswordProps[]}) {
  return (
    <div className="space-y-4 bg-black text-white">
      {passwords.map((password : PasswordProps) => (
        <Card key={password.website} >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{password.website}</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardDescription>{password.username}</CardDescription>
            <CardDescription>{password.password}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

