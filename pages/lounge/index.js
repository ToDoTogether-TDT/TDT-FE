import Layout from '../../components/Layout'
import PostCard from '../../components/PostCard'
import { useFetch } from '../../lib/useFetch'

export default function LoungeHome() {
  const posts = useFetch('posts')

  if (!posts || posts.length === 0) return <Layout>loading...</Layout>

  return (
    <Layout>
      <div className='grid gap-2 sm:grid-cols-2 px-2'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}
