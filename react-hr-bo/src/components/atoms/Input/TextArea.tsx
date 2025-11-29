import React from 'react'

import type { FieldError } from 'react-hook-form'

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  children?: string
  error: FieldError | undefined
}

const TextArea: React.FC<TextAreaProps> = ({
  className = '',
  children,
  error,
  ...rest
}) => {
  return (
    <>
      <textarea
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 dark:border-gray-700 ${className}`}
        {...rest}
      >
        {children}
      </textarea>
      {error?.message && (
        <p className="text-sm text-error-500 mt-1">{error?.message}</p>
      )}
    </>
  )
}

export default TextArea
