export const API_URL = 'https://tony-auth-express-vdee.vercel.app/'

export const STATUS = {
  NEW: 'New',
  PENDING_APPROVED: 'Pending Approved',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
}

export const USER_ROLE = {
  ADMIN: 'Admin',
  OPERATOR: 'Operator',
  MEMBER: 'Member',
}

export const PATH = {
  ROOT: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  REGISTER: '/register',
  EMPLOYEE_LIST: '/employee/list',
  EMPLOYEE_CREATE: '/employee/create',
  EMPLOYEE_EDIT: '/employee/edit/:_id',
  EMPLOYEE_SHOW: '/employee/show/:_id',
  NOT_FOUND: '/not-found',
}

export const REGEX_PASSWORD =
  /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).*$/

export const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
