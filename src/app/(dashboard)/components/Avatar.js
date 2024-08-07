import { auth } from "@/auth"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session.user) return null
 
  return (
    <div className="flex items-center space-x-4">
        <span>{session.user.name}</span>
      <img className=" w-10 h-10 rounded-full"  src={session.user.image} alt="use image" />
    </div>
  )
}