import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  prefixElement?: React.ReactNode
  suffixElement?: React.ReactNode
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  className = '',
  prefixElement = null,
  suffixElement = null,
  onChange,
  ...props
}: InputProps) => {
  return (
    <div className={`flex items-center w-full border rounded-lg ${className}`}>
      {prefixElement && (
        <span className="mr-2 text-gray-500">{prefixElement}</span>
      )}
      <input
        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
        {...props}
        onChange={onChange}
      />
      {suffixElement && (
        <span className="ml-2 text-gray-500">{suffixElement}</span>
      )}
    </div>
  )
}

export default Input
