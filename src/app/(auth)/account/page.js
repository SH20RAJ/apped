import { auth } from "@/auth"
export const runtime = 'edge';
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session.user) return null
 
  return (
    <div>
      <img  src={session.user.image} alt="use image" />
    </div>
  )
}