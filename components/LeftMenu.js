import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function LeftMenu() {
  const router = useRouter()
  const [isStudy, setIsStudy] = useState(true)
  const [isLounge, setIsLounge] = useState(true)

  return (
    <>
      <div className='fixed hidden md:flex flex-col gap-8 text-sm'>
        <div>
          <button
            onClick={() => setIsStudy((prev) => !prev)}
            className={`py-2 px-4 rounded-lg text-stone-600 transition`}
          >
            <span>{isStudy ? '▼' : '▲'}</span> 진행중인 스터디
          </button>
          {isStudy && (
            <div className='flex flex-col ml-1 mt-1'>
              <Link
                href='/'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath === '/'
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                🔥 전체
              </Link>
              <Link
                href='/programming'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/programming')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                🧑🏻‍💻 프로그래밍
              </Link>
              <Link
                href='/job'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/job')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                👊 취업
              </Link>
              <Link
                href='/exam'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/exam')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                ✍🏻 시험
              </Link>
              <Link
                href='/hobby'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/hobby')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                🏄🏻‍♂️ 취미 / 교양
              </Link>
              <Link
                href='/language'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/language')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                🏅 어학
              </Link>
              <Link
                href='/book'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/book')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                📚 독서
              </Link>
              <Link
                href='/etc'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/etc')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                🌈 기타
              </Link>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => setIsLounge((prev) => !prev)}
            className={`py-2 px-4 rounded-lg  text-stone-600 transition`}
          >
            <span>{isLounge ? '▼' : '▲'}</span> 자유 게시판
          </button>
          {isLounge && (
            <div className='flex flex-col ml-1 mt-1'>
              <Link
                href='/lounge'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath === '/lounge'
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                🔥 전체
              </Link>
              <Link
                href='/lounge/daily'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/lounge/daily')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                🙌 일상
              </Link>
              <Link
                href='/lounge/worry'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/lounge/worry')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                💦 고민
              </Link>
              <Link
                href='/lounge/promotion'
                className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                  router.asPath.startsWith('/lounge/promotion')
                    ? 'font-bold bg-slate-300 text-indigo-500'
                    : null
                }`}
              >
                🙋🏻‍♀️ 스터디 홍보
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className='w-40 hidden md:flex lg:w-60 h-80'></div>
    </>
  )
}
