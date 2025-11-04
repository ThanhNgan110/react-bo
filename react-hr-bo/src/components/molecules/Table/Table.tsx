import TableHead from '../../atoms/TableHead/TableHead'

interface TableProps<T> {
  className?: string
  columns: string[]
  dataSource: T[]
  renderBody: (data: T, index: number) => React.ReactNode
}

const Table = <T,>({
  className,
  columns,
  dataSource,
  renderBody,
}: TableProps<T>) => {
  return (
    <table className={className}>
      <TableHead columns={columns} />
      <tbody className="divide-y divide-gray-300">
        {dataSource.map((item, index) => renderBody(item, index))}
      </tbody>
    </table>
  )
}

export default Table
