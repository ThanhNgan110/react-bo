interface TableHeadProps {
  columns: string[]
  className?: string
}

const TableHead = ({ columns, className }: TableHeadProps) => {
  return (
    <thead
      className={`text-xs text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 ${className}`}
    >
      <tr>
        {columns.map((column, index) => (
          <th key={index} className="p-4">
            <p className="font-medium text-theme-xs">{column}</p>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
