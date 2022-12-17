import Layout from '../../components/Layout'
import StudyCard from '../../components/StudyCard'
import { useFetch } from '../../lib/useFetch'

export default function ProgrammingHome() {
  const studies = useFetch('studies', 'category', 'programming')

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
