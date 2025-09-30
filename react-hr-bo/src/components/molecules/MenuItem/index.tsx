interface MenuItemProps {
  type?: 'divider'
  className?: string
  children: React.ReactNode
}

const MenuItem = (item: MenuItemProps) => {
  const { type, className, children } = item

  if (type === 'divider') {
    return <hr className="my-2 border-gray-200" />
  }

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${className}`}
    >
      {children}
    </div>
  )
}

export default MenuItem
