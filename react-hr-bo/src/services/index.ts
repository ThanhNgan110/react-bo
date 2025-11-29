export interface ApiResponse<T> {
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

export interface AuthData {
  access_token: string
  refresh_token: string
}