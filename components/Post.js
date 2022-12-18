export default function Post({ post }) {
  return (
    <div className='bg-white p-6 shadow rounded-xl min-h-[400px] mr-2'>
      <h1 className='text-3xl'>{post[0].title}</h1>
      <div className='flex items-center gap-2 mt-4 mb-6'>
        <img
          className='w-8 h-8 rounded-full'
          src={post[0].author.image}
          alt=''
        />
        <p className='text-sm text-stone-600'>{post[0].author.nickname}</p>
      </div>
      <div
        id='article'
        dangerouslySetInnerHTML={{ __html: post[0].content }}
      ></div>
    </div>
  )
}
