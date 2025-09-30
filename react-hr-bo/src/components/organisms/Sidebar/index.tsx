// components
import { MenuIcon, UserIcon } from '../../atoms/Icon'
import Menu from '../../molecules/Menu'
import MenuItem from '../../molecules/MenuItem'

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-2xs border-r-2 border-gray-200 px-5 h-10">
      <h1 className="flex gap-3 py-8 ">
        <a href="/">
          <img src="/assets/images/logo/logo.svg" alt="TailAdmin" />
        </a>
      </h1>

      <nav className="mb-6">
        <Menu mode="vertical">
          <h2 className="text-gray-400 text-xs uppercase leading-1.5">Menu</h2>
          <MenuItem className="p-3 rounded-lg hover:bg-gray-100 active:bg-brand-50 active:text-brand-500">
            <span className="text-gray-500 text-sm font-medium">
              <MenuIcon width={24} height={24} viewBox="0 0 20 24" />
            </span>
            <span className="text-gray-700 text-sm font-medium">DashBoard</span>
          </MenuItem>
          <MenuItem className="p-3 rounded-lg hover:bg-gray-100">
            <span className="text-gray-500 text-sm font-medium">
              <UserIcon width={24} height={24} viewBox="0 0 20 24" />
            </span>
            <span className="text-gray-700 text-sm font-medium">Employees</span>
          </MenuItem>
        </Menu>
      </nav>
    </aside>
  )
}

export default Sidebar
