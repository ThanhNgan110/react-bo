import type React from 'react'
import type { TVariants } from '../../../types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode
  sizes?: 'sm' | 'md'
  variant?: 'primary' | 'outlined' | 'secondary' | 'none'
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  type = 'button',
  variant = 'primary',
  sizes='sm',
  children,
  icon: IconComponent,
  onClick,
  disabled = false,
  ...rest
}) => {
  const SizesClass: Record<'sm' | 'md', string> = {
    sm: 'text-sm px-4 py-3',
    md: 'text-sm py-3 px-7',
  }

  const VariantsClass: Record<TVariants, string> = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 rounded-lg',
    outlined: 'border bg-white text-gray-500 border-gray-300 rounded-full',
    secondary: 'bg-gray-100 hover:bg-gray-200 rounded-lg',
    none: '',
  }
  return (
    <button
      className={`${className} transition cursor-pointer ${VariantsClass[variant]} ${sizes ? SizesClass[sizes] : ''} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {IconComponent &&
        (typeof IconComponent === 'function' ? (
          <IconComponent />
        ) : (
          <span>{IconComponent}</span>
        ))}
      {children}
    </button>
  )
}

export default Button
