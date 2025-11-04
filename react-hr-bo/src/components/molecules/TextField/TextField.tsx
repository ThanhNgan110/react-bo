// components
import { Input } from '../../atoms/Input'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  classNameInput?: string
  prefixElement?: React.ReactNode
  suffixElement?: React.ReactNode
  children?: React.ReactNode
}

const TextField = ({
  className = '',
  classNameInput = '',
  prefixElement: Prefix,
  suffixElement: Suffix,
  children,
  ...props
}: TextFieldProps) => {
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
      <Input classNameInput={classNameInput} {...props} />

      {Suffix && <span className="ml-2">{Suffix}</span>}
      {children}
    </div>
  )
}

export default TextField
