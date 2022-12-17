import Layout from '../components/Layout'
import { studies } from '../mock/studies'

export default function Home() {
  return (
    <Layout>
      {/* <h1 className='text-5xl text-stone-900 font-black'>🔥진행중인 스터디</h1> */}
      <div className='grid gap-2 sm:grid-cols-2 px-2'>
        {studies.map((study) => (
          <div
            key={study.id}
            className='w-full h-[300px] bg-[#f8f8f8] shadow hover:shadow-lg transition border p-4 flex flex-col justify-between rounded-xl'
          >
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <img
                  className='w-8 h-8 rounded-lg'
                  src={study.author.image}
                  alt='123'
                />
                <span className='font-semibold text-stone-600'>
                  {study.author.name}
                </span>
              </div>
              <div>
                <h4 className='font-semibold'>{study.title}</h4>
                <p className='text-sm'>{study.content}</p>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-xs'>{study.createdAt}</p>
              <div className='flex items-center'>
                {study.members.slice(0, 3).map((member) => (
                  <img
                    className='w-6 h-6 rounded-full'
                    src={member.image}
                    alt='1234'
                    key={member.id}
                  />
                ))}
                <p className='text-xs ml-1'>
                  • {study.members.length}명 참여 중
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
