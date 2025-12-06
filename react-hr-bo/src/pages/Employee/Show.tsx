import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// components
import Avatar from '../../components/molecules/Avatar'
import Button from '../../components/atoms/Button'

import type { IMember } from '../../types'
import { getApi } from '../../services'

const EmployeeShow = () => {
  const { _id } = useParams()
  const navigate = useNavigate()
  const [employee, setEmployee] = React.useState<IMember | null>(null)

  React.useEffect(() => {
  
      const getEmployee = async () => {
        const res = await getApi<IMember>(`api/member/${_id}`)
        const data = res.data ?? null
        setEmployee(data)
      }
      getEmployee()
    
  }, [_id])

  const handleEdit = () => {
    if (!_id) return
    navigate(`/employee/edit/${_id}`, { replace: false })
  }

  return (
    <div className="border border-gray-300 rounded-lg p-5 dark:border-gray-800">
      <h3 className="font-semibold text-black dark:text-white mb-4">
        Show Detail
      </h3>
      <div className="flex justify-between items-center mb-6">
        <Avatar src="/src/" alt="avatar" />
        <Button variant="primary" className="px-3 py-2" onClick={handleEdit}>
          Edit profile
        </Button>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">Employee ID</p>
        <p className="font-medium text-gray-800 dark:text-white/90">
          {employee?._id || ''}
        </p>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            First Name
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.firstName || ''}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Last Name
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.lastName || ''}
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">Email</p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.email || ''}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">Phone</p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.phone || ''}
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Date of birth
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.dob || ''}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Birth place
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.bio || ''}
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Nationality
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.nationality || ''}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Gender
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.gender || ''}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start mb-6">
        <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">Address</p>
        <p className="font-medium text-gray-800 dark:text-white/90">
          {employee?.address || ''}
        </p>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Country
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.country || ''}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">State</p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            {employee?.state || ''}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">Bio</p>
        <p className="font-medium text-gray-800 dark:text-white/90">
          {employee?.bio || ''}
        </p>
      </div>
    </div>
  )
}

export default EmployeeShow
