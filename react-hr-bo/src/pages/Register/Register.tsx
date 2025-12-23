import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { EyeIcon, EyeOff, MoonIcon } from 'lucide-react'

// components
import Button from '../../components/atoms/Button'
import { DarkIcon, GoogleIcon, XIcon } from '../../components/atoms/Icon'
import { TextField } from '../../components/molecules/TextField'
import Label from '../../components/atoms/Label'
import { Input } from '../../components/atoms/Input'

//configs
import { PATH, REGEX_EMAIL, REGEX_PASSWORD } from '../../configs'
import type { IUser } from '../../types'
import { post } from '../../services'
import { useTheme } from '../../contexts/ThemeContext'

const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const { theme, toggleTheme } = useTheme()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUser>()
  const onSubmit = async (dataInput: IUser) => {
    const bodyData = {
      data: {
        ...dataInput,
        address: '140 le van sy',
        city: 'HCM',
        country: 'VN',
        state: '14',
        role: 'admin',
      },
    }

    const res = await post<'', typeof bodyData>('api/user/signup', bodyData)

    const { isSuccess, msg } = res
    console.log('res', res)

    if (isSuccess) {
      toast.success(`${msg || 'Register successfully!'}`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      navigate(PATH.LOGIN)
    } else {
      toast.error(`${msg || 'Register fail!'}`, {
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

  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
            <div>
              <div className="mb-5 sm:mb-8">
                <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                  Register
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enter your email and password to sign up!
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
                  <Button
                    className="flex gap-3 justify-center"
                    type="button"
                    variant="secondary"
                    icon={GoogleIcon}
                  >
                    Sign in with Google
                  </Button>
                  <Button
                    className="flex gap-3 justify-center"
                    type="button"
                    variant="secondary"
                    icon={XIcon}
                  >
                    Sign in with X
                  </Button>
                </div>
                <div className="relative py-3 sm:py-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                      Or
                    </span>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-6">
                    <div className="flex gap-3">
                      <div className="flex flex-col w-3xs">
                        <Label htmlFor="firstName">
                          FirstName{' '}
                          <span className="text-error-500">*</span>{' '}
                        </Label>
                        <TextField
                          {...register('first_name', {
                            required: 'First Name is required',
                          })}
                          aria-invalid={errors.first_name ? 'true' : 'false'}
                          placeholder="Enter your first name"
                          error={errors.first_name}
                        />
                      </div>
                      <div className="flex flex-col w-3xs">
                        <Label htmlFor="lastName">
                          LastName{' '}
                          <span className="text-error-500">*</span>{' '}
                        </Label>
                        <TextField
                          {...register('last_name', {
                            required: 'Last Name is required',
                          })}
                          aria-invalid={errors.last_name ? 'true' : 'false'}
                          placeholder="Enter your last name"
                          error={errors.last_name}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">
                        Email <span className="text-error-500">*</span>{' '}
                      </Label>
                      <TextField
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: REGEX_EMAIL,
                            message: 'Invalid email format',
                          },
                        })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        placeholder="Enter your email"
                        error={errors.email}
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">
                        Password <span className="text-error-500">*</span>{' '}
                      </Label>
                      <div className="relative">
                        <TextField
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          {...register('password', {
                            required: 'Password is required',
                            pattern: {
                              value: REGEX_PASSWORD,
                              message: 'Invalid password format',
                            },
                          })}
                          error={errors.password}
                          aria-invalid={errors.password ? 'true' : 'false'}
                        />
                        <span
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute top-7 z-30 -translate-y-1/2 cursor-pointer right-4"
                        >
                          {showPassword ? (
                            <EyeIcon className=" text-gray-400  size-5" />
                          ) : (
                            <EyeOff className="text-gray-400 size-5" />
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                      <Input
                        className="w-6 h-6 cursor-pointer "
                        type="checkbox"
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        By creating an account means you agree to
                        <span className="text-gray-800 dark:text-white">
                          the Terms and Conditions
                        </span>
                        , and our {''}
                        <span className="text-gray-800 dark:text-white">
                          Privacy Policy
                        </span>
                      </p>
                    </div>
                    <div className="text-center">
                      <Button className="w-full" sizes="sm" type="submit">
                        Sign in
                      </Button>
                    </div>
                  </div>
                </form>

                <div className="mt-5">
                  <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                    Already have an account?
                    <Link
                      to={PATH.LOGIN}
                      className="text-brand-500 hover:text-brand-600 ml-2 dark:text-brand-400"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
              <img src="/assets/images/shape/grid-01.svg" alt="grid" />
            </div>
            <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
              <img src="/assets/images/shape/grid-01.svg" alt="grid" />
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <Link
                to="/assets/images/logo/auth-logo.svg"
                className="block mb-4"
              >
                <img
                  width={231}
                  height={48}
                  src="/assets/images/logo/logo.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-center text-gray-400 dark:text-white/60">
                Free and Open-Source Tailwind CSS Admin Dashboard Template
              </p>
            </div>
          </div>
          <div className="absolute bottom-10 right-12 bg-brand-500 rounded-full flex items-center justify-center w-15 h-15 cursor-pointer hover:bg-brand-700">
            <Button
              onClick={toggleTheme}
              className="w-15 h-15 flex items-center justify-center bg-brand-500 hover:bg-brand-600 border-none rounded-full w-11 h-11  p-2"
              type="button"
              variant="none"
              icon={
                theme === 'light' ? (
                  <MoonIcon className="text-gray-200" />
                ) : (
                  <DarkIcon className="text-gray-200" />
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register
