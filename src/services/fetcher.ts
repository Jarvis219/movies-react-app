import axios, { AxiosRequestConfig } from 'axios'
import { addParamsToPath } from '~/utils'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_MOVIE_API,
  headers: {
    'content-type': 'application/json',
  },
})

const fetcher = (url: string, config: AxiosRequestConfig = {}) => {
  const params = {
    api_key: import.meta.env.VITE_API_KEY,
    language: 'en-US',
    page: 1,
  }
  const path = addParamsToPath(url, params)
  return request(path, config)
    .then((res) => res?.data)
    .catch((err) => {
      throw err
    })
}

export default fetcher
