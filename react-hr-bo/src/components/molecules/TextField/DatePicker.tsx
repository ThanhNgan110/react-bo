import React, { useEffect, useRef } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import type { FieldError } from 'react-hook-form'

interface DatePickerProps {
  className?: string
  mode?: 'single' | 'multiple' | 'range' | 'time'
  onChange?: (dateSelected: string) => void
  placeholder?: string
  suffixIcon?: React.ReactNode
  defaultDate?: flatpickr.Options.DateOption
  error?: FieldError | undefined
}

const DatePicker: React.FC<DatePickerProps> = ({
  mode = 'single',
  onChange,
  placeholder,
  suffixIcon,
  defaultDate,
  error,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!inputRef.current) return

    const picker = flatpickr(inputRef.current, {
      mode,
      dateFormat: 'd-m-Y',
      static: true,
      defaultDate,
      monthSelectorType: 'static',
      onChange: (_, dateStr) => {
        onChange?.(dateStr)
      },
    })

    return () => picker.destroy()
  }, [mode, onChange, defaultDate])

  return (
    <>
      <div className="relative w-full">
        <input
          ref={inputRef}
          placeholder={placeholder}
          className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs border-gray-300 dark:border-gray-700  placeholder:text-gray-400 focus:outline-hidden focus:border-brand-500 focus:ring-3 focus:ring-brand-500/10"
        />
        {suffixIcon && (
          <span className="absolute -translate-y-1/2 right-3 top-1/2 pointer-events-none text-gray-500">
            {suffixIcon}
          </span>
        )}
      </div>
      {error?.message && (
        <p className="mt-1 text-sm text-error-500">{error.message}</p>
      )}
    </>
  )
}

export default DatePicker
