import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const AddToDoForm = () => {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [isFormError, setIsFormError] = useState(false)

  const onAddToDo = (e) => {
    e.preventDefault()
    if (toDo.trim() === '') {
      setIsFormError(true)
      return
    }
    setToDos((prevToDos) => [...prevToDos, { text: toDo, id: uuidv4() }])
    setToDo('')
  }

  const onInputFormChange = (e) => {
    setToDo(e.target.value)
    if (e.target.value.trim() !== '') {
      setIsFormError(false)
    }
  }

  return (
    <div className='px-4 py-8'>
      <div className='flex items-center gap-4 mb-8'>
        <h1 className='text-3xl font-black'>ToDos</h1>
        {/* <button
          onClick={onAddToDoButtonClick}
          className='border-2 border-slate-400 text-slate-400 text-xl font-bold w-10 h-10 rounded-lg hover:border-slate-800 hover:text-slate-800 transition'
        >
          +
        </button> */}
      </div>
      <div className='flex flex-col gap-4'>
        {toDos.map((item, i) => (
          <>
            <div
              key={item.id}
              className='flex items-center gap-4 border border-stone-300 p-3   relative rounded'
            >
              <span className='font-bold text-xs text-white bg-indigo-500 rounded-full w-[18px] h-[18px] flex items-center justify-center absolute -left-2 -top-2'>
                {i + 1}
              </span>
              <button className='text-rose-400 font-black text-xl absolute -right-2 -top-3 bg-white rounded-full'>
                ⓧ
              </button>

              <p className='text-sm'>{item.text}</p>
            </div>
          </>
        ))}
        <form onSubmit={onAddToDo} className='flex gap-4 items-center'>
          <input
            className='border w-full rounded-lg outline-none p-4'
            type='text'
            value={toDo}
            onChange={onInputFormChange}
          />
          <button className='border text-sm border-black w-24 py-3 px-4 rounded'>
            추가 🎉
          </button>
        </form>
        {isFormError && (
          <p className='text-rose-600 text-sm'>내용을 입력해주세요 😅</p>
        )}
      </div>
    </div>
  )
}

export default AddToDoForm
