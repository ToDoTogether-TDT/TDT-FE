import { useState } from 'react'

const useDate = () => {
  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  const [month, setMonth] = useState(date.getMonth() + 1)
  const [day, setDay] = useState(date.getDate())

  const onYearChange = (e) => {
    setYear(parseInt(e.target.value))
  }

  const onMonthChange = (e) => {
    setMonth(parseInt(e.target.value))
  }

  const onDayChange = (e) => {
    setDay(parseInt(e.target.value))
  }

  return [year, month, day, onYearChange, onMonthChange, onDayChange]
}

export default useDate
