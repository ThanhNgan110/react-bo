import { Calendar } from 'lucide-react'

//components
import Label from '../../components/atoms/Label'
import {
  DatePicker,
  DropzoneField,
  TextField,
  SelectField,
} from '../../components/molecules/TextField'
import { Input, TextArea } from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'

const EmployeeEdit = () => {
  return (
    <div className="flex flex-col gap-5 p-5 border border-gray-200 rounded-2xl dark:border-gray-800 dark:bg-white">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        Edit Employee
      </h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Fill out the form below to create a new employee. Make sure to provide
        all the necessary information.
      </p>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <h4 className="mb-5 text-md font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Personal Detail
        </h4>
        <Label htmlFor="avatar">Avatar</Label>
        <DropzoneField />

        <div className="w-full flex-col justify-start items-start gap-8 flex">
          <div className="w-full flex flex-row justify-between items-center gap-8">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <Label htmlFor="firstName">
                First Name <span className="text-error-500">*</span>{' '}
              </Label>
              <TextField
                placeholder="Enter your first name"
                className="flex flex-col"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <Label htmlFor="lastName">
                Last Name <span className="text-error-500">*</span>{' '}
              </Label>
              <TextField placeholder="Enter your last name" />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center gap-8">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <Label htmlFor="date">
                Date of Birth
                <span className="text-error-500">*</span>{' '}
              </Label>
              <DatePicker
                className="w-full"
                mode="single"
                suffixIcon={<Calendar className="text-gray-500" />}
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <Label htmlFor="birth place">
                Birth Place <span className="text-error-500">*</span>{' '}
              </Label>
              <TextField placeholder="Enter your last name" />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center gap-8">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <Label htmlFor="nationality">
                Nationality <span className="text-error-500">*</span>{' '}
              </Label>
              <SelectField
                defaultValue={'VN'}
                options={[
                  { value: 'VN', label: 'Vietnam' },
                  { value: 'India', label: 'India' },
                  { value: 'Pakistan', label: 'Pakistan' },
                ]}
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <Label htmlFor="gender">
                Gender <span className="text-error-500">*</span>{' '}
              </Label>
              <SelectField
                defaultValue={'Female'}
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <h4 className="mb-5 text-md font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Contact Details
        </h4>
        <div className="w-full flex-col justify-start items-start gap-1.5 flex">
          <Label htmlFor="address">
            Address<span className="text-error-500">*</span>{' '}
          </Label>
          <TextArea rows={3}>123 Nguyen Van Cu, Hanoi</TextArea>
          <div className="w-full flex flex-row justify-between items-center gap-8">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <Label htmlFor="country">
                Country <span className="text-error-500">*</span>{' '}
              </Label>
              <Input
                type="text"
                className="w-full h-11 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <Label htmlFor="state">
                State<span className="text-error-500">*</span>{' '}
              </Label>
              <Input
                type="text"
                className="w-full h-11 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5">
        <Button variant="outlined" className="rounded-lg">
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  )
}

export default EmployeeEdit
