import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

//templates
const Template1 = React.lazy(() =>
  import('./layouts/template1/Template1').then((module) => ({
    default: module.default,
  }))
)

import { PATH } from './configs'

// routes
import ProtectedRoute from './routes/ProtectedRoute'
import AuthRoute from './routes/AuthRoute'
import { Spinner } from './components/molecules/Spinner'
import { RoleRoute } from './routes/RoleRoute'

//pages
const NotFound = React.lazy(() =>
  import('./pages/Errors/NotFound').then((module) => ({
    default: module.default,
  }))
)

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

  const routeConfig = [
    {
      path: PATH.DASHBOARD,
      component: Dashboard,
      guard: ProtectedRoute,
      template: Template,
      requireRole: ['admin', 'operator'],
    },
    {
      path: PATH.LOGIN,
      component: Login,
      guard: AuthRoute,
    },
    {
      path: PATH.REGISTER,
      component: Register,
      guard: AuthRoute,
    },
    {
      path: PATH.EMPLOYEE_LIST,
      component: EmployeeList,
      guard: ProtectedRoute,
      template: Template,
      requireRole: ['admin', 'operator'],
    },
    {
      path: PATH.EMPLOYEE_CREATE,
      component: EmployeeCreate,
      guard: ProtectedRoute,
      template: Template,
      requireRole: ['admin', 'operator'],
    },
    {
      path: PATH.EMPLOYEE_EDIT,
      component: EmployeeEdit,
      guard: ProtectedRoute,
      template: Template,
      requireRole: ['admin', 'operator'],
    },
    {
      path: PATH.EMPLOYEE_SHOW,
      component: EmployeeShow,
      guard: ProtectedRoute,
      template: Template,
      requireRole: ['admin', 'operator'],
    },
    {
      path: PATH.NOT_FOUND,
      component: NotFound,
    },
  ]

  return (
    <>
      <Spinner />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={PATH.ROOT} element={<Navigate to={'/dashboard'} />} />
          {routeConfig.map((route) => {
            const Guard = route?.guard || React.Fragment
            const TemplateComp = route?.template || React.Fragment
            const Component = route?.component || React.Fragment
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Guard>
                    <TemplateComp>
                      {route?.requireRole ? (
                        <RoleRoute requireRole={route.requireRole}>
                          <Component />
                        </RoleRoute>
                      ) : (
                        <Component />
                      )}
                    </TemplateComp>
                  </Guard>
                }
              />
            )
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
