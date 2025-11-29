import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import Avatar from '../../molecules/Avatar'
import DropdownItem from '../../atoms/DropdownItem'
import { Popover } from '../../molecules/Popover'
import Button from '../../atoms/Button'

import {
  BadgeAlert,
  ChevronDown,
  ChevronUp,
  CircleUserRound,
  LogOut,
  Settings,
} from 'lucide-react'

import { PATH } from '../../../configs/index'
import { removeLocalStorage } from '../../../utils/localStorage'

const UserDropDown = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const navigate = useNavigate()

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    removeLocalStorage('access_token')
    removeLocalStorage('refresh_token')
    navigate(PATH.LOGIN)
  }

  return (
    <div className="relative flex items-center gap-2">
      <Avatar
        className="w-10 h-10 rounded-full cursor-pointer"
        src="https://avatars.steamstatic.com/009d272e2b496aa0758a86a17eac5f7716a99133_full.jpg"
        alt="avatar"
      />
      <span className="text-gray-700 dark:text-gray-400 text-sm">
        ngan@gmail.com
      </span>
      <Button
        className="p-0"
        variant="none"
        onClick={handleToggleMenu}
        icon={
          isOpen ? (
            <ChevronUp
              className="stroke-gray-400 dark:stroke-gray-500"
              width={18}
              height={20}
              viewBox="0 0 18 20"
            />
          ) : (
            <ChevronDown
              className="stroke-gray-400 dark:stroke-gray-500"
              width={18}
              height={20}
              viewBox="0 0 18 20"
            />
          )
        }
      />

      <Popover
        className="absolute w-64 px-2 py-1 right-0 top-12 rounded-lg"
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className="mt-4">
          <p className="text-theme-sm block font-medium text-gray-700 dark:text-gray-400">
            Musharof Chowdhury
          </p>
          <p className="text-theme-xs mt-0.5 block text-gray-500 dark:text-gray-400">
            randomuser@pimjo.com
          </p>
        </div>
        <ul className="py-2 text-sm">
          <li className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 cursor-pointer hover:rounded-lg">
            <DropdownItem className="flex gap-3 items-center" tag="a">
              <CircleUserRound
                className="text-gray-400 dark:text-gray-300"
                size={24}
              />
              <span className="text-black dark:text-gray-300">
                Edit profile
              </span>
            </DropdownItem>
          </li>
          <li className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 cursor-pointer hover:rounded-lg">
            <DropdownItem className="flex gap-3 items-center" tag="a">
              <Settings
                className="text-gray-400 dark:text-gray-300"
                size={24}
              />
              <span className="text-black dark:text-gray-300">
                {' '}
                Account Settings
              </span>
            </DropdownItem>
          </li>
          <li className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 cursor-pointer hover:rounded-lg ">
            <DropdownItem className="flex gap-3 items-center" tag="a">
              <BadgeAlert
                className="text-gray-400 dark:text-gray-300"
                size={24}
              />
              <span className="text-black dark:text-gray-300">Support</span>
            </DropdownItem>
          </li>
          <li className="py-2 border-t-1 border-gray-200 mt-3 dark:border-gray-700"></li>
          <li className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer hover:rounded-lg">
            <DropdownItem
              className="flex gap-3 items-center"
              tag="button"
              onClick={handleLogout}
            >
              <LogOut className="text-gray-400 dark:text-gray-300" size={24} />
              <span className="text-black dark:text-gray-300"> Sign out</span>
            </DropdownItem>
          </li>
        </ul>
      </Popover>
    </div>
  )
}

export default UserDropDown
