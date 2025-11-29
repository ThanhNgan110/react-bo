import React from 'react'

interface PopoverProps {
  isOpen?: boolean
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
      const target = e.target as HTMLElement | null
      if (!target) return

      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        !target.closest('.dropdown-toggle')
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleCloseOutSide)
    }

    return () => {
      document.removeEventListener('mouseenter', handleCloseOutSide)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={popoverRef}
      className={`bg-white shadow-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  )
}

export default Popover
