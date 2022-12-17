import Link from 'next/link'

export default function RightMenu() {
  return (
    <div className='min-w-[260px] mr-4 hidden lg:flex flex-col gap-2'>
      <Link
        href='/posting-study'
        className='bg-slate-900 rounded-lg p-4 text-center'
      >
        <p className='text-slate-200 text-sm font-semibold'>스터디 만들기 🚀</p>
      </Link>
      <Link
        href='/posting-lounge'
        className='bg-stone-800 rounded-lg p-4 mb-4 text-center'
      >
        <p className=' text-stone-200 text-sm font-semibold'>게시글 작성 📑</p>
      </Link>
      <div className='flex flex-col gap-3 sticky top-20'>
        <Link
          href='/about'
          className='border border-yellow-500  bg-yellow-100 rounded-xl px-4 py-6'
        >
          <p className='text-lg font-bold text-slate-800'>
            TDT는 처음이신가요?
          </p>
          <p className='text-stone-500 text-sm mt-2'>
            사이트 소개를 읽어보세요! 👍
          </p>
          <div className='flex justify-center mt-8'>
            <img className='w-28' src='/tdt-logo.webp' alt='tdt logo' />
          </div>
        </Link>
        <div className='border border-zinc-500 rounded-xl px-4 py-6 bg-zinc-200'>
          <p className='text-lg font-bold text-slate-800'>
            TDT를 함께 만들어가요
          </p>
          <p className='text-stone-500 text-sm mt-2'>
            여러분의 피드백은 <br /> 저희에게 큰 도움이 됩니다
          </p>
          <div className='flex justify-center mt-8'>
            <img className='w-28' src='/survey.png' alt='survey logo' />
          </div>
        </div>
      </div>
    </div>
  )
}
