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
      <div className='flex items-center gap-2'>
        <img
          className='w-12 h-12 rounded-full'
          src={study[0].author.image}
          alt='boss img'
        />
        <p>{study[0].author.name}</p>
      </div>
    </Layout>
  )
}
