import Link from 'next/link'

export default function StudyCard({ study }) {
  return (
    <Link
      href={`/${study.category}/${study.id}`}
      className='w-full h-[240px] bg-white shadow hover:shadow-lg transition border p-4 flex flex-col justify-between rounded-xl'
    >
      {/* 글쓴이 정보, 스터디 카테고리 */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <img
              className='w-7 h-7 rounded-lg'
              src={study.author.image}
              alt='123'
              referrerPolicy='no-referrer'
            />
            <span className='text-sm text-stone-600 truncate w-32'>
              {study.author.name}
            </span>
          </div>
          <div className='flex items-center justify-center rounded gap-1 text-stone-600'>
            <span className='text-sm font-extrabold text-indigo-400'>#</span>
            <span className='text-xs font-semibold'>{study.category}</span>
          </div>
        </div>
        <h4 className='font-semibold'>{study.title}</h4>
        <p className='text-slate-500 text-sm'>{study.introduction}</p>
      </div>

      {/* 스터디 createdAt */}
      <div className='flex justify-between items-center'>
        <p className='text-xs'>
          {new Date(study.createdAt).toLocaleDateString()}
        </p>
        <div className='flex items-center gap-2'>
          <div className='flex'>
            {study.members?.map((member, i) => (
              <img
                className='w-6 h-6 rounded-full -ml-[5px]'
                key={member.email + i}
                src={member.image}
                alt='member'
                referrerPolicy='no-referrer'
              />
            ))}
          </div>
          <p className='mt-2 text-sm text-slate-600'>
            ...{study.members.length}명 참여 중
          </p>
        </div>
      </div>
    </Link>
  )
}
