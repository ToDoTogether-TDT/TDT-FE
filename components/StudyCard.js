export default function StudyCard({ study }) {
  return (
    <div className='w-full h-[300px] bg-[#fafafa] shadow hover:shadow-lg transition border p-4 flex flex-col justify-between rounded-xl'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <img
              className='w-7 h-7 rounded-lg'
              src={study.author.image}
              alt='123'
            />
            <span className='text-sm text-stone-600'>{study.author.name}</span>
          </div>
          <div className='flex items-center justify-center rounded gap-1 text-stone-600'>
            <span className='text-sm font-extrabold text-indigo-400'>#</span>
            <span className='text-xs font-semibold'>{study.category}</span>
          </div>
        </div>

        <div>
          <h4 className='font-semibold mb-4'>{study.title}</h4>
          <div className='flex flex-col gap-1'>
            <p className='text-xs text-stone-600 font-bold mb-1'>
              오늘의 ToDos
            </p>
            {study.todos.slice(0, 3).map((todo, i) => (
              <div
                key={todo.id}
                className='text-xs border-b border-black font-bold p-2 w-full'
              >
                <p>
                  <span className='text-rose-400'>{i + 1}. </span>
                  {todo.content}
                </p>
              </div>
            ))}
            {/* <div className='text-center'>...</div> */}
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-xs'>{study.createdAt}</p>
        <div className='flex items-center'>
          {study.members.slice(0, 3).map((member) => (
            <img
              className='w-6 h-6 rounded-full'
              src={member.image}
              alt='1234'
              key={member.id}
            />
          ))}
          <p className='text-xs ml-1'>• {study.members.length}명 참여 중</p>
        </div>
      </div>
    </div>
  )
}
