import { auth } from '@/auth';
import React from 'react'

export default async function page() {
  let session = await auth();
  return (
    <div>
      {
        session ? (
          <div>
            <h1>Session</h1>
            <pre>{JSON.stringify(session, null, 2)}</pre>
          </div>
        ) : (
          <div>
            <h1>Not signed in</h1>
            <a href="/api/auth/signin">Sign in</a>
          </div>
        )
      }
    </div>
  )
}
