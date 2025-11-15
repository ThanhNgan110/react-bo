import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// styles
import './styles/tailwind.css'
import './styles/index.css'

import App from './App.tsx'
import { SidebarProvider } from './contexts/SidebarContext.tsx'
import { initRequest } from './services/initRequest.ts'

initRequest()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <ToastContainer />
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
)
