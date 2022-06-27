import type { ConvertResponse, SetInterceptors } from '../types'
import cookies from "js-cookie";

const convertResponse: ConvertResponse = res => {
  const response = {
    message: '',
    data: null
  }

  try {
    if (!res.data.code) {
      throw new Error('404 Error')
    }

    response.message = res.data.message
    response.data = res.data.data

  } catch (e) {
    response.message = '알 수 없는 에러가 발생했습니다!'
    response.data = null
  }

  return response
}

export const setInterceptors: SetInterceptors = (isAuth, instance) => {
  if (isAuth) {
    instance.interceptors.request.use(
      options => {
        const accessToken = cookies.get("accessToken") || null;

        options.headers = {
          Authorization: `Bearer ${accessToken}`,
        }

        return options
      }
    )
  }

  instance.interceptors.response.use(
    res => convertResponse(res),
    error => {
      Promise.reject(error.response)
      return convertResponse(error.response)
    }
  )

  return instance
}