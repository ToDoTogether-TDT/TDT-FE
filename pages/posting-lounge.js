import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { forwardRef, useRef } from 'react'
import { markdownToTxt } from 'markdown-to-txt'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/react'
import { sliceEmail } from '../lib/sliceEmail'
const LoungeEditor = dynamic(() => import('../components/LoungeEditor'), {
  ssr: false,
})
const LoungeEditorRef = forwardRef((props, ref) => (
  <LoungeEditor {...props} forwardedRef={ref} />
))
LoungeEditorRef.displayName = 'LoungeEditorRef'

export default function PostingLounge() {
  const router = useRouter()
  const editorRef = useRef()
  const titleRef = useRef()
  const categoryRef = useRef()
  const { data: session } = useSession()

  const onCancelPost = () => {
    const isCancel = confirm(
      '작성 중이던 글의 내용이 사라집니다.\n취소하시겠습니까?'
    )
    if (isCancel) {
      router.push('/')
    }
  }

  const onUploadPost = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
        title: titleRef.current.value,
        category: categoryRef.current.value,
        content: editorRef.current.editorInst.getHTML(),
        plain_content: markdownToTxt(
          editorRef.current.editorInst.getMarkdown()
        ),
        author: {
          name: session.user.name,
          nickname: '@' + sliceEmail(session.user.email),
          image: session.user.image,
        },
        createdAt: new Date(),
      })
      .then(() => router.push(`/lounge/${categoryRef.current.value}`))
  }

  return (
    <Layout>
      <div className='flex flex-col gap-4'>
        <div>
          <div>
            <span className='text-sm'>카테고리 </span>
            <span className='text-rose-500'>*</span>
          </div>
          <select
            ref={categoryRef}
            className='h-[48px] w-48 mt-2 pl-6 mr-6 rounded appearance-none cursor-pointer text-stone-700 border'
            name=''
            id=''
            defaultValue='daily'
          >
            <option value='daily'>🙌 일상</option>
            <option value='worry'>💦 고민</option>
            <option value='promotion'>🙋🏻‍♀️ 스터디 홍보</option>
          </select>
        </div>
        <div>
          <div>
            <span className='text-sm'>제목 </span>
            <span className='text-rose-500'>*</span>
          </div>
          <input
            ref={titleRef}
            type='text'
            className={`w-full rounded border h-[48px] mt-2 pl-6`}
            placeholder='제목을 입력해주세요'
          />
        </div>

        <div>
          <div className='mb-2'>
            <span className='text-sm'>본문 </span>
            <span className='text-rose-500'>*</span>
          </div>
          <LoungeEditorRef ref={editorRef} />
        </div>
        <div className='flex gap-2'>
          <button
            onClick={onCancelPost}
            className='py-3 px-8 border border-black rounded'
          >
            취소
          </button>
          <button
            onClick={onUploadPost}
            className='py-3 px-8 border border-black rounded bg-blue-200'
          >
            등록
          </button>
          {/* <button
            onClick={() =>
              console.log(
                titleRef.current.value,
                categoryRef.current.value,
                markdownToTxt(editorRef.current.editorInst.getMarkdown())
              )
            }
          >
            test
          </button> */}
        </div>
      </div>
    </Layout>
  )
}
