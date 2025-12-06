import React from 'react'
import { Ellipsis } from 'lucide-react'

//contexts
import { useSidebar } from '../../../contexts/SidebarContext'
import { useTheme } from '../../../contexts/ThemeContext'

// components
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
  const [toggleSetting, setToggleSetting] = React.useState(false)

  const { toggleSidebar, toggleMobileSidebar, isMobile, isMobileOpen } =
    useSidebar()
  const { theme, toggleTheme } = useTheme()

  const handleToggleSetting = () => {
    setToggleSetting((prev) => !prev)
  }

  const handleToggle = () => {
    if (window.innerWidth >= 998) {
      toggleSidebar()
    } else {
      toggleMobileSidebar()
    }
  }

  return (
    <header className="sticky z-99 top-0 max-w-full md:w-full flex flex-col items-center md:flex-row justify-between border-0 md:border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 lg:py-4">
      <div
        className={`flex items-center w-full px-4 py-2 border-b  border-b-gray-200 dark:b dark:border-b-gray-800 md:border-none ${isMobile ? 'justify-between' : 'gap-3'}`}
      >
        {isMobile ? (
          <Button
            onClick={handleToggle}
            type="button"
            variant="none"
            icon={<NavigationIcon className="text-gray-500" />}
          />
        ) : (
          <Button
            onClick={handleToggle}
            className="rounded-lg bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-700 p-2"
            type="button"
            variant="secondary"
            icon={<NavigationIcon className="text-gray-500" />}
          />
        )}
        {!isMobile && (
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
        )}
        {isMobile && (
          <>
            <a href="/">
              <img src="/assets/images/logo/logo-icon.svg" alt="TailAdmin" />
            </a>
            <Button
              onClick={handleToggleSetting}
              className="p-2"
              type="button"
              variant="none"
              icon={<Ellipsis className="text-gray-500 dark:text-gray-800" />}
            />
          </>
        )}
      </div>

      
      <div
        className={`${toggleSetting ? 'hidden': 'flex'} items-center ${isMobile ? 'justify-between w-full' : 'md:gap-5'} px-4 py-2`}
      >
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
