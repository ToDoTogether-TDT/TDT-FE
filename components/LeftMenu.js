import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LeftMenu() {
  const router = useRouter()

  return (
    <>
      <div className='fixed flex flex-col gap-1 text-sm'>
        <Link
          href='/'
          className={`py-2 px-4 rounded-lg hover:bg-[#fefefe] text-stone-600 transition ${
            router.asPath === '/' ? 'font-extrabold' : null
          }`}
        >
          🔥 진행중인 스터디
        </Link>
        <Link
          href='/recruit'
          className={`py-2 px-4 rounded-lg hover:bg-[#fefefe]  text-stone-600 transition ${
            router.asPath === '/recruit' ? 'font-extrabold' : null
          }`}
        >
          🙋🏻‍♀️ 스터디 모집
        </Link>
      </div>
      <div className='w-40 lg:w-60 h-80'></div>
    </>
  )
}
