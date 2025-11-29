export type TVariants = 'primary' | 'outlined' | 'secondary' | 'none'

export type Theme = 'light' | 'dark'
export interface IMenuItem {
  name: string
  icon: React.ReactNode
  path: string
}

export type TOption = {
  label: string
  value: string
}

export interface IUser {
  first_name: string
  last_name: string
  email: string
  password: string
}

export interface IMember{
  _id: string
  avatar: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dob: string
  dateJoin: string
  address: string
  district: string
  city: string
  nationality: string
  gender: string
  country: string
  state: string
  bio: string
  role: string
  team: string
  position: string
}
