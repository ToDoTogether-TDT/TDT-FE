import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import { sliceEmail } from '../lib/sliceEmail'

export default function Header() {
  const { data: session } = useSession()
  const [isProfile, setIsProfile] = useState(false)

  return (
    <>
      <header className='fixed top-0 inset-x-0 bg-[#fbfbfb] bg-opacity-80 border py-2 px-4 z-10'>
        <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
          <Link href='/' className='h-full'>
            <img className='w-20' src='/tdt-logo.webp' alt='tdt logo' />
          </Link>

          <div className='flex items-center text-sm'>
            <div className='mr-6 border-r-2 border-stone-400 pr-8 flex gap-4 lg:hidden'>
              <Link href='/about' className=''>
                사이트 소개
              </Link>
              <a href='#' className=''>
                피드백
              </a>
            </div>
            {session ? (
              <>
                <button
                  className='w-8 h-8 rounded-full overflow-hidden hover:opacity-75'
                  onClick={() => setIsProfile((prev) => !prev)}
                >
                  <img
                    src={session.user.image}
                    alt='user pic'
                    referrerPolicy='no-referrer'
                  />
                </button>

                {/* profile menu modal */}
                {isProfile && (
                  <div className='relative'>
                    <div className='absolute -right-1 top-8 border shadow-lg bg-[#fbfbfb] w-60 py-4 px-2 rounded-xl'>
                      <div className='flex gap-2 items-center'>
                        <img
                          className='w-9 h-9 rounded-full'
                          src={session.user.image}
                          alt='user pic'
                          referrerPolicy='no-referrer'
                        />
                        <div className='overflow-clip'>
                          <p className='truncate font-bold'>
                            {session.user.name}
                          </p>
                          <p className='text-xs text-stone-600'>
                            @{sliceEmail(session.user.email)}
                          </p>
                        </div>
                      </div>

                      <div className='flex flex-col mt-4 gap-1 text-sm'>
                        <Link
                          href={`/user/@${sliceEmail(session.user.email)}`}
                          className='text-center p-2 border rounded-lg hover:border-stone-400'
                        >
                          👋 내 프로필
                        </Link>
                        <Link
                          href='/setting'
                          className='text-center p-2 border rounded-lg hover:border-stone-400'
                        >
                          ⚙️ 설정
                        </Link>
                        <button
                          onClick={() => signOut()}
                          className='text-center p-2 bg-red-300 rounded-lg mt-2'
                        >
                          로그아웃
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => signIn('google')}
                className=' hover:bg-stone-200 transition rounded py-2 px-3'
              >
                로그인
              </button>
            )}
            {/* <button className=' hover:bg-stone-200 transition rounded py-2 px-3'>
              회원가입
            </button> */}
          </div>
        </div>
      </header>

      {/* fixed 높이 값 설정 */}
      <div className='h-[53px]'></div>
    </>
  )
}
