import { useSession } from 'next-auth/react'
import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import { sliceEmail } from '../lib/sliceEmail'
import { useFetch } from '../lib/useFetch'

export default function Setting() {
  const { data: session } = useSession()

  if (!session) return <Layout>loading...</Layout>

  return (
    <Layout>
      <div className='flex flex-col gap-4 items-center'>
        <img
          className='w-32 h-32 rounded-full border'
          src={session.user.image}
          alt='user pic'
        />
        <h1 className='text-5xl '>❌ 작업 중 ...</h1>
        <form className='w-[50%] flex flex-col gap-6'>
          <div className='text-sm'>
            <label htmlFor='name'>이름</label>
            <input
              id='name'
              className='w-full border border-stone-400 rounded h-10 p-4 outline-none focus:bg-slate-100 mt-1'
              type='text'
            />
          </div>
          <div className='text-sm'>
            <label htmlFor='nickname'>닉네임</label>
            <input
              id='nickname'
              className='w-full border border-stone-400 rounded h-10 p-4 outline-none focus:bg-slate-100 mt-1'
              type='text'
            />
          </div>
          <div className='text-sm'>
            <label htmlFor='introduction'>소개</label>
            <textarea
              id='introduction'
              className='w-full border border-stone-400 rounded h-32 p-2 outline-none focus:bg-slate-100 mt-1'
            />
          </div>
          <div></div>
        </form>
      </div>
    </Layout>
  )
}

{
  /* 🧑🏻‍💻 프로그래밍
👊 취업
✍🏻 시험
🏄🏻‍♂️ 취미 / 교양
🏅 어학
📚 독서
🌈 기타 */
}
