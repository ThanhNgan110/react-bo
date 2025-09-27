import { clsx } from 'clsx'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
  htmlFor?: string
}

const Label: React.FC<LabelProps> = ({
  className,
  htmlFor,
  children,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        'mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400',
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}

export default Label
