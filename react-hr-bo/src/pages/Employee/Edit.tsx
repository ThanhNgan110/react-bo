import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import { toast } from 'react-toastify'

//service
import { getApi, put } from '../../services'

//components
import Label from '../../components/atoms/Label'
import {
  DatePicker,
  DropzoneField,
  TextField,
  SelectField,
} from '../../components/molecules/TextField'
import { TextArea } from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'

import type { IMember } from '../../types'
import { PATH } from '../../configs'

const EmployeeEdit = () => {
  const { _id } = useParams()
  const navigate = useNavigate()
  const [employee, setEmployee] = React.useState<IMember | null>(null)

  const {
    setValue,
    register,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<Omit<IMember, 'id'>>({
    defaultValues: {
      avatar: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      dateJoin: '',
      address: '',
      district: '',
      city: '',
      nationality: '',
      gender: '',
      country: '',
      state: '',
      bio: '',
      role: '',
      team: '',
      position: '',
    },
  })

  React.useEffect(() => {
    if (!_id) return

    const getEmployee = async () => {
      const res = await getApi<IMember>(`api/member/${_id}`)
      const data = res.data ?? null
      setEmployee(data)
      if (data) {
        reset(data)
      }
    }

    getEmployee()
  }, [_id, reset])

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = async (data: Omit<IMember, 'id'>) => {
    console.log('data', data)

    const bodyData = {
      data: {
        ...data,
      },
    }

    const res = await put(`api/member/${_id}`, bodyData)
    const { isSuccess, msg } = res || {}

    if (isSuccess) {
      console.log('a')

      toast.success('Update member success ', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      reset()
    } else {
      toast.error(msg, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const handleClose = () => {
    navigate(PATH.EMPLOYEE_LIST)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 p-5 border border-gray-200 rounded-2xl dark:border-gray-800 dark:bg-white/[0.03]">
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
          <DropzoneField
            {...register('avatar', {
              required: 'Avatar is required',
            })}
            onSelectField={(file) =>
              setValue('avatar', file, { shouldValidate: true })
            }
            error={errors.avatar}
          />

          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full flex flex-row justify-between items-center gap-8">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="firstName">
                  First Name <span className="text-error-500">*</span>{' '}
                </Label>
                <TextField
                  {...register('firstName', {
                    required: 'First name is required',
                  })}
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  error={errors.firstName}
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="lastName">
                  Last Name <span className="text-error-500">*</span>{' '}
                </Label>
                <TextField
                  {...register('lastName', {
                    required: 'Last name is required',
                  })}
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  error={errors.lastName}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-8">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="email">
                  Email
                  <span className="text-error-500">*</span>{' '}
                </Label>
                <TextField
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  error={errors.email}
                  placeholder="info@gmail.com"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="phone">
                  Phone <span className="text-error-500">*</span>{' '}
                </Label>
                <TextField value={employee?.phone || ''} />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-8">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="date of birth">
                  Date of Birth <span className="text-error-500">*</span>{' '}
                </Label>
                <Controller
                  name="dob"
                  control={control}
                  rules={{ required: 'Date of Birth is required' }}
                  render={({ field }) => (
                    <DatePicker
                      value={field.value || employee?.dob}
                      placeholder="Select a date"
                      className="w-full"
                      mode="single"
                      onChange={(dateStr: string) => field.onChange(dateStr)}
                      suffixIcon={<Calendar className="text-gray-500" />}
                      error={errors.dob}
                    />
                  )}
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="date join">
                  Date join <span className="text-error-500">*</span>{' '}
                </Label>
                <Controller
                  name="dateJoin"
                  control={control}
                  rules={{ required: 'Date join is required' }}
                  render={({ field }) => (
                    <DatePicker
                      value={field.value || employee?.dateJoin}
                      placeholder="Select a date"
                      className="w-full"
                      mode="single"
                      onChange={(dateStr: string) => field.onChange(dateStr)}
                      suffixIcon={<Calendar className="text-gray-500" />}
                      error={errors.dateJoin}
                    />
                  )}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-8">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="nationality">
                  Nationality <span className="text-error-500">*</span>{' '}
                </Label>
                <SelectField
                  {...register('nationality', {
                    required: 'Please select a item',
                  })}
                  // defaultValue={employee?.nationality || ''}
                  options={[
                    { value: '', label: 'Choose a item' },
                    { value: 'Viet Nam', label: 'Viet Nam' },
                    { value: 'India', label: 'India' },
                    { value: 'Pakistan', label: 'Pakistan' },
                  ]}
                  error={errors.nationality}
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="gender">
                  Gender <span className="text-error-500">*</span>{' '}
                </Label>
                <SelectField
                  {...register('gender', { required: 'Please select a item' })}
                  // defaultValue={employee?.gender || ''}
                  options={[
                    { value: '', label: 'Choose a item' },
                    { value: 'Male', label: 'Male' },
                    { value: 'Female', label: 'Female' },
                    { value: 'Other', label: 'Other' },
                  ]}
                  error={errors.gender}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-8">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="position">
                  Position <span className="text-error-500">*</span>{' '}
                </Label>
                <TextField
                  // value={employee?.position || ''}
                  {...register('position', {
                    required: 'Position is required',
                  })}
                  aria-invalid={errors.position ? 'true' : 'false'}
                  error={errors.position}
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="team">
                  Team <span className="text-error-500">*</span>{' '}
                </Label>
                <TextField
                  {...register('team', {
                    required: 'Team is required',
                  })}
                  aria-invalid={errors.team ? 'true' : 'false'}
                  error={errors.team}
                />
              </div>
            </div>

            <div className="w-full">
              <Label htmlFor="bio">
                Bio<span className="text-error-500">*</span>{' '}
              </Label>
              <TextArea
                {...register('bio', {
                  required: 'Bio is required',
                })}
                aria-invalid={errors.bio ? 'true' : 'false'}
                error={errors.bio}
                rows={3}
              />
            </div>
            <div className="w-2xs">
              <Label htmlFor="role">
                Role <span className="text-error-500">*</span>{' '}
              </Label>
              <SelectField
                {...register('role', { required: 'Please select a item' })}
                options={[
                  { value: '', label: 'Choose a item' },
                  { value: 'admin', label: 'admin' },
                  { value: 'operator', label: 'operator' },
                  { value: 'member', label: 'member' },
                ]}
                error={errors.role}
              />
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
            <TextArea
              {...register('address', {
                required: 'Address is required',
              })}
              aria-invalid={errors.address ? 'true' : 'false'}
              error={errors.address}
              rows={3}
            />
            <div className="w-full flex flex-row justify-between items-center gap-8">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="district">
                  District <span className="text-error-500">*</span>{' '}
                </Label>
                <TextField
                  {...register('district', {
                    required: 'District is required',
                  })}
                  aria-invalid={errors.district ? 'true' : 'false'}
                  error={errors.district}
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="city">
                  City<span className="text-error-500">*</span>{' '}
                </Label>
                <TextField
                  {...register('city', {
                    required: 'City is required',
                  })}
                  aria-invalid={errors.city ? 'true' : 'false'}
                  error={errors.city}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-8">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="country">
                  Country <span className="text-error-500">*</span>{' '}
                </Label>
                <TextField
                  {...register('country', {
                    required: 'Country is required',
                  })}
                  aria-invalid={errors.country ? 'true' : 'false'}
                  error={errors.country}
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label htmlFor="state">
                  State<span className="text-error-500">*</span>{' '}
                </Label>
                <TextField
                  {...register('state', {
                    required: 'State is required',
                  })}
                  aria-invalid={errors.state ? 'true' : 'false'}
                  error={errors.state}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-5">
          <Button
            variant="outlined"
            className="rounded-lg"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </div>
      </div>
    </form>
  )
}

export default EmployeeEdit
