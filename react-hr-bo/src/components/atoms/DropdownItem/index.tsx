import { Link } from 'react-router-dom'

interface DropdownItemProps {
  tag?: 'a' | 'button'
  baseClassName?: string
  className?: string
  to?: string
  onClick?: () => void
  onItemClick?: () => void
  children: React.ReactNode
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  to,
  tag = 'button',
  baseClassName = 'rounded-lg text-sm text-gray-700  hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700',
  className = '',
  onClick,
  onItemClick,
  children,
}) => {
  const combinedClassName = `${baseClassName} ${className}`

  const handleClick = (e: React.MouseEvent) => {
    if (tag === 'button') {
      e.preventDefault()
    }
  }

  if (tag === 'a' && to) {
    
    return (
      <Link className={combinedClassName} to={to} onClick={handleClick}>
        {children}
      </Link>
    )
  }
  return (
    <button
      className={`cursor-pointer ${combinedClassName}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default DropdownItem
