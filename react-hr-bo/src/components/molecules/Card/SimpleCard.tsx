interface SimpleCardProps {
  className?: string
  title?: string
  subTitle?: string
  children?: React.ReactNode
  action?: React.ReactNode
}

const SimpleCard = ({
  className,
  title,
  subTitle,
  action,
  children,
}: SimpleCardProps) => {
  return (
    <div
      className={`border border-gray-200 rounded-2xl bg-white p-5 dark:bg-white/[0.03] md:p-6 dark:border-gray-800${className ?? ''}`}
    >
      <div className="flex flex-row justify-between items-center">
        {(title || subTitle) && (
          <>
            {title && (
              <h3 className="text-lg font-semibold dark:text-white/90">
                {title}
              </h3>
            )}
          </>
        )}

        {action ?? ''}
      </div>
      {subTitle && <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">{subTitle}</p>}

      {children}
    </div>
  )
}

export default SimpleCard
