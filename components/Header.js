import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className='fixed top-0 inset-x-0 bg-[#fbfbfb] bg-opacity-80 border py-2 px-4 z-10'>
        <div className='flex justify-between items-center max-w-[1100px] mx-auto'>
          <Link href='/' className='h-full'>
            <img className='w-20' src='/tdt-logo.webp' alt='tdt logo' />
          </Link>

          <div className='flex'>
            <button className='text-sm hover:bg-stone-200 transition rounded py-2 px-3'>
              로그인
            </button>
            <button className='text-sm hover:bg-stone-200 transition rounded py-2 px-3'>
              회원가입
            </button>
          </div>
        </div>
      </header>

      {/* fixed 높이 값 설정 */}
      <div className='h-[53px]'></div>
    </>
  )
}
