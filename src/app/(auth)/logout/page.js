'use client'
//logout from next-auth
import { signOut } from "next-auth/react";
import React from "react";

export default function Page() {
    return (
        <div>
        <button onClick={() => signOut()}>Sign out</button>
        </div>
    );
    }
