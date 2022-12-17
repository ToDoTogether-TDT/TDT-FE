import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export const useFetch = (base, key, value) => {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${base}?${key}=${value}`,
    fetcher
  )

  return data
}
