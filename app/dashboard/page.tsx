import { currentUser } from '@clerk/nextjs/server'
import UserCards from "../../components/UserCards"

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    return <div>Please sign in to view your dashboard.</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <UserCards />
    </div>
  )
}

