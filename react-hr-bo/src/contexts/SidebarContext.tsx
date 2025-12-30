import React from 'react'

interface SidebarContextProps {
  isExpanded: boolean
  isMobile: boolean
  isMobileOpen: boolean
  isHovered: boolean
  isActived:boolean
  toggleSidebar: () => void
  toggleMobileSidebar: () => void
  setIsHovered: (isHovered: boolean) => void
  toggleActive: () => void
}

const SidebarContext = React.createContext<SidebarContextProps>({
  isExpanded: true,
  isMobile: false,
  isMobileOpen: false,
  isHovered: false,
  isActived: false,
  toggleSidebar: () => {},
  toggleMobileSidebar: () => {},
  setIsHovered: () => {},
  toggleActive: () => {},
})

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  const [isExpanded, setIsExpanded] = React.useState(true)
  const [isMobile, setIsMobile] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)
  const [isActived, setIsActived] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (mobile) {
        setIsExpanded(false)
        setIsMobileOpen(false)
      }

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
  const toggleActive = () =>  setIsActived(true)

  const value = React.useMemo(
    () => ({
      isExpanded: isMobile ? false : isExpanded,
      isMobile,
      isMobileOpen,
      isHovered,
      isActived,
      toggleSidebar,
      toggleMobileSidebar,
      setIsHovered,
      toggleActive
    }),
    [isExpanded, isHovered, isMobile, isMobileOpen, isActived]
  )

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => React.useContext(SidebarContext)
