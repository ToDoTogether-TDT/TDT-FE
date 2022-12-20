import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import { sliceEmail } from '../lib/sliceEmail'
import { useRouter } from 'next/router'

const modalState = {
  DEFAULT: 'DEFAULT',
  MENU: 'MENU',
  PROFILE: 'PROFILE',
}

export default function Header() {
  const { data: session } = useSession()
  const [modal, setModal] = useState(modalState.DEFAULT)
  const router = useRouter()

  return (
      <>
        <header className='fixed top-0 inset-x-0 bg-[#fbfbfb] bg-opacity-80 border py-2 px-4 z-10'>
          <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
            <Link href='/' className='h-full'>
              <img className='w-20' src='/tdt-logo.webp' alt='tdt logo'/>
            </Link>

            <div className='flex items-center text-xs'>
              {/* mobile menu */}
              <button
                  onClick={() => {
                    if (modal === modalState.MENU) {
                      setModal(modalState.DEFAULT)
                    } else {
                      setModal(modalState.MENU)
                    }
                  }}
                  className='w-10 h-10 md:hidden'
              >
                <img src='/menu.png' alt='hamburger menu'/>
              </button>

              {/* mobile menu modal */}
              {modal === modalState.MENU && (
                  <div className='w-60 border shadow-lg bg-[#fbfbfb] absolute top-[60px] rounded-xl  right-[12px] p-2'>
                    <div className='flex flex-col gap-1'>
                      <Link
                          href='/'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        🔥 전체
                      </Link>
                      <Link
                          href='/programming'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/programming'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        🧑🏻‍💻 프로그래밍
                      </Link>
                      <Link
                          href='/job'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/job'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        👊 취업
                      </Link>
                      <Link
                          href='/exam'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/exam'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        ✍🏻 시험
                      </Link>
                      <Link
                          href='/hobby'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/hobby'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        🏄🏻‍♂️ 취미 / 교양
                      </Link>
                      <Link
                          href='/language'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/language'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        🏅 어학
                      </Link>
                      <Link
                          href='/book'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/book'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        📚 독서
                      </Link>
                      <Link
                          href='/etc'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/etc'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        🌈 기타
                      </Link>
                    </div>
                    <div className='h-[2px] bg-stone-200 my-2'></div>
                    <div className='flex flex-col gap-1'>
                      <Link
                          href='/lounge'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/lounge'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        🔥 전체
                      </Link>
                      <Link
                          href='/lounge/daily'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/lounge/daily'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        🙌 일상
                      </Link>
                      <Link
                          href='/lounge/worry'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/lounge/worry'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        💦 고민
                      </Link>
                      <Link
                          href='/lounge/promotion'
                          className={`py-1 px-4 text-[13px] rounded-lg text-stone-600 transition ${
                              router.asPath === '/lounge/promotion'
                                  ? 'font-bold bg-slate-800 text-white'
                                  : null
                          }`}
                      >
                        🙋🏻‍♀️ 스터디 홍보
                      </Link>
                    </div>
                  </div>
              )}

              {/* :md size menu */}
              <div className='hidden md:flex items-center gap-3 lg:hidden'>
                <Link
                    href='/posting-study'
                    className='bg-slate-900 text-xs text-slate-200 rounded p-3 ml-4'
                >
                  스터디 만들기 🚀
                </Link>
                <Link
                    href='/posting-lounge'
                    className=' bg-stone-800 text-xs text-stone-200 rounded p-3'
                >
                  게시글 작성 📑
                </Link>
              </div>
              {/* line */}
              <div className='w-[2px] bg-slate-300 h-[30px] mr-4 ml-7 lg:hidden'></div>
              {session ? (
                  <>
                    <button
                        className='w-8 h-8 rounded-full overflow-hidden hover:opacity-75'
                        onClick={() => {
                          if (modal === modalState.PROFILE) {
                            setModal(modalState.DEFAULT)
                          } else {
                            setModal(modalState.PROFILE)
                          }
                        }}
                    >
                      <img
                          src={session.user.image}
                          alt='user pic'
                          referrerPolicy='no-referrer'
                      />
                    </button>

                    {/* profile menu modal */}
                    {modal === modalState.PROFILE && (
                        <div className='relative'>
                          <div
                              className='absolute -right-1 top-8 border shadow-lg bg-[#fbfbfb] w-60 py-4 px-2 rounded-xl'>
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
                      onClick={() => signIn('google')
                      }
                      className=' hover:bg-stone-200 transition rounded py-2 px-3'
                  >
                    로그인
                  </button>
              )}
            </div>
          </div>
        </header>

        {/* fixed 높이 값 설정 */}
        <div className='h-[53px]'></div>
      </>
  );
}
