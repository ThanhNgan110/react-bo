// components
import Avatar from '../../components/molecules/Avatar'
import Button from '../../components/atoms/Button'

const EmployeeShow = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-5">
      <h3 className="font-semibold text-black dark:text-white mb-4">
        Show Detail
      </h3>
      <div className="flex justify-between items-center mb-6">
        <Avatar src="/src/" alt="avatar" />
        <Button variant="primary" className="px-3 py-2">
          Edit profile
        </Button>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">Employee ID</p>
        <p className="font-medium text-gray-800 dark:text-white/90">
          edcf765c-82d3-4c06-8102
        </p>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            First Name
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">Tony</p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Last Name
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">Nguyen</p>
        </div>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">Email</p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            tony@gmail.com
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">Phone</p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            +84 123 456 789
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Date of birth
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            12/12/1990
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Birth place
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            Ho Chi Minh City
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Nationality
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            Viet Nam
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Gender
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">Male</p>
        </div>
      </div>
      <div className="flex flex-col justify-start mb-6">
        <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">Address</p>
        <p className="font-medium text-gray-800 dark:text-white/90">
          123 Nguyen Trai, District 1, Ho Chi Minh City
        </p>
      </div>
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
            Country
          </p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            Viet Nam
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">State</p>
          <p className="font-medium text-gray-800 dark:text-white/90">
            Ho Chi Minh city
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">Bio</p>
        <p className="font-medium text-gray-800 dark:text-white/90">
          Team Manager at ABC Company. Passionate about technology and software
          development.
        </p>
      </div>
    </div>
  )
}

export default EmployeeShow
