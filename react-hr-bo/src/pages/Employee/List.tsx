//  components
import { TextField } from '../../components/molecules/TextField'
import { SearchIcon } from '../../components/atoms/Icon'
import Button from '../../components/atoms/Button'
import Table from '../../components/molecules/Table'
import { Link } from 'react-router-dom'
import { EditIcon, EyeIcon, PlusIcon } from 'lucide-react'
import Avatar from '../../components/molecules/Avatar'

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
  return (
    <div className="max-w-full  rounded-2xl p-5 mx-auto border border-gray-200">
      <div className="flex gap-3 items-center justify-between mb-5">
        <h3 className="font-semibold text-lg dark:text-white/90">
          Employee List
        </h3>
        <div className="flex gap-10">
          <TextField
            className="xl:w-[250px]"
            prefixElement=<SearchIcon className="" />
            placeholder="Type..."
          />
          <Button
            className="flex justify-center items-center gap-3 px-3 py-2"
            variant="primary"
            icon={<PlusIcon />}
          >
            Create
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-300 overflow-x-auto">
        <Table
          className="table w-full border-collapse"
          columns={[
            'Name',
            'Employee ID',
            'Team',
            'Role',
            'Join Date',
            'Action',
          ]}
          dataSource={dataSource}
          renderBody={(data, index) => (
            <tr
              key={index.toString()}
              className="bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="table-cell px-4 py-3 text-gray-500 dark:text-gray-400 ">
                <div className="flex gap-3 items-center">
                  <Avatar
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src="https://avatars.steamstatic.com/009d272e2b496aa0758a86a17eac5f7716a99133_full.jpg"
                    alt="avatar"
                  />
                  {data.name}
                </div>
              </td>
              <td className="table-cell px-4 py-3 text-gray-500 dark:text-gray-400">
                {data.employeeId}
              </td>
              <td className="table-cell px-4 py-3 text-gray-500 dark:text-gray-400">
                {data.team}
              </td>
              <td className="table-cell px-4 py-3 text-gray-500 dark:text-gray-400">
                {data.role}
              </td>
              <td className="table-cell px-4 py-3 text-gray-500 dark:text-gray-400">
                {data.joinDate}
              </td>
              <td className="table-cell px-4 py-3 text-gray-500 dark:text-gray-400">
                <Link to={''}>
                  <EyeIcon />
                  <EditIcon />
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
