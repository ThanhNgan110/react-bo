import React from 'react'

interface SidebarContextProps {
  isExpanded: boolean
  isMobile: boolean
  isMobileOpen: boolean
  isHovered: boolean
  toggleSidebar: () => void
  toggleMobileSidebar: () => void
  setIsHovered: (isHovered: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextProps>({
  isExpanded: true,
  isMobile: false,
  isMobileOpen: false,
  isHovered: false,
  toggleSidebar: () => {},
  toggleMobileSidebar: () => {},
  setIsHovered: () => {},
})

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  const [isExpanded, setIsExpanded] = React.useState(true)
  const [isMobile, setIsMobile] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsMobile(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => setIsExpanded((prev) => !prev)
  const toggleMobileSidebar = () => setIsMobileOpen((prev) => !prev)

  return (
    <SidebarContext.Provider
      value={{
        isExpanded,
        isMobile,
        isMobileOpen,
        isHovered,
        toggleSidebar,
        toggleMobileSidebar,
        setIsHovered,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => React.useContext(SidebarContext)
