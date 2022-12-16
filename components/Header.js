import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className='fixed top-0 inset-x-0 bg-[#fbfbfb] bg-opacity-80 border py-2 px-4'>
        <div className='flex justify-between items-center max-w-[1160px] mx-auto'>
          <Link href='/' className='flex items-end'>
            <h1 className='text-xl font-semibold'>TDT</h1>
            <p className='text-xs text-stone-500'> 🚀 ToDo Together</p>
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
