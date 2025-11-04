import { Navigate, Route, Routes } from 'react-router-dom'
import Template1 from './layouts/template1/Template1'

import { PATH } from './configs'

//pages
import Login from './pages/Login'
import Register from './pages/Register'
import {
  EmployeeCreate,
  EmployeeEdit,
  EmployeeList,
  EmployeeShow,
} from './pages/Employee'
import Dashboard from './pages/Dashboard/Dashboard'

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
      <Routes>
        <Route path={PATH.ROOT} element={<Navigate to={'/dashboard'} />} />
        <Route
          path={PATH.DASHBOARD}
          element={
            <Template>
              <Dashboard />
            </Template>
          }
        />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTER} element={<Register />} />
        <Route
          path={PATH.EMPLOYEE_LIST}
          element={
            <Template>
              <EmployeeList />
            </Template>
          }
        />
        <Route
          path={PATH.EMPLOYEE_CREATE}
          element={
            <Template>
              <EmployeeCreate />
            </Template>
          }
        />
        <Route
          path={PATH.EMPLOYEE_EDIT}
          element={
            <Template>
              <EmployeeEdit />
            </Template>
          }
        />
        <Route
          path={PATH.EMPLOYEE_SHOW}
          element={
            <Template>
              <EmployeeShow />
            </Template>
          }
        />
      </Routes>
    </>
  )
}

export default App
