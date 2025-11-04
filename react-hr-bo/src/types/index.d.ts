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
