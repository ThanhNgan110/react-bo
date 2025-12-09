import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { PATH } from '../configs'
import type { RootState } from '../store'

interface RoleRoteProps extends React.PropsWithChildren {
  requireRole?: string[]
  children: React.ReactNode
}

export const RoleRoute = ({ children, requireRole }: RoleRoteProps) => {
  const navigate = useNavigate()
  const role = useSelector((state: RootState) => state.users.users?.role)
  
  React.useEffect(() => {
    const checkRole = role && requireRole?.includes(role)
    if (!checkRole) {
      navigate(PATH.NOT_FOUND)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requireRole, role])

  return children
}
