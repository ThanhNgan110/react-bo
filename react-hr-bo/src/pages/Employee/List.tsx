//  components
import { TextField } from '../../components/molecules/TextField'
import { SearchIcon } from '../../components/atoms/Icon'
import Button from '../../components/atoms/Button'
import Table from '../../components/molecules/Table'
import { Link } from 'react-router-dom'
import { EditIcon, EyeIcon, PlusIcon } from 'lucide-react'
import Avatar from '../../components/molecules/Avatar'
import { PATH } from '../../configs'
import React from 'react'
import { httpRequest } from '../../services/initRequest'
import type { IMember } from '../../types'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    employeeId: 'd8a4f175-adee-7d4c-71f7',
    team: 'Agency Website',
    role: 'FE Developer',
    joinDate: '2022-01-15',
  },
  {
    key: '2',
    name: 'John',
    employeeId: 'd8a4f175-adee-7d4c-71f7',
    team: 'Agency Website',
    role: 'FE Developer',
    joinDate: '2022-01-15',
  },
]

const EmployeeList = () => {
  const [employee, setEmployee] = React.useState<IMember[]>()

  React.useEffect(() => {
    try {
      const getEmployee = async () => {
        const res = await httpRequest.get('/api/member')
        const data = await res.data
        setEmployee(data)
      }
      getEmployee()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className="max-w-full rounded-2xl p-5 mx-auto border border-gray-200 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex gap-3 items-center justify-between mb-5">
        <h3 className="font-semibold text-lg dark:text-white/90">
          Employee List
        </h3>
        <div className="flex gap-10 justify-center items-center">
          <TextField
            className="xl:w-[250px]"
            classNameInput="pl-9"
            prefixElement={
              <span className="absolute bottom-3 left-2">
                <SearchIcon
                  className="text-gray-400 dark:text-gray-400"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                />
              </span>
            }
            placeholder="Type..."
            type="text"
          />
          <Link
            to={PATH.EMPLOYEE_CREATE}
            className="flex justify-center items-center w-18 h-8 gap-1 p-2 bg-brand-500 rounded-lg text-xs text-white hover:bg-brand-600"
          >
            <span>
              <PlusIcon width={15} height={15} className="text-white" />
            </span>
            Create
          </Link>
        </div>
      </div>

      <div className="w-full h-full rounded-xl overflow-x-auto border border-gray-200 dark:border-gray-700">
        <Table
          className="w-full text-left table-auto min-w-max rounded-xl  border border-gray-200 dark:border-gray-800"
          columns={[
            'Name',
            'Employee ID',
            'Team',
            'Role',
            'Join Date',
            'Action',
          ]}
          dataSource={employee || []}
          renderBody={(data, index) => (
            <tr
              key={index.toString()}
              className="bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="p-4 text-gray-500 dark:text-gray-400 ">
                <div className="flex gap-3 items-center">
                  <Avatar
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src={data?.avatar || ''}
                    alt="avatar"
                  />
                  {data.lastName || ''}
                </div>
              </td>
              <td className=" p-4 text-gray-500 dark:text-gray-400">
                {data._id || ''}
              </td>
              <td className=" p-4 text-gray-500 dark:text-gray-400">
                {data?.team || ''}
              </td>
              <td className=" p-4 text-gray-500 dark:text-gray-400">
                {data?.role || ''}
              </td>
              <td className=" p-4 text-gray-500 dark:text-gray-400">
                {data?.dateJoin || ''}
              </td>
              <td className="flex items-center gap-2 p-4 text-gray-500 dark:text-gray-400">
                <Link className="flex gap-2" to={PATH.EMPLOYEE_SHOW}>
                  <span className="px-3 py-2 border border-gray-300 rounded-lg dark:border-gray-700">
                    <EyeIcon
                      className="dark:hover:text-gray-300"
                      width={12}
                      height={12}
                    />
                  </span>
                </Link>
                <Link className="flex gap-2" to={`${PATH.EMPLOYEE_EDIT}/${data._id}`}>
                  <span className="px-3 py-2 border border-gray-300 rounded-lg dark:border-gray-700">
                    <EditIcon
                      className="dark:hover:text-gray-300"
                      width={12}
                      height={12}
                    />
                  </span>
                </Link>
              </td>
            </tr>
          )}
        />
      </div>
    </div>
  )
}

export default EmployeeList
