import { useState } from 'react'

import { CircleUserRound, Settings, LogOut, BadgeAlert } from 'lucide-react'

// components
import Button from '../../atoms/Button'
import {
  BellIcon,
  DropdownIcon,
  MoonIcon,
  NavigationIcon,
  SearchIcon,
} from '../../atoms/Icon'
import Input from '../../atoms/Input'
import Avatar from '../../molecules/Avatar'
import DropdownItem from '../../atoms/DropdownItem'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <Button
          className="rounded-lg bg-white border border-gray-200 dark:border-gray-800 p-2"
          type="button"
          variant="secondary"
          icon={<NavigationIcon className="text-gray-500" />}
        />
        <Input
          classNameInput="py-2 px-3 placeholder:text-sm placeholder:text-gray-400 dark:placeholder:text-gray-400 rounded-lg"
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

      <div className="flex items-center gap-5">
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
        <div className="relative flex items-center gap-2">
          <Avatar
            className="w-10 h-10 rounded-full cursor-pointer"
            src="https://avatars.steamstatic.com/009d272e2b496aa0758a86a17eac5f7716a99133_full.jpg"
            alt="avatar"
          />
          <span className="text-gray-700 dark:text-gray-200 text-sm">
            ngan@gmail.com
          </span>
          <DropdownIcon
            className="cursor-pointer"
            width={18}
            height={20}
            viewBox="0 0 18 20"
            onClick={() => setOpenMenu(!openMenu)}
          />
          <div className="absolute w-64 px-2 py-1 right-0 top-12 rounded-lg bg-white shadow-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
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
                  <LogOut
                    className="text-gray-400 dark:text-gray-300"
                    size={24}
                  />
                  Sign out
                </DropdownItem>
              </li>
            </ul>
            {/* <Menu mode="vertical">
              <MenuItem className=" flex items-center gap-2 rounded-lg text-sm text-gray-700 px-3 py-2 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700">
                <UserIcon
                  className="fill-gray-500 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                  width={20}
                  height={20}
                />
                <span>Edit profile</span>
              </MenuItem>

              <MenuItem className=" rounded-lg text-sm text-gray-700 px-3 py-2 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700">
                <AccountSettingsIcon
                  width={24}
                  height={24}
                  viewBox="0 0 20 24"
                />
                <span> Account Settings</span>
              </MenuItem>
              <MenuItem className=" rounded-lg text-sm text-gray-700 px-3 py-2 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700">
                <UserIcon width={24} height={24} viewBox="0 0 20 24" />
                <span>Support</span>
              </MenuItem>
              <MenuItem
                className="group rounded-lg text-sm text-gray-700 px-3 py-2 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700"
                type="divider"
              >
                <UserIcon width={24} height={24} viewBox="0 0 20 24" />
                <span>Sign out</span>
              </MenuItem>
            </Menu> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
