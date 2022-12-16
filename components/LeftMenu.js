import Link from 'next/link'

export default function LeftMenu() {
  return (
    <>
      <div className='fixed w-48 flex flex-col gap-1 text-sm'>
        <Link
          href='/todo'
          className='py-2 px-4 rounded-lg hover:bg-[#fefefe] text-stone-600   transition'
        >
          🔥 진행중인 스터디
        </Link>
        <Link
          href='/recruit'
          className='py-2 px-4 rounded-lg hover:bg-[#fefefe]  text-stone-600   transition'
        >
          🙋🏻‍♀️ 스터디 모집
        </Link>
        <Link
          href={`/user/${'danpoj'}`}
          className='mt-8 flex items-center gap-3 group hover:bg-[#fefefe] rounded-lg pl-4 py-5'
        >
          <img
            className='w-9 h-9 rounded-lg object-cover border border-black'
            src='/cat.png'
            alt='user img'
          />
          <div className='font-semibold text-slate-700'>
            <p>장원석</p>
            <p>@danpoj</p>
          </div>
        </Link>
        {/* <Link
          href='/user'
          className='py-2 px-4 rounded-lg hover:bg-[#fefefe]  text-stone-600   transition'
        >
          ✏️ 내가 속한 스터디
        </Link> */}
      </div>
      <div className='w-48 h-80'></div>
    </>
  )
}
