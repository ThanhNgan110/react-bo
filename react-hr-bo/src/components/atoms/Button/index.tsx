import type React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode
  sizes?: 'sm' | 'md'
  variant?: 'primary' | 'outlined' | 'secondary'
  icon?: React.FC<React.SVGProps<SVGAElement>>
  onClick?: () => void
  disabled?: boolean
}

const SizesClass = {
  ssm: 'text-sm px-8 py-7',
  sm: 'text-sm px-4 py-3',
  md: 'text-sm py-3 px-7',
}

const VariantsClass = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600 rounded-lg',
  outlined: 'border bg-white text-gray-500 border-gray-300 rounded-full',
  secondary: 'bg-gray-100 hover:bg-gray-200 rounded-lg',
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  type = 'button',
  variant = 'primary',
  sizes = 'sm',
  children,
  icon: IconComponent,
  onClick,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      className={`inline-flex transition cursor-pointer ${VariantsClass[variant]} ${SizesClass[sizes]} ${className} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {IconComponent && (
        <span>
          <IconComponent />
        </span>
      )}
      {children}
    </button>
  )
}

export default Button
