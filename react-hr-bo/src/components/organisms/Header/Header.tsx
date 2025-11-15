// components
import { useSidebar } from '../../../contexts/SidebarContext'
import Button from '../../atoms/Button'
import {
  BellIcon,
  MoonIcon,
  NavigationIcon,
  SearchIcon,
} from '../../atoms/Icon'
import { TextField } from '../../molecules/TextField'
import { UserDropDown } from '../UserDropDown'

const Header = () => {
  const { toggleSidebar, toggleMobileSidebar } = useSidebar()

  const handleToggle = () => {
    if (window.innerWidth >= 998) {
      toggleSidebar()
    } else {
      toggleMobileSidebar()
    }
  }

  return (
    <header className="sticky top-0 max-w-full md:w-full flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3">
        {/* {isMobileOpen ? (
          <Button
            onClick={handleToggle}
            className="rounded-lg bg-white border border-gray-200 dark:border-gray-800 p-2"
            type="button"
            variant="secondary"
            icon={<NavigationIcon className="text-gray-500" />}
          />
        ) : (
          <NavigationIcon className="text-gray-500 cursor-pointer" />
        )} */}
        <Button
          onClick={handleToggle}
          className="rounded-lg bg-white border border-gray-200 dark:border-gray-800 p-2"
          type="button"
          variant="secondary"
          icon={<NavigationIcon className="text-gray-500" />}
        />
        <TextField
          className="w-[100px] md:w-[500px]  px-5"
          classNameInput=" py-2 px-3 placeholder:text-sm placeholder:text-gray-400 dark:placeholder:text-gray-400 rounded-lg"
          prefixElement={
            <SearchIcon
              className="fill-gray-500 dark:fill-gray-400"
              width={20}
              height={20}
            />
          }
          placeholder="Search or type command..."
        />
      </div>

      <div className="xsm:hidden md:flex items-center gap-5">
        <div className="flex gap-3">
          <Button
            className="flex items-center justify-center bg-white border border-gray-200 rounded-full w-11 h-11 dark:border-gray-800 p-2"
            type="button"
            variant="secondary"
            icon={<MoonIcon className="text-gray-500" />}
          />
          <Button
            className="flex items-center justify-center bg-white border border-gray-200 rounded-full  w-11 h-11 dark:border-gray-800 p-2"
            type="button"
            variant="secondary"
            icon={<BellIcon className="text-gray-500" />}
          />
        </div>
        <UserDropDown />
      </div>
    </header>
  )
}

export default Header
