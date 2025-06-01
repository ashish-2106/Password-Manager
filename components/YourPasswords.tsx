import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Lock } from "lucide-react";
import Link from "next/link";

interface PasswordProps {
  website: string;
  username: string;
  password: string;
}

export function YourPasswords({ passwords }: { passwords: PasswordProps[] }) {
  return (
    <div className="space-y-4 bg-black text-white ">
       {passwords.length === 0 &&  <span className="text-muted"> No Passwords added yet</span>}
      {passwords.map((password: PasswordProps) => (

        <Card key={password.website} >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
            <Link
              href={password.website}
              target="_blank"
              className="text-sm font-medium text-white hover:underline"
            >
              {password.website}
            </Link>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardDescription>{password.username}</CardDescription>
            <CardDescription>{password.password}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
