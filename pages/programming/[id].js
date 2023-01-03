import axios from 'axios'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { forwardRef, useRef, useState } from 'react'
import { mutate } from 'swr'
import AddToDoForm from '../../components/AddToDoForm'
import Layout from '../../components/Layout'
import { sliceEmail } from '../../lib/sliceEmail'
import { useFetch } from '../../lib/useFetch'

const CommentEditor = dynamic(() => import('../../components/CommentEditor'), {
  ssr: false,
})
const CommentEditorRef = forwardRef((props, ref) => (
  <CommentEditor {...props} forwardedRef={ref} />
))
CommentEditorRef.displayName = 'CommentEditorRef'

const pageType = {
  TODOS: 'TODOS',
  INTRO: 'INTRO',
  MEMBER: 'MEMBER',
}

const date = new Date()
const today = {
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
}

const isToday = (date) => {
  const studyDate = date.split('/').map((v) => +v)
  return (
    studyDate[0] === today.year &&
    studyDate[1] === today.month &&
    studyDate[2] === today.day
  )
}

export default function StudyPost() {
  const router = useRouter()
  const study = useFetch('studies', 'id', router.query.id)
  const [isToDo, setIsToDo] = useState(false)
  const [page, setPage] = useState(pageType.TODOS)
  const { data: session } = useSession()
  const commentRef = useRef()

  // if (session) console.log(session.user)

  // if (study) {
  //   console.log(study[0])
  // }

  const onToDoBtnClick = () => {
    setIsToDo((prevState) => !prevState)
  }

  const onToDoClick = (listId) => async () => {
    if (!session) {
      alert('멤버가 맞으신가요? 로그인 해주세요! 😅')
      return
    }
    let updatedToDos = study[0].todos.map((todo) => {
      return {
        date: todo.date,
        lists: todo.lists.map((list) => {
          return listId === list.id
            ? {
                text: list.text,
                id: list.id,
                checked_members: list.checked_members
                  ? [session.user, ...list.checked_members]
                  : [session.user],
              }
            : list
        }),
      }
    })

    const res = await axios.patch(
      `http://localhost:3005/studies/${study[0].id}`,
      {
        todos: updatedToDos,
      }
    )

    mutate(`${process.env.NEXT_PUBLIC_BASE_URL}/studies?id=${study[0].id}`)
  }

  const onUploadCommentButtonClick = async () => {
    if (!session) {
      alert('로그인 먼저 해주세요 😅')
      return
    }

    const res = await axios.patch(
      `http://localhost:3005/studies/${study[0].id}`,
      {
        comments: study[0].comments
          ? [
              ...study[0].comments,
              {
                id: study[0].comments.length + 1,
                user: session.user,
                content: commentRef.current.editorInst.getHTML(),
                createdAt: Date.now(),
              },
            ]
          : [
              {
                id: 1,
                user: session.user,
                content: commentRef.current.editorInst.getHTML(),
                createdAt: Date.now(),
              },
            ],
      }
    )

    mutate(`${process.env.NEXT_PUBLIC_BASE_URL}/studies?id=${study[0].id}`)
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
            {/* 스터디 제목, 짧은 소개, 멤버 참여 버튼 */}
            <div className='py-8'>
              <div className='text-4xl font-black mb-4 text-indigo-600'>
                {study[0].title}
              </div>
              <div className='text-slate-500'>{study[0].introduction}</div>
              <button
                onClick={() => {
                  alert('신청 완료! 스터디 장의 수락을 기다려주세요 👍')
                }}
                className='py-3 px-7 font-extrabold text-lime-50 rounded-lg border mt-8 bg-gradient-to-tl from-lime-400 to-cyan-400 hover:from-black hover:to-black'
              >
                멤버로 참여하기! 👋
              </button>
            </div>

            {/* 페이지 전환 버튼 */}
            <div className='text-lg flex gap-7 border-b border-slate-600 py-4'>
              <button
                onClick={() => setPage(pageType.TODOS)}
                className={
                  page === pageType.TODOS
                    ? 'underline underline-offset-8'
                    : 'text-slate-400'
                }
              >
                TODOs
              </button>
              <button
                onClick={() => setPage(pageType.INTRO)}
                className={
                  page === pageType.INTRO
                    ? 'underline underline-offset-8'
                    : 'text-slate-400'
                }
              >
                스터디 소개
              </button>
              <button
                onClick={() => setPage(pageType.MEMBER)}
                className={
                  page === pageType.MEMBER
                    ? 'underline underline-offset-8'
                    : 'text-slate-400'
                }
              >
                스터디 구성원
              </button>
            </div>

            {/* TODOs */}
            {page === pageType.TODOS && (
              <div className='flex flex-col gap-16 mt-10 '>
                {study[0].todos.map((todo) => (
                  <div
                    className={`border-[1.6px] p-4 rounded ${
                      isToday(todo.date) && 'border-2 border-indigo-500'
                    }`}
                    key={todo.date}
                  >
                    <p
                      className={`text-xl font-light mb-4 ${
                        isToday(todo.date) && 'font-bold text-indigo-600'
                      }`}
                    >
                      {todo.date.replace(/\//g, '. ')}
                      {` `}
                      {isToday(todo.date) && '🔥 Today 🔥'}
                    </p>
                    <ul className='text-sm flex flex-col gap-2'>
                      {todo.lists.map((list, i) => (
                        <li
                          onClick={onToDoClick(list.id)}
                          className='p-2 flex gap-3 cursor-pointer hover:bg-violet-100 rounded items-center'
                          key={list.id}
                        >
                          <span className='font-bold text-xs text-white bg-indigo-500 rounded-full w-[16px] h-[16px] flex items-center justify-center'>
                            {i + 1}
                          </span>
                          <span>{list.text}</span>
                          <div className='flex gap-1'>
                            {list.checked_members?.map((checked_member, i) => (
                              <img
                                key={checked_member.email + i}
                                className='w-5 h-5 rounded'
                                src={checked_member.image}
                                alt='user'
                                referrerPolicy='no-referrer'
                              />
                            ))}
                          </div>
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

            {/* 스터디 구성원 */}
            {page === pageType.MEMBER && (
              <div className='p-4 flex flex-col gap-4 mt-7'>
                {study[0].members.map((member) => (
                  <div className='flex gap-2 items-center' key={member.id}>
                    <img
                      className='w-9 h-9 rounded-full'
                      src={member.image}
                      alt={member.name}
                      referrerPolicy='no-referrer'
                    />
                    <p className='text-sm'>{member.nickname}</p>
                  </div>
                ))}

                <div className=''>
                  <p>대기중인 스터디 요청</p>
                </div>
              </div>
            )}

            {/* 댓글 */}
            <div className='mt-20 bg-white rounded'>
              <p className='text-xl font-bold text-indigo-600 mb-2 border-b pb-4 border-slate-400'>
                댓글
              </p>
              <div className='my-8 flex flex-col gap-6'>
                {study[0].comments?.map((comment) => (
                  <div className='' key={comment.id}>
                    <div className='flex gap-1 items-center'>
                      <img
                        className='w-6 h-6 rounded-full'
                        src={comment.user.image}
                        alt='user'
                      />
                      <p className='text-xs'>
                        {'@' + sliceEmail(comment.user.email)}
                      </p>
                    </div>
                    <div
                      className='markdown-body mt-2 text-sm'
                      dangerouslySetInnerHTML={{ __html: comment.content }}
                    ></div>
                  </div>
                ))}
              </div>
              <CommentEditorRef ref={commentRef} />
              <div className='flex justify-end mt-4'>
                <button
                  onClick={onUploadCommentButtonClick}
                  className='py-2 px-6 rounded bg-indigo-500 text-white'
                >
                  등록
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
