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

import { store } from './store.ts'
import { Provider } from 'react-redux'
import { ThemProvider } from './contexts/ThemeContext.tsx'

initRequest(store)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemProvider>
          <SidebarProvider>
            <ToastContainer />
            <App />
          </SidebarProvider>
        </ThemProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
