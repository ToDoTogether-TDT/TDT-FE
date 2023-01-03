import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { useFetch } from '../../lib/useFetch'

// const pageType = {
//   STUDY: "STUDY",
//   POST:
// }

export default function User() {
  const router = useRouter()
  const user = useFetch('users', 'nickname', router.query.name)

  if (!user || user.length === 0)
    return (
      <Layout>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-3xl font-bold '>{router.query.name}</span>
          <span>존재하지 않는 유저입니다 🥲</span>
        </div>
      </Layout>
    )

  return (
    <Layout>
      <div className='flex gap-4 items-center'>
        <img
          className='w-32 h-32 rounded-full'
          src={user[0].image}
          alt='user pic'
        />
        <div className='flex flex-col gap-2'>
          <span className='font-bold text-stone-600 text-lg'>
            {user[0].name}
          </span>
          <span className=' text-stone-500'>{user[0].nickname}</span>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex gap-4'>
          <button className='bg-indigo-500 text-indigo-50 py-3 px-6 rounded'>
            참여중인 스터디
          </button>
          <button className='bg-indigo-500 text-indigo-50 py-3 px-6 rounded'>
            내 포스트
          </button>
        </div>
        <div></div>
      </div>
    </Layout>
  )
}
