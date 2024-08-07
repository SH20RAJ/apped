import { SessionProvider } from "next-auth/react";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <SessionProvider  >{children}</SessionProvider>
    </div>
  );
}
