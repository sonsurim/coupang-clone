import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'

/* Default API Response Type */
type Response = {
  message: string
  data: any
}

/* Axios Interceptors */
type ConvertResponse = (res: AxiosResponse) => Response
type SetInterceptors = (isAuth: boolean, instance: AxiosInstance) => AxiosInstance

/* Axios Create */
type createInstance = (url?: string, options?: AxiosRequestConfig) => AxiosInstance

export type {
  Response,
  ConvertResponse,
  SetInterceptors,
  createInstance
}