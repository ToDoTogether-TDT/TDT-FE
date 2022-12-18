import { useFetch } from '../../../lib/useFetch'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'
import Post from '../../../components/Post'

export default function PromotionPost() {
  const router = useRouter()
  const post = useFetch('posts', 'id', router.query.id)
  if (post) console.log(post[0])

  if (!post || post.length === 0) return <Layout>loading...</Layout>

  return (
    <Layout>
      <Post post={post} />
    </Layout>
  )
}
