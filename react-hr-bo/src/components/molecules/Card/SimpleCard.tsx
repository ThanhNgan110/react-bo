interface SimpleCardProps {
  className?: string
  title?: string
  subTitle?: string
  children?: React.ReactNode
}

const SimpleCard = ({ className, title, children }: SimpleCardProps) => {
  return (
    <div
      className={`border border-gray-200 rounded-2xl bg-white p-5 dark:bg-white/[0.03] md:p-6 ${className ?? ''}`}
    >
      {title && (
        <h3 className="text-lg font-semibold dark:text-white/90">{title}</h3>
      )}
      {children}
    </div>
  )
}

export default SimpleCard
