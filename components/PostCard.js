import Link from 'next/link'
import React from 'react'

export default function PostCard({ post }) {
  return (
    <Link
      href={`/lounge/${post.category}/${post.id}`}
      className='w-full h-[200px] bg-[#f8f8f8] shadow hover:shadow-lg transition border p-4 flex flex-col justify-between rounded-xl'
    >
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <img
              className='w-7 h-7 rounded-lg'
              src={post.author.image}
              alt='123'
            />
            <p className='text-xs text-stone-600 truncate w-32'>
              {post.author.nickname}
            </p>
          </div>
          <div className='flex items-center justify-center rounded gap-1 text-stone-600'>
            <span className='text-sm font-extrabold text-indigo-400'>#</span>
            <span className='text-xs font-semibold'>{post.category}</span>
          </div>
        </div>

        <div>
          <h4 className='font-semibold mb-4'>{post.title}</h4>
          <p className='text-stone-700 text-xs'>{post.plain_content}</p>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-xs'>
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
    </Link>
  )
}
