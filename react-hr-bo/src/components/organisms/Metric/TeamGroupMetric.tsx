import React from 'react'
import type { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'
import { EllipsisVertical } from 'lucide-react'

import { getApi } from '../../../services'
import type { ApiResponse, IMember } from '../../../types'

//components
import { Popover } from '../../molecules/Popover'
import DropdownItem from '../../atoms/DropdownItem'
import Button from '../../atoms/Button'
import { SimpleCard } from '../../molecules/Card'

const TeamGroupMetric = () => {
  const [labels, setLabels] = React.useState<string[]>([])
  const [series, setSeries] = React.useState<number[]>([])
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const getMemberByTeam = React.useCallback(async () => {
    const res = await getApi<ApiResponse<IMember[]>>('api/member')
    const { isSuccess, data } = res || {}

    if (isSuccess && data) {
      const group = (data as IMember[]).reduce<Record<string, number>>(
        (acc, item) => {
          acc[item.team] = (acc[item.team] ?? 0) + 1
          return acc
        },
        {}
      )
      setLabels(Object.keys(group))
      setSeries(Object.values(group))
    }
  }, [])

  React.useEffect(() => {
    getMemberByTeam()
  }, [getMemberByTeam])

  const options: ApexOptions = {
    labels,
    legend: { position: 'right' },
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  const toggleDropDown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <SimpleCard
        title="Group member by Team"
        action={
          <div className="relative">
            <Button
              className="dropdown-toggle"
              sizes="default"
              variant="none"
              onClick={toggleDropDown}
              icon={
                <EllipsisVertical className="cursor-pointer text-gray-400" />
              }
            />
            <Popover
              isOpen={isOpen}
              onClose={handleClose}
              className="absolute z-40 top-8 right-0 mt-2 w-[170px] p-3 border-gray-200 rounded-2xl dark:bg-gray-700"
            >
              {isOpen === true && (
                <div className="flex flex-col">
                  <DropdownItem className="text-left px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/10 dark:border-gray-800 dark:text-gray-300 dark:hover:text-white">
                    View More
                  </DropdownItem>
                  <DropdownItem className="text-left px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/10 dark:text-gray-300 dark:hover:text-white">
                    Delete
                  </DropdownItem>
                </div>
              )}
            </Popover>
          </div>
        }
      >
        <Chart
          options={options}
          series={series}
          type="pie"
          width={380}
          height={300}
        />
      </SimpleCard>
    </>
  )
}

export default TeamGroupMetric
