import axios from 'axios'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import type { AppStore } from '../store'

import { setLoading } from '../redux/userSlice'
import { API_URL } from '../configs'

export const httpRequest = axios.create({
  baseURL: API_URL,
  timeout: 5000,
})

export const initRequest = (store: AppStore) => {
  // Add a request interceptor
  const dispatch = store.dispatch
  httpRequest.interceptors.request.use(
    function (config) {
      const access_token = getLocalStorage('access_token') // Do something before request is sent
      console.log('request success', config)
      if (access_token) {
        config.headers['x-auth-token'] = access_token
      }
      dispatch(setLoading(true))
      return config
    },
    function (error) {
      // Do something with request error
      console.log('request fail', error)
      dispatch(setLoading(false))

      return Promise.reject(error)
    },
    { synchronous: true, runWhen: () => true }
  )

  // Add a response interceptor
  httpRequest.interceptors.response.use(
    function onFulfilled(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log('response success', response)
      dispatch(setLoading(false))
      return response
    },
    async function onRejected(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log('response fail', error)

      // timeout
      if (error.code === 'ECONNABORTED') {
        // do something
      }

      // access_token + refresh_token
      if (error?.response?.status === 401) {
        try {
          const bodyData = {
            data: {
              refresh_token: getLocalStorage('refresh_token'),
            },
          }

          const data = await httpRequest.post('/api/user/refresh-token', {
            method: 'POST',
            data: bodyData,
          })

          const access_token = data.data.access_token

          if (access_token) {
            setLocalStorage('access_token', access_token)
            httpRequest.defaults.headers.common['x-auth-token'] = access_token
            return httpRequest(error.config)
          }
        } catch (error) {
          console.error('refresh_token fail', error)
        }
      }
      dispatch(setLoading(false))

      // handle common error
      switch (error?.response?.status) {
        case 403:
          // do something
          break
        case 404:
          // do something
          break
        case 503:
          // do something
          break
        case 500:
          // do something
          break
        default:
          break
      }
      return Promise.reject(error)
    }
  )
}
