import axios from 'axios'
import { useState } from 'react'
import { mutate } from 'swr'
import { v4 as uuidv4 } from 'uuid'
import useDate from '../lib/getCurrentDate'

const AddToDoForm = ({ study, setIsToDo }) => {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [isFormError, setIsFormError] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [year, month, day, onYearChange, onMonthChange, onDayChange] = useDate()

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

  const onDeleteButtonClick = () => {
    setIsDelete((prev) => !prev)
  }

  const deleteToDo = (id) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== id)
    setToDos(newToDos)
  }

  const onPostingButtonClcik = async () => {
    const res = await axios.patch(
      `http://localhost:3005/studies/${study[0].id}`,
      {
        todos: [
          {
            date: `${year}/${month}/${day}`,
            lists: toDos,
          },
          ...study[0].todos,
        ],
      }
    )

    if (res.statusText === 'OK') {
      mutate(`${process.env.NEXT_PUBLIC_BASE_URL}/studies?id=${study[0].id}`)
      setIsToDo(false)
    }
  }

  return (
    <div className='px-4 py-8'>
      {/* title + delete button */}
      <div className='flex items-center gap-4 mb-8'>
        <h1 className='text-3xl font-extralight'>TODOs</h1>
        <button
          onClick={onDeleteButtonClick}
          className='text-sm border text-red-500 border-red-500 py-3 px-5 rounded'
        >
          {isDelete ? '완료 🚀' : '삭제 👋'}
        </button>
      </div>

      {/* date */}
      <div className='mb-8 flex gap-2 items-end'>
        <input
          className='border-b border-black h-18 w-20 font-mono text-xl text-center outline-none'
          type='number'
          value={year}
          onChange={onYearChange}
        />
        <div className='font-thin text-xl'>년</div>
        <input
          className='border-b border-black h-18 w-20 font-mono text-xl text-center outline-none'
          type='number'
          value={month}
          onChange={onMonthChange}
        />
        <div className='font-thin text-xl'>월</div>
        <input
          className='border-b border-black h-18 w-20 font-mono text-xl text-center outline-none'
          type='number'
          value={day}
          onChange={onDayChange}
        />
        <div className='font-thin text-xl'>일</div>
      </div>

      <div className='flex flex-col gap-4'>
        {toDos.map((item, i) => (
          // todos
          <div
            key={item.id + i}
            className='flex items-center gap-4 p-3 relative rounded shadow bg-white'
          >
            <span className='font-bold text-xs text-white bg-indigo-500 rounded-full w-[18px] h-[18px] flex items-center justify-center'>
              {i + 1}
            </span>
            {isDelete && (
              <button
                onClick={() => deleteToDo(item.id)}
                className=' absolute -left-[8px] -top-2 bg-white'
              >
                👋
              </button>
            )}

            <p className='text-sm'>{item.text}</p>
          </div>
        ))}

        {/* add todo form */}
        <form onSubmit={onAddToDo} className='flex gap-2 items-center'>
          <input
            className='border w-full h-12 rounded outline-none p-4'
            type='text'
            value={toDo}
            onChange={onInputFormChange}
          />
          <button className='border text-sm border-black w-24 py-3 px-3 rounded'>
            추가 🎉
          </button>
        </form>
        {isFormError && (
          <p className='text-rose-600 text-sm'>내용을 입력해주세요 😅</p>
        )}
      </div>
      <button
        onClick={onPostingButtonClcik}
        className='border text-sm border-black w-24 py-3 px-3 rounded mt-6'
      >
        게시 🔖
      </button>
    </div>
  )
}

export default AddToDoForm
