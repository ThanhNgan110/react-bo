import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { PATH } from '../configs'
import { httpRequest } from '../services/initRequest'
import { setAuth } from '../redux/userSlice'

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const [initialized, setInitialized] = React.useState(false)
  const access_token = window.localStorage.getItem('access_token')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  React.useEffect(() => {
    const getMe = async () => {
      try {
        const res = await httpRequest('api/auth', {
          method: 'POST',
        })
        setInitialized(true)
        const data = res.data || {}
        const { user } = data
        dispatch(setAuth(user?.user))
      } catch (error: any) {
        window.localStorage.clear()
        navigate(PATH.LOGIN)
        console.error(error)
      }
    }
    getMe()
  }, [dispatch, navigate])

  if (!access_token) {
    return <Navigate to={PATH.LOGIN} />
  }

  if (!initialized) return null

  return children
}

export default ProtectedRoute
