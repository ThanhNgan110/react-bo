import clsx from 'clsx'

// types
import type { IMenuItem } from '../../../types'

interface MenuProps {
  mode?: 'vertical' | 'horizontal'
  className?: string
  menus: IMenuItem[]
  renderMenuItem: (menu: IMenuItem, index: number) => React.ReactNode
}

const Menu = ({
  mode = 'vertical',
  className='',
  menus,
  renderMenuItem,
}: MenuProps) => {
  return (
    <ul
      className={clsx(
        'flex justify-center gap-3 ',
        {
          'flex-row': mode === 'horizontal',
          'flex-col': mode === 'vertical',
        },
        className
      )}
    >
      {menus.map((menu, index) => renderMenuItem(menu, index))}
    </ul>
  )
}

export default Menu
