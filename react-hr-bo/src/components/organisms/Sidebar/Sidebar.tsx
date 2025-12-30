import { Link, useLocation } from 'react-router-dom'
import { PATH } from '../../../configs'
import { Ellipsis } from 'lucide-react'

// contexts
import { useSidebar } from '../../../contexts/SidebarContext'

//types
import type { IMenuItem } from '../../../types'

// components
import { MenuIcon, UserIcon } from '../../atoms/Icon'
import Menu from '../../molecules/Menu'

const Sidebar = () => {
  const {
    isExpanded,
    isHovered,
    setIsHovered,
    isMobileOpen,
    isMobile,
    isActived,
  } = useSidebar()
  const location = useLocation()

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

  const handleHovered = (isHovered: boolean) => () => {
    if (!isExpanded) {
      setIsHovered(isHovered)
    }
  }
  return (
    <>
      <aside
        className={`
  fixed mt-16 z-100 md:static md:mt-0 bg-white min-h-screen
  border-r-2 border-gray-200 px-5 transition-all duration-300
  dark:border-gray-800 dark:bg-black lg:translate-x-0

  ${
    isMobile
      ? isMobileOpen
        ? 'translate-x-0 w-[290px]'
        : '-translate-x-full w-[90px]'
      : isExpanded || isHovered
        ? 'translate-x-0 w-[290px]'
        : 'translate-x-full w-[90px]'
  }
`}
        onMouseEnter={handleHovered(true)}
        onMouseLeave={handleHovered(false)}
      >
        <h1 className="flex gap-3 py-8 ">
          <a href="/">
            {isMobile ? (
              <img
                src="/assets/images/logo/logo.svg"
                alt="TailAdmin logo with stylized text TailAdmin in blue and green, set against a white background, conveying a modern and professional tone"
              />
            ) : isExpanded || isHovered ? (
              <img
                src="/assets/images/logo/logo.svg"
                alt="TailAdmin logo with stylized text TailAdmin in blue and green, set against a white background, conveying a modern and professional tone"
              />
            ) : (
              ''
            )}
          </a>
        </h1>

        <nav className="mb-6">
          <h2 className="mb-5 text-gray-400 text-xs uppercase leading-1.5">
            {isMobile ? (
              isMobileOpen ? (
                'Menu'
              ) : (
                ''
              )
            ) : isExpanded || isHovered ? (
              'Menu'
            ) : (
              <Ellipsis className="ml-3" />
            )}
          </h2>
          <Menu
            mode="vertical"
            menus={navItems}
            renderMenuItem={(data: IMenuItem) => (
              <li
                className={
                  location.pathname === data.path
                    ? 'bg-brand-50 text-brand-500 rounded-lg'
                    : 'hover:bg-brand-100 rounded-lg'
                }
              >
                <Link
                  className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 active:bg-brand-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  to={data.path}
                >
                  <span
                    className="
                      text-gray-500 text-sm font-medium
                      group-hover:text-brand-500 dark:group-hover:text-white
                    "
                  >
                    {data.icon}
                  </span>
                  {isMobile ? (
                    isMobileOpen ? (
                      <p
                        className="
                        text-gray-700 text-sm font-medium dark:text-gray-400 
                        group-hover:text-brand-500 dark:group-hover:text-white
                      "
                      >
                        {data.name}
                      </p>
                    ) : (
                      ''
                    )
                  ) : isExpanded || isHovered ? (
                    <p
                      className="
                        text-gray-700 text-sm font-medium dark:text-gray-400 
                        group-hover:text-brand-500 dark:group-hover:text-white
                      "
                    >
                      {data.name}
                    </p>
                  ) : (
                    ''
                  )}
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
