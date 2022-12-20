import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { useFetch } from '../../lib/useFetch'

export default function StudyPost() {
  const router = useRouter()
  const study = useFetch('studies', 'id', router.query.id)
  console.log(study)

  if (!study || study.length === 0) return <Layout>404 - no post</Layout>

  return (
    <Layout>
      <div>
        <div className='flex items-center gap-2'>
          <img
            className='w-12 h-12 rounded-full'
            src={study[0].author.image}
            alt='boss img'
          />
          <p>{study[0].author.name}</p>
        </div>
        <div className='flex flex-col gap-2 mt-7'>
          <div className='text-5xl'>{study[0].title}</div>
          <div className='text-2xl text-stone-500'>{study[0].content}</div>
        </div>

        <div>
          <div className='text-2xl font-bold mt-8'>12/19일 - TODOS 🔥</div>
          {study[0].todos.map((todo) => (
            <div className='flex' key={todo.id}>
              <p>{todo.content}</p>
              {todo.checked_members.map((member) => (
                <div key={member.id}>
                  <img
                    className='w-6 h-6 rounded-full'
                    src={member.image}
                    alt=''
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <div className='text-2xl font-bold mt-8'>12/19일 - TODOS 🔥</div>
          {study[0].todos.map((todo) => (
            <div className='flex' key={todo.id}>
              <p>{todo.content}</p>
              {todo.checked_members.map((member) => (
                <img
                  key={member.id}
                  className='w-7 h-7 rounded-full'
                  src={member.image}
                  alt=''
                />
              ))}
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-2'>
          <button className='mt-10 text-3xl font-bold'>+ todos 추가하기</button>

          <p>날짜</p>
          <input className='border border-black h-12' type='text' />
          <p>todo</p>
          <input className='border border-black h-12' type='text' />
        </div>
        <div className='flex flex-col gap-2'>
          <button className='mt-10 text-3xl font-bold'>
            + 오프라인 만남을 원하시나요?
          </button>
        </div>
      </div>
    </Layout>
  )
}
