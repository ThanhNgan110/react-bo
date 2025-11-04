import { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameInput?: string
}

const Input: React.FC<InputProps> = ({
  classNameInput = '',
  ...props
}: InputProps) => {
  return (
    <input
      className={`h-11 w-full bg-transparent text-sm text-gray-800
          focus:outline-none  
          dark:bg-gray-900 dark:text-white/90
          ${classNameInput}`}
      {...props}
    />
  )
}

export default Input
