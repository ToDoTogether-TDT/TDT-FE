import Link from 'next/link'

export default function RightMenu() {
  return (
    <div className='min-w-[260px] mr-4 flex flex-col gap-8'>
      <Link href='/about' className=' border border-black rounded-xl px-4 py-6'>
        <p className='text-lg font-bold text-slate-800'>TDT는 처음이신가요?</p>
        <p className='text-stone-500 text-sm mt-2'>
          저희 사이트 소개를 읽어보세요! 👍
        </p>
        <div className='flex justify-center mt-8'>
          <img className='w-28' src='/tdt-logo.webp' alt='tdt logo' />
        </div>
      </Link>
      <div className='border border-black rounded-xl px-4 py-6'>
        <p className='text-lg font-bold text-slate-800'>
          TDT 사이트를 함께 만들어가요
        </p>
        <p className='text-stone-500 text-sm mt-2'>
          여러분의 피드백은 <br /> 저희에게 큰 도움이 됩니다..!
        </p>
        <div className='flex justify-center mt-8'>
          <img className='w-28' src='/survey.png' alt='survey logo' />
        </div>
      </div>
    </div>
  )
}
