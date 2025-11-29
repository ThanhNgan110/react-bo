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
      className={` border border-gray-300 h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden
       dark:border-gray-700 focus:ring-3 focus:ring-brand-500/10 ${classNameInput}`}
      {...props}
    />
  )
}

export default Input
