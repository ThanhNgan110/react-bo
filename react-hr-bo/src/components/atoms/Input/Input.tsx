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
      className={` h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 
        -brand-300 dark:text-white/90 
          ${classNameInput}`}
      {...props}
    />
  )
}

export default Input
