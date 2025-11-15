export type TVariants = 'primary' | 'outlined' | 'secondary' | 'none'
export interface IMenuItem {
  name: string
  icon: React.ReactNode
  path: string
}

export type TOption = {
  label: string
  value: string
}

export interface IFormInput {
  first_name: string
  last_name: string
  email: string
  password: string
}
