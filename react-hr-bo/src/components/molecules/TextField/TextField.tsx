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
        className={`relative flex items-center border border-gray-300 w-full rounded-lg
        focus-within:outline-none 
      focus:border-brand-300 focus:ring-brand-500/20
        dark:border-gray-800 
        ${className}`}
      >
        {Prefix && <span className="mr-2">{Prefix}</span>}
        <Input
          classNameInput={`border-none outline-none bg-transparent focus:outline-none focus:ring-0 focus:border ${classNameInput}`}
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
