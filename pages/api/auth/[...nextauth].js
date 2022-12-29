import axios from 'axios'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    // 사이트가 refresh 될때마다 아래 함수 실행 됨
    async jwt({ token, account, profile }) {
      // account의 값이 평소에는 undefined,
      // 🔥로그인 할 때만 account, profile 값이 유저 정보로 채워짐
      // 그래서 if(account) 조건문으로, 로그인 될 때만 서버에 유저 정보 보내주는게 아래 코드
      if (account) {
        await axios.post('http://localhost:3005/users', {
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        })
      }

      return token
    },
  },
}

export default NextAuth(authOptions)
