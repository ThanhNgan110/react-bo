interface TableHeadProps {
  columns: string[]
}

const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            scope="col"
            className="px-5 py-3 font-medium text-theme-xs"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
