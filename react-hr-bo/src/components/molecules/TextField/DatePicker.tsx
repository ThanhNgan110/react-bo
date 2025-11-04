import React, { useEffect, useRef } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

interface DatePickerProps {
  className?: string
  mode?: 'single' | 'multiple' | 'range' | 'time'
  onChange?: flatpickr.Options.Hook | flatpickr.Options.Hook[]
  placeholder?: string
  suffixIcon?: React.ReactNode
  defaultDate?: flatpickr.Options.DateOption
}

const DatePicker: React.FC<DatePickerProps> = ({
  mode = 'single',
  onChange,
  placeholder,
  suffixIcon,
  defaultDate,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {

    if (!inputRef.current) return

    const picker = flatpickr(inputRef.current, {
      mode,
      dateFormat: 'Y-m-d',
      static: true,
      defaultDate,
      monthSelectorType: 'static',
      onChange,
    })

    return () => {
      picker.destroy()
    }
  }, [mode, onChange, defaultDate])

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
      />
      {suffixIcon && (
        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
          {suffixIcon}
        </span>
      )}
    </div>
  )
}

export default DatePicker
