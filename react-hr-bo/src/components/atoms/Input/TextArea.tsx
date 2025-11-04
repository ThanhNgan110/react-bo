import React from 'react'

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  children?: string
}

const TextArea: React.FC<TextAreaProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <textarea
      className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 ${className}`}
      {...rest}
    >
      {children}
    </textarea>
  )
}

export default TextArea
