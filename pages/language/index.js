import Layout from '../../components/Layout'
import { useFetch } from '../../lib/useFetch'
import StudyCard from '../../components/StudyCard'

export default function LanguageHome() {
  const studies = useFetch('studies', 'category', 'language')

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
