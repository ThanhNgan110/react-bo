import { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  classNameInput?: string
  prefixElement?: React.ReactNode
  suffixElement?: React.ReactNode
}

const Input = ({
  className = '',
  prefixElement: Prefix,
  suffixElement: Suffix,
  classNameInput = '',
  ...props
}: InputProps) => {
  return (
    <div
      className={`flex items-center w-full border border-gray-200 rounded-lg px-3
        focus-within:outline-none 
        focus-within:border-brand-500
        focus-within:ring-2 
        focus-within:ring-brand-500/30
        dark:border-gray-800 
        ${className}`}
    >
      {Prefix && <span className="mr-2">{Prefix}</span>}
      <input
        className={`h-11 w-full bg-transparent text-sm text-gray-800
          focus:outline-none  
          dark:bg-gray-900 dark:text-white/90
          ${classNameInput}`}
        {...props}
      />
      {Suffix && <span className="ml-2">{Suffix}</span>}
    </div>
  )
}

export default Input
