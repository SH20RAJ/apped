import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import prisma from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github],

  callbacks: {
    async signIn({ account, profile }) {
      
      if (!profile?.email) {
        throw new Error("No profile");
      }

      const password = Math.random().toString(36).slice(-8);

      await prisma.user.upsert({
        where: { email: profile.email },
        create: {
          email: profile.email,
          name: profile.name,
          password,
          image: profile.avatar_url || profile.picture,
          avatar: profile.avatar_url || profile.picture,
        },
        update: {
          image: profile.avatar_url || profile.picture,
        },
      });

      return true;
    },
    async redirect() {
      return "/dashboard";
    },
    async session({ session, token }) {
      session.user.userId = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});
