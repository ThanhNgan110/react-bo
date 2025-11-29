// components
import type { FieldError } from 'react-hook-form'
import { Input } from '../../atoms/Input'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  classNameInput?: string
  error?: FieldError | undefined
  prefixElement?: React.ReactNode
  suffixElement?: React.ReactNode
  children?: React.ReactNode
}

const TextField = ({
  className = '',
  classNameInput = '',
  error,
  prefixElement: Prefix,
  suffixElement: Suffix,
  children,
  ...props
}: TextFieldProps) => {
  return (
    <>
      <div
        className={`relative flex items-center w-full rounded-lg dark:border-gray-800
        ${className}`}
      >
        {Prefix && Prefix}
        <Input
          classNameInput={`dark:bg-dark-900 h-9 w-full rounded-lg border border-gray-200 bg-transparent text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${classNameInput}`}
          {...props}
        />
        {Suffix && <span className="ml-2">{Suffix}</span>}
        {children}
      </div>
      {error?.message && (
        <p className="text-sm text-error-500 mt-1">{error?.message}</p>
      )}
    </>
  )
}

export default TextField
