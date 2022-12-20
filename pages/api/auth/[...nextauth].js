import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import axios from "axios";


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async jwt({token, account, profile}) {
      if (account) {
        await axios.post("http://localhost:8080/users",{
          name: profile.name,
          email: profile.email,
          picture: profile.image,
        })
      }
      console.log(profile)
      return token
    },
  },



}

export default NextAuth(authOptions)
