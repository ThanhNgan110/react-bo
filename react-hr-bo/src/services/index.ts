import { httpRequest } from './initRequest'
import type { ApiResponse } from '../types'

const getApi = async <T>(endPoint: string) => {
  const res = await httpRequest.get<ApiResponse<T>>(endPoint)
  const { isSucess, msg, data } = res.data

  return {
    msg: msg ?? '',
    data: data ?? null,
    isSuccess: isSucess ?? false,
  }
}

const post = async <T>(endPoint: string, bodyData: T) => {
  const res = await httpRequest.post<ApiResponse<T>>(endPoint, bodyData)
  const { isSucess, msg, data } = res.data

  return {
    msg: msg ?? '',
    data: data ?? null,
    isSuccess: isSucess ?? false,
  }
}

const put = async <T>(endPoint: string, bodyData: T) => {
  const res = await httpRequest.post<ApiResponse<T>>(endPoint, bodyData)
  const { isSucess, msg, data } = res.data

  return {
    msg: msg?? '',
    data: data ?? null,
    isSuccess: isSucess ?? false,
  }
}

export { getApi, post, put }
