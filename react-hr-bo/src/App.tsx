import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

//templates
import Template1 from './layouts/template1/Template1'

import { PATH } from './configs'

// routes
import ProtectedRoute from './routes/ProtectedRoute'
import AuthRoute from './routes/AuthRoute'

//pages
const Login = React.lazy(() =>
  import('./pages/Login').then((module) => ({ default: module.default }))
)
const Register = React.lazy(() =>
  import('./pages/Register').then((module) => ({ default: module.default }))
)
const EmployeeCreate = React.lazy(() =>
  import('./pages/Employee/Create').then((module) => ({
    default: module.default,
  }))
)
const EmployeeEdit = React.lazy(() =>
  import('./pages/Employee/Edit').then((module) => ({
    default: module.default,
  }))
)
const EmployeeList = React.lazy(() =>
  import('./pages/Employee/List').then((module) => ({
    default: module.default,
  }))
)
const EmployeeShow = React.lazy(() =>
  import('./pages/Employee/Show').then((module) => ({
    default: module.default,
  }))
)
const Dashboard = React.lazy(() =>
  import('./pages/Dashboard/Dashboard').then((module) => ({
    default: module.default,
  }))
)

function App() {
  const user = {
    company: 'A',
  }

  let Template = Template1

  switch (user.company) {
    case 'A':
      Template = Template1

      break

    default:
      break
  }

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={PATH.ROOT} element={<Navigate to={'/dashboard'} />} />
          <Route
            path={PATH.DASHBOARD}
            element={
              <ProtectedRoute>
                <Template>
                  <Dashboard />
                </Template>
              </ProtectedRoute>
            }
          />
          <Route
            path={PATH.LOGIN}
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path={PATH.REGISTER}
            element={
              <AuthRoute>
                <Register />
              </AuthRoute>
            }
          />
          <Route
            path={PATH.EMPLOYEE_LIST}
            element={
              <ProtectedRoute>
                <Template>
                  <EmployeeList />
                </Template>
              </ProtectedRoute>
            }
          />
          <Route
            path={PATH.EMPLOYEE_CREATE}
            element={
              <ProtectedRoute>
                <Template>
                  <EmployeeCreate />
                </Template>
              </ProtectedRoute>
            }
          />
          <Route
            path={PATH.EMPLOYEE_EDIT}
            element={
              <ProtectedRoute>
                <Template>
                  <EmployeeEdit />
                </Template>
              </ProtectedRoute>
            }
          />
          <Route
            path={PATH.EMPLOYEE_SHOW}
            element={
              <ProtectedRoute>
                <Template>
                  <EmployeeShow />
                </Template>
              </ProtectedRoute>
            }
          />
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
