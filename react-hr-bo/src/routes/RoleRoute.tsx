import React from 'react'
import { useNavigate } from 'react-router-dom'

import { PATH } from '../configs'

interface RoleRoteProps extends React.PropsWithChildren {
  requireRole: string[]
  children: React.ReactNode
}

export const RoleRoute = ({ children, requireRole }: RoleRoteProps) => {
  const navigate = useNavigate()
  const role = 'operator'
  React.useEffect(() => {
    if (!role && requireRole.length === 0) return
    
    const checkRole = requireRole.includes(role)
    if (!checkRole) {
      navigate(PATH.NOT_FOUND)
    }
  }, [requireRole, role])

  return children
}
