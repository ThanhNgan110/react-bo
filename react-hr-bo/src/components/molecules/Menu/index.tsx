import clsx from 'clsx'

interface MenuProps {
  mode?: 'vertical' | 'horizontal'
  className?: string
  children: React.ReactNode
}

const Menu = ({ mode = 'vertical', className, children }: MenuProps) => {
  return (
    <div
      className={clsx(
        'flex justify-center gap-3 ',
        {
          'flex-row': mode === 'horizontal',
          'flex-col': mode === 'vertical',
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Menu
