import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { EyeIcon, EyeOff } from 'lucide-react'
import { toast } from 'react-toastify'

// components
import Button from '../../components/atoms/Button'
import { GoogleIcon, MoonIcon, XIcon } from '../../components/atoms/Icon'
import { TextField } from '../../components/molecules/TextField'
import Label from '../../components/atoms/Label'

// types
import type { IFormInput } from '../../types'

// services
import type { ApiResponse } from '../../services'
import { httpRequest } from '../../services/initRequest'

// configs
import { PATH, REGEX_EMAIL } from '../../configs'
import { setLocalStorage } from '../../utils/localStorage'
import React from 'react'

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>()
  const onSubmit = async (
    dataInput: Omit<IFormInput, 'first_name' | '  last_name'>
  ) => {
    try {
      const bodyData = {
        data: {
          ...dataInput,
        },
      }

      const res = await httpRequest<ApiResponse>('api/user/signin', {
        method: 'POST',
        data: bodyData,
      })

      const { access_token, refresh_token } = (await res?.data) || {}

      toast.success('Login successfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setLocalStorage('access_token', access_token)
      setLocalStorage('refresh_token', refresh_token)
      navigate(PATH.DASHBOARD)
    } catch (error: any) {
      const { msg } = error?.response?.data || 'Login fail'

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

  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
            <div>
              <div className="mb-5 sm:mb-8">
                <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                  Login
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enter your email and password to login!
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
                        error={errors.email}
                        placeholder="info@gmail.com"
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
                          })}
                          error={errors.password}
                          aria-invalid={errors.password ? 'true' : 'false'}
                        />
                        <span
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute top-7 z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                        >
                          {showPassword ? (
                            <EyeIcon className="text-gray-400 dark:fill-gray-400 size-5" />
                          ) : (
                            <EyeOff className="text-gray-400 dark:fill-gray-400 size-5" />
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* <CheckboxField
                          checked={isChecked}
                          onChange={setIsChecked}
                        /> */}
                        <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                          Keep me logged in
                        </span>
                      </div>
                      <Link
                        to="/"
                        className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                      >
                        Forgot password?
                      </Link>
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
                    Don&apos;t have an account? {''}
                    <Link
                      to={PATH.REGISTER}
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                    >
                      Register
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
            <MoonIcon className=" text-gray-100  " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
