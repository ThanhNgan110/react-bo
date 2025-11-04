import TableHead from '../../atoms/TableHead/TableHead'

interface TableProps {
  className?: string
  columns: string[]
  dataSource: any
  renderBody: (data, index) => React.ReactNode
}

const Table = ({ className, columns, dataSource, renderBody }: TableProps) => {
  return (
    <table className={className}>
      <TableHead columns={columns} />
      <tbody className="divide-y divide-gray-300">
        {dataSource.map(renderBody)}
      </tbody>
    </table>
  )
}

export default Table
