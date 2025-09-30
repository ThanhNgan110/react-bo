import type { ComponentType, SVGProps } from 'react'

export interface IMenuItem {
  label: string
  icon: ComponentType<SVGProps>
  type?: 'divider'
}
