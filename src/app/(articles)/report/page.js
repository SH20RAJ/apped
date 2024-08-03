import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
  redirect("https://github.com/orgs/appedme/discussions/new?category=report");
  return (
    <div>
      Contact sh20raj@gmail.com
    </div>
  )
}
