import Layout from '../../components/Layout'
import { useFetch } from '../../lib/useFetch'
import StudyCard from '../../components/StudyCard'

export default function ExamHome() {
  const studies = useFetch('studies', 'category', 'exam')

  return (
    <Layout>
      <div className='grid gap-2 sm:grid-cols-2 px-2'>
        {studies?.map((study) => (
          <StudyCard key={study.id} study={study} />
        ))}
      </div>
    </Layout>
  )
}
