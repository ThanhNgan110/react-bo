# HR Dashboard – React + TypeScript

A starter **React HR Dashboard** project built with TypeScript.  
It implements modern patterns for authentication, routing, state management, error handling, and UI.  


## 📖 Overview

This repository for building a **HR Dashboard** with best practices:  

- Authentication with access & refresh tokens  
- Role based access control(RBAC) define roles and assigning permisions to those role and handle logic show Ui by user role
- Axios interceptor for token refresh  
- Redux Toolkit for state  
- Dynamic layouts  
- Forms with validation with react hook form + toast notifications  
- Charts using **ApexCharts**  for show member by team
- Responsive screen on devices
- Example CRUD: Login, Register, and modules Employee
- Optimate performance use hooks: useMemo, memo, useCallBack
- Code splitting, lazy load module, suspense
---

## ✨ Features

- **Auth**: login, logout, refresh token handling  
- **Forms**: `react-hook-form` + validation  
- **Toasts**: notifications with `react-toastify`  
- **ProtectedRoute**: restricts pages to logged-in users  
- **AuthRoute**: prevents logged-in users from re-visiting login/register  
- **Axios interceptor**: queues failed requests, retries after refresh  
- **Redux Toolkit**: slice for user,
- **Employees Module**: creat, list, update, edit for role admin, operator
- **Charts**:display members pie chart by teams
- **Layouts**: `AuthLayout` (login/register) & `DashboardLayout` (main app)
- Optimate performance hook use useMemo, memo, useCallBack

---

🚀 Quickstart
1. Clone repository
git clone https://github.com/ThanhNgan110/react-bo.git
cd react-hr-bo

2. Switch to develop branch
git checkout develop

3. Install dependencies
npm install
# or
yarn install
