import axios from "axios";
import { setInterceptors } from '../apis/config/interceptors'
import type { createInstance } from './types'

export const BASE_URL = process.env.NEXT_PUBLIC_API_HOST

const createInstance: createInstance = (url, options) => {
  const _instance = axios.create({
    baseURL: BASE_URL,
    url,
    ...options
  })


  setInterceptors(false, _instance)
  return _instance
}

const createInstanceWithAuth: createInstance = (url, options) => {
  const _instance = axios.create({
    baseURL: BASE_URL,
    url,
    ...options
  })

  setInterceptors(true, _instance)
  return _instance
}

export const instance = createInstance()
export const auth = createInstanceWithAuth()
