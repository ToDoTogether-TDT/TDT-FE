import { useRouter } from 'next/router'
import { useState } from 'react'
import AddToDoForm from '../../components/AddToDoForm'
import Layout from '../../components/Layout'
import { useFetch } from '../../lib/useFetch'

export default function StudyPost() {
  const router = useRouter()
  const study = useFetch('studies', 'id', router.query.id)
  const [isToDo, setIsToDo] = useState(false)

  const onToDoBtnClick = () => {
    setIsToDo((prevState) => !prevState)
  }

  if (!study || study.length === 0) return <Layout>404 - no post</Layout>

  return (
    <Layout>
      <div className='px-4'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <img
              className='w-8 h-8 rounded-full'
              src={study[0].author.image}
              alt='boss img'
            />
            <p className='text-sm'>{study[0].author.nickname}</p>
          </div>
          <button
            onClick={onToDoBtnClick}
            className='text-sm border py-3 px-4 rounded border-stone-700'
          >
            {isToDo ? '게시글로 돌아가기' : 'ToDo 추가하기'}
          </button>
        </div>
        {isToDo ? (
          <AddToDoForm />
        ) : (
          <>
            <div className='py-6 border-b'>
              <div className='text-4xl font-black mb-4'>{study[0].title}</div>
              <div className='text-xl'>{study[0].introduction}</div>
            </div>
            <div className='flex flex-col gap-2 mt-7'>
              <div
                className='markdown-body'
                dangerouslySetInnerHTML={{ __html: study[0].content }}
              ></div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
