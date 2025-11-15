export interface ApiResponse<T = unknown> {
  isSucess?: boolean
  msg?: string
  data?: T | null
}

export interface IUser {
  first_name: string
  last_name: string
  email: string
  address: string
  city: string
  country: string
  state: string
  role: 'user' | 'admin'
  password: string
}
