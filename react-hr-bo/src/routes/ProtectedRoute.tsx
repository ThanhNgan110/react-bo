import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { PATH } from '../configs'
import { httpRequest } from '../services/initRequest'
import type { ApiResponse } from '../services'

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const [initialized, setInitialized] = React.useState(false)
  const access_token = window.localStorage.getItem('access_token')

  const navigate = useNavigate()

  React.useEffect(() => {
    const getMe = async () => {
      try {
        await httpRequest<ApiResponse>('api/auth', {
          method: 'POST',
        })
        setInitialized(true)
      } catch (error: any) {
        window.localStorage.clear()
        navigate(PATH.LOGIN)
        console.error(error)
      }
    }
    getMe()
  }, [navigate])

  if (!access_token) {
    return <Navigate to={PATH.LOGIN} />
  }

  if (!initialized) return null

  return children
}

export default ProtectedRoute
