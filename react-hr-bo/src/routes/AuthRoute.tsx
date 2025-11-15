import React from 'react'
import { Navigate } from 'react-router-dom'
import { PATH } from '../configs'

const AuthRoute = ({ children }: React.PropsWithChildren) => {
  const access_token = window.localStorage.getItem('access_token')

  if (access_token) {
    return <Navigate to={PATH.DASHBOARD} />
  }

  return children
}

export default AuthRoute
