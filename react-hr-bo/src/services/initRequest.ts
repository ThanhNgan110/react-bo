import axios from 'axios'
import { getLocalStorage } from '../utils/localStorage'

export const httpRequest = axios.create({
  baseURL: 'https://tony-auth-express-vdee.vercel.app/',
  timeout: 5000,
})

export const initRequest = () => {
  // Add a request interceptor
  httpRequest.interceptors.request.use(
    function (config) {
      const access_token = getLocalStorage('access_token') // Do something before request is sent
      console.log('request success', config)
      if (access_token) {
        config.headers['x-auth-token'] = access_token
      }

      return config
    },
    function (error) {
      // Do something with request error
      console.log('request fail', error)

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

      return response.data
    },
    function onRejected(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log('response fail', error)
      return Promise.reject(error)
    }
  )
}
