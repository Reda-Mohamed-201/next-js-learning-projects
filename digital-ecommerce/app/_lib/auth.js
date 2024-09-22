import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-services";
import Credentials from "next-auth/providers/credentials";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          scope: "email profile",
        },
      },
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        fullName: { label: "fullName", type: "text" },
      },

      authorize: async (credentials) => {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("please Provide both email and password");
        }
        const user = await getGuest(email);
        // console.log(user);
        // console.log("-------------------");
        if (!user) {
          throw new Error("Invalid email or password");
        }
        const isMatched = password === user.password;
        if (!isMatched) {
          throw new Error("Invalid password");
        }
        const userData = {
          name: user?.fullName,
          email: user?.email,
          id: user?.id,
        };
        return userData;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/signup",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
