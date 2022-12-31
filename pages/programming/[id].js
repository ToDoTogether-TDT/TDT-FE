import { useRouter } from 'next/router'
import { useState } from 'react'
import AddToDoForm from '../../components/AddToDoForm'
import Layout from '../../components/Layout'
import { useFetch } from '../../lib/useFetch'

const pageType = {
  TODOS: 'TODOS',
  INTRO: 'INTRO',
  MEMBER: 'MEMBER',
}

export default function StudyPost() {
  const router = useRouter()
  const study = useFetch('studies', 'id', router.query.id)
  const [isToDo, setIsToDo] = useState(false)
  const [page, setPage] = useState(pageType.TODOS)

  const onToDoBtnClick = () => {
    setIsToDo((prevState) => !prevState)
  }

  if (!study || study.length === 0) return <Layout>404 - no post</Layout>

  return (
    <Layout>
      <div className='px-4'>
        {/* 글쓴이 정보, todo 추가 버튼 */}
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
          <AddToDoForm study={study} setIsToDo={setIsToDo} />
        ) : (
          <>
            {/* 스터디 제목, 짧은 소개 */}
            <div className='py-8 mb-8'>
              <div className='text-4xl font-black mb-4 text-indigo-600'>
                {study[0].title}
              </div>
              <div className='text-slate-500'>{study[0].introduction}</div>
            </div>

            {/* 페이지 전환 버튼 */}
            <div className='text-lg flex gap-7 border-b border-slate-600 py-4'>
              <button
                onClick={() => setPage(pageType.TODOS)}
                className={
                  page === pageType.TODOS ? 'underline' : 'text-slate-400'
                }
              >
                TODOs
              </button>
              <button
                onClick={() => setPage(pageType.INTRO)}
                className={
                  page === pageType.INTRO ? 'underline' : 'text-slate-400'
                }
              >
                스터디 소개
              </button>
              <button
                onClick={() => setPage(pageType.MEMBER)}
                className={
                  page === pageType.MEMBER ? 'underline' : 'text-slate-400'
                }
              >
                스터디 구성원
              </button>
            </div>

            {/* TODOs */}
            {page === pageType.TODOS && (
              <div className='flex flex-col gap-32 mt-10 '>
                {study[0].todos.map((todo) => (
                  <div className='' key={todo.date}>
                    <p className='text-xl font-light mb-4'>
                      {todo.date.replace(/\//g, '. ')}
                    </p>
                    <ul className='text-sm flex flex-col gap-2'>
                      {todo.lists.map((list, i) => (
                        <li className='p-2 flex gap-3' key={list.id}>
                          <span className='font-bold text-xs text-white bg-indigo-500 rounded-full w-[16px] h-[16px] flex items-center justify-center'>
                            {i + 1}
                          </span>
                          <span>{list.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* 스터디 소개 */}
            {page === pageType.INTRO && (
              <div
                className='markdown-body flex flex-col gap-2 mt-7'
                dangerouslySetInnerHTML={{ __html: study[0].content }}
              ></div>
            )}
          </>
        )}
      </div>
    </Layout>
  )
}
