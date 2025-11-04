import React from 'react'

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


const UserDropDown = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative flex items-center gap-2">
      <Avatar
        className="w-10 h-10 rounded-full cursor-pointer"
        src="https://avatars.steamstatic.com/009d272e2b496aa0758a86a17eac5f7716a99133_full.jpg"
        alt="avatar"
      />
      <span className="text-gray-700 dark:text-gray-200 text-sm">
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

      <Popover isOpen={isOpen} onClose={handleClose}>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-900">
            Musharof Chowdhury
          </p>
          <p className="text-gray-500">randomuser@pimjo.com</p>
        </div>
        <ul className="py-2 text-sm">
          <li className="flex gap-2  text-sm  px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 cursor-pointer hover:rounded-lg">
            <DropdownItem className="flex gap-3 items-center" tag="button">
              <CircleUserRound
                className="text-gray-400 dark:text-gray-300"
                size={24}
              />
              <span>Edit profile</span>
            </DropdownItem>
          </li>
          <li className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 cursor-pointer hover:rounded-lg">
            <DropdownItem className="flex gap-3 items-center" tag="button">
              <Settings
                className="text-gray-400 dark:text-gray-300"
                size={24}
              />
              Account Settings
            </DropdownItem>
          </li>
          <li className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 cursor-pointer hover:rounded-lg ">
            <DropdownItem className="flex gap-3 items-center" tag="button">
              <BadgeAlert
                className="text-gray-400 dark:text-gray-300"
                size={24}
              />
              Support
            </DropdownItem>
          </li>
          <li className="py-2 border-t-1 border-gray-200 mt-3"></li>
          <li className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white-100 dark:hover:text-gray-300 cursor-pointer hover:rounded-lg">
            <DropdownItem className="flex gap-3 items-center" tag="button">
              <LogOut className="text-gray-400 dark:text-gray-300" size={24} />
              Sign out
            </DropdownItem>
          </li>
        </ul>
      </Popover>
    </div>
  )
}

export default UserDropDown
