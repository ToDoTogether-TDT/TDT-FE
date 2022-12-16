import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-[#fbfbfb] border-t border-stone-200 z-30'>
      <div className='max-w-[1160px] mx-auto py-10 px-4 flex items-center gap-10'>
        <div className='flex flex-col gap-2'>
          <Link href='/' className='flex items-end'>
            <img className='w-20' src='/tdt-logo.webp' alt='tdt logo' />
          </Link>
          <p className='text-stone-500 text-xs'>© 2022 TDT.</p>
        </div>

        <div className='flex flex-col text-sm text-slate-500 gap-1'>
          <Link href='/about'>• 사이트 소개</Link>
          <a href='#'>• 카카오톡</a>
          <a href='#'>• 디스코드</a>
          <a href='#'>• 문의</a>
        </div>
      </div>
    </footer>
  )
}

// 홈 사이트 소개 메이커킷 매거진 뉴스레터 슬랙봇 카카오톡 페이스북 디스코드 문의
// © 2021 Disquiet
