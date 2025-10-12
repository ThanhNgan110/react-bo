import { Link } from 'react-router-dom'
import { PATH } from '../../../configs'

//types
import type { IMenuItem } from '../../../types'

// components
import { MenuIcon, UserIcon } from '../../atoms/Icon'
import Menu from '../../molecules/Menu'

const Sidebar = () => {
  const navItems: IMenuItem[] = [
    {
      name: 'Dashboard',
      icon: <MenuIcon width={24} height={24} viewBox="0 0 20 24" />,
      path: PATH.DASHBOARD,
    },

    {
      name: 'Employee',
      icon: <UserIcon width={24} height={24} viewBox="0 0 20 24" />,
      path: PATH.EMPLOYEE_LIST,
    },
  ]

  return (
    <>
      <aside className="min-h-screen w-2xs border-r-2 border-gray-200 px-5 h-10">
        <h1 className="flex gap-3 py-8 ">
          <a href="/">
            <img src="/assets/images/logo/logo.svg" alt="TailAdmin" />
          </a>
        </h1>

        <nav className="mb-6">
          <h2 className="mb-5 text-gray-400 text-xs uppercase leading-1.5">
            Menu
          </h2>
          <Menu
            mode="vertical"
            menus={navItems}
            renderMenuItem={(data: IMenuItem) => (
              <li>
                <Link
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 active:bg-brand-50"
                  to={data.path}
                >
                  <span className="text-gray-500 text-sm font-medium">
                    {data.icon}
                  </span>
                  <span className="text-gray-700 text-sm font-medium">
                    {data.name}
                  </span>
                </Link>
              </li>
            )}
          />
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
