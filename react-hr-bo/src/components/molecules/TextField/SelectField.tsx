import type React from 'react'

// types
import type { TOption } from '../../../types'

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  mode?: 'multiple' | 'tag'
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: TOption[]
  suffixIcon?: React.ReactNode
}

const SelectField: React.FC<SelectFieldProps> = ({
  className,
  mode,
  onChange,
  options,
  ...rest
}) => {
  return (
    <select
      multiple={mode === 'multiple'}
      onChange={onChange}
      className={`h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900${className} `}
      {...rest}
    >
      {options.map((option: TOption) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SelectField
