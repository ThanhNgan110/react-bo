// components
import Button from '../../atoms/Button'
import {
  BellIcon,
  MoonIcon,
  NavigationIcon,
  SearchIcon,
} from '../../atoms/Icon'
import Input from '../../atoms/Input'
import Avatar from '../../molecules/Avatar'

const Header = () => {
  return (
    <header className="w-ful flex justify-between">
      <div className="flex justify-center items-center gap-3">
        <Button
          className="rounded-lg bg-white sm:border-none md:border-4 md:border-gray-500 dark:lg:border-gray-800 p-2"
          type="button"
          variant="secondary"
          icon={<Avatar className="text-gray-500" icon={<NavigationIcon />} />}
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
      <div className="flex justify-center items-center gap-5">
        <div className="flex gap-4">
          <Button
            className="bg-white border border-gray-200 !rounded-full dark:lg:border-gray-800 p-2"
            type="button"
            variant="secondary"
            icon={<MoonIcon className="text-gray-500" />}
          />
          <Button
            className="bg-white border border-gray-200 !rounded-full dark:lg:border-gray-800 p-2"
            type="button"
            variant="secondary"
            icon={<BellIcon className="text-gray-500" />}
          />
        </div>
        <div className="flex items-center gap-2">
          <Avatar
            className="w-11 h-11 rounded-full cursor-pointer"
            src="https://avatars.steamstatic.com/009d272e2b496aa0758a86a17eac5f7716a99133_full.jpg"
            alt="avatar"
          />
          <span className="text-gray-700 text-theme-sm">ngan@gmail.com</span>
        </div>
      </div>
    </header>
  )
}

export default Header
