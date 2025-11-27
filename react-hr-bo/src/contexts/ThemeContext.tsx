import React from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import type { Theme } from '../types'

interface ThemeConTextProps {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeConTextProps>({
  theme: 'light',
  toggleTheme: () => {},
})

export const ThemProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = React.useState<Theme>(
    (getLocalStorage('colorTheme') as Theme) || 'light'
  )

  const toggleTheme = () => {
    const colorTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(colorTheme)
    window.localStorage.clear()
    setLocalStorage('colorTheme', colorTheme)
  }

  React.useEffect(() => {
    const root = document.documentElement

    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => React.useContext(ThemeContext)
