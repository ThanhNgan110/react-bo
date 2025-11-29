// components
import React from 'react'
import { useSidebar } from '../../../contexts/SidebarContext'
import { useTheme } from '../../../contexts/ThemeContext'
import Button from '../../atoms/Button'
import {
  BellIcon,
  DarkIcon,
  MoonIcon,
  NavigationIcon,
  SearchIcon,
} from '../../atoms/Icon'
import { TextField } from '../../molecules/TextField'
import { UserDropDown } from '../UserDropDown'

const Header = () => {
  // const [theme, setTheme] = React.useState()

  const { toggleSidebar, toggleMobileSidebar } = useSidebar()
  const { theme, toggleTheme } = useTheme()

  const handleToggle = () => {
    if (window.innerWidth >= 998) {
      toggleSidebar()
    } else {
      toggleMobileSidebar()
    }
  }

  return (
    <header className="sticky z-99 top-0 max-w-full md:w-full flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 lg:py-4">
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
          className="rounded-lg bg-white border border-gray-200 dark:border-gray-800 p-2 dark:bg-gray-900 dark:hover:bg-gray-800"
          type="button"
          variant="secondary"
          icon={<NavigationIcon className="text-gray-500" />}
        />
        <TextField
          className="w-[100px] md:w-[500px]"
          classNameInput="pl-8"
          prefixElement={
            <span className="absolute bottom-3 left-2">
              <SearchIcon
                className="fill-gray-500 dark:fill-gray-400"
                width={20}
                height={20}
              />
            </span>
          }
          placeholder="Search or type command..."
        />
      </div>

      <div className="xsm:hidden md:flex items-center gap-5">
        <div className="flex gap-3">
          <Button
            onClick={toggleTheme}
            className="flex items-center justify-center bg-white border border-gray-200 w-11 h-11 dark:border-gray-800  dark:bg-gray-900 dark:hover:bg-gray-800 p-2"
            type="button"
            variant="outlined"
            icon={
              theme === 'light' ? (
                <MoonIcon className="text-gray-500" />
              ) : (
                <DarkIcon className="text-gray-500" />
              )
            }
          />
          <Button
            className="flex items-center justify-center bg-white border border-gray-200 rounded-full  w-11 h-11 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800 p-2"
            type="button"
            variant="outlined"
            icon={<BellIcon className="text-gray-500" />}
          />
        </div>
        <UserDropDown />
      </div>
    </header>
  )
}

export default Header
