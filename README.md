# HR Dashboard – React + TypeScript

A starter **React HR Dashboard** project built with TypeScript.  
It implements modern patterns for authentication, routing, state management, error handling, and UI.  


## 📖 Overview

This repository provides a skeleton for building a **HR Dashboard** with best practices:  

- Authentication with access & refresh tokens  
- Role-based routes  
- Axios interceptor for token refresh  
- Redux Toolkit for state  
- Dynamic layouts (Auth vs Dashboard)  
- Lazy loading (React Suspense)  
- Error boundaries  
- Forms with validation + toast notifications  
- Charts using **ApexCharts**  
- Example CRUD modules: **Employees** & **Invoices**  

---

## ✨ Features

- **Auth**: login, logout, refresh token handling  
- **Forms**: `react-hook-form` + validation  
- **Toasts**: notifications with `react-toastify`  
- **ProtectedRoute**: restricts pages to logged-in users  
- **AuthRoute**: prevents logged-in users from re-visiting login/register  
- **Axios interceptor**: queues failed requests, retries after refresh  
- **Redux Toolkit**: slices for auth, employees, invoices  
- **Employees Module**: list, search, detail, edit, create  
- **Invoices Module**: list, create  
- **Charts**: integrated example using `react-apexcharts`  
- **Layouts**: `AuthLayout` (login/register) & `DashboardLayout` (main app)  
- **Error boundary**: catches runtime errors in React tree  

---

## 🚀 Quickstart

```bash
# Install dependencies
npm install
# or
yarn install

# Start dev server
npm run dev
# or
yarn dev
