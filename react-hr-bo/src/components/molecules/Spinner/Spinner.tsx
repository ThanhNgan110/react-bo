import { useSelector } from 'react-redux'
import { SpinnerIcon } from '../../atoms/Icon'
import type { RootState } from '../../../store'

interface SpinnerProps {
  className?: string
  children?: React.ReactNode
}

const Spinner = ({ className }: SpinnerProps) => {
  const loading = useSelector((state: RootState) => state.users.loading)

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <SpinnerIcon
        className={`w-20 h-20 text-gray-100 animate-spin fill-brand ${className ?? ''}`}
        viewBox="0 0 100 101"
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner
