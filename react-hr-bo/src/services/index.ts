import { httpRequest } from './initRequest'
import type { ApiResponse } from '../types'
import axios from 'axios'

const getApi = async <T>(endPoint: string) => {
  const res = await httpRequest.get<ApiResponse<T>>(endPoint)
  const { isSucess, msg, data } = res.data

  return {
    msg: msg ?? '',
    data: data ?? null,
    isSuccess: isSucess ?? false,
  }
}

const post = async <TResponse, TBody>(endPoint: string, bodyData: TBody) => {
  try {
    const { data } = await httpRequest.post<ApiResponse<TResponse>>(
      endPoint,
      bodyData
    )

    return {
      msg: data.msg ?? '',
      data: data.data ?? null,
      isSuccess: data.isSucess ?? false,
    }
  } catch (error) {
    const msg = axios.isAxiosError(error) ? error.response?.data?.msg : null

    return {
      msg: msg ?? 'Something went wrong',
      data: null,
      isSuccess: false,
    }
  }
}

const put = async <T>(endPoint: string, bodyData: T) => {
  try {
    const res = await httpRequest.put<ApiResponse<T>>(endPoint, bodyData)
    const { isSucess, msg, data } = res.data

    return {
      msg: msg ?? '',
      data: data ?? null,
      isSuccess: isSucess ?? false,
    }
  } catch (error) {
    const msg = axios.isAxiosError(error) ? error.response?.data : null
    return {
      msg: msg ?? 'Something went wrong',
      data: null,
      isSuccess: false,
    }
  }
}

export { getApi, post, put }
