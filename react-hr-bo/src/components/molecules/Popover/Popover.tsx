import React from 'react'

interface PopoverProps {
  isOpen: boolean
  onClose: () => void
  className?: string
  children?: React.ReactNode
}

const Popover: React.FC<PopoverProps> = ({
  isOpen,
  onClose,
  className,
  children,
}) => {
  const popoverRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleCloseOutSide = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleCloseOutSide)

    return () => {
      document.removeEventListener('mouseenter', handleCloseOutSide)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={popoverRef}
      className={`absolute w-64 px-2 py-1 right-0 top-12 rounded-lg bg-white shadow-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  )
}

export default Popover
