import { useState } from 'react'

// components
import Button from '../../atoms/Button'
import {
  AccountSettingsIcon,
  BellIcon,
  DropdownIcon,
  MoonIcon,
  NavigationIcon,
  SearchIcon,
  UserIcon,
} from '../../atoms/Icon'
import Input from '../../atoms/Input'
import Avatar from '../../molecules/Avatar'
import Menu from '../../molecules/Menu'
import MenuItem from '../../molecules/MenuItem'

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
              className="mr-2 fill-gray-500 dark:fill-gray-400"
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
            className="bg-white border border-gray-200 rounded-full dark:border-gray-800 p-2"
            type="button"
            variant="secondary"
            icon={<MoonIcon className="text-gray-500" />}
          />
          <Button
            className="bg-white border border-gray-200 rounded-full dark:border-gray-800 p-2"
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

          {/* <div className="absolute right-0 top-12 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="px-4 py-2">
              <p className="text-sm font-medium">Musharof Chowdhury</p>
              <p className="text-xs text-gray-500">randomuser@pimjo.com</p>
            </div>
            <ul className="py-2 text-sm">
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                Edit profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                Account Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                Support
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                Sign out
              </li>
            </ul>
          </div> */}

          <div className="absolute w-55 px-2 py-1 right-0 top-12 rounded-lg bg-white shadow-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
            <div className="px-4 py-5">
              <p className="text-sm font-medium">Musharof Chowdhury</p>
              <p className="text-gray-500">randomuser@pimjo.com</p>
            </div>
            <Menu mode="vertical">
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
            </Menu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
