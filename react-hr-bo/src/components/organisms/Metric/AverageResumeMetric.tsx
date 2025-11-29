import Chart from 'react-apexcharts'
import React from 'react'
import { EllipsisVertical } from 'lucide-react'
import type { ApexOptions } from 'apexcharts'

// components
import { SimpleCard } from '../../molecules/Card'
import DropdownItem from '../../atoms/DropdownItem'
import { Popover } from '../../molecules/Popover'
import Button from '../../atoms/Button'

const AverageResumeMetric = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const options: ApexOptions = {
    colors: ['#465fff'],
    chart: {
      type: 'line',
      fontFamily: 'Outfit, sans-serif',
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '39%',
        borderRadius: 5,
        borderRadiusApplication: 'end',
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'Outfit',
    },

    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
  const series = [
    {
      name: 'Salary',
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
  ]

  const handleClose = () => {
    setIsOpen(false)
  }
  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SimpleCard
        title="Average Resume Monthly"
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
              {isOpen === true ? (
                <div className="flex flex-col">
                  <DropdownItem className="text-left px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/10 dark:border-gray-800 dark:text-gray-300 dark:hover:text-white">
                    View More
                  </DropdownItem>
                  <DropdownItem className="text-left px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/10 dark:text-gray-300 dark:hover:text-white">
                    Delete
                  </DropdownItem>
                </div>
              ) : (
                <>fffff</>
              )}
            </Popover>
          </div>
        }
      >
        <Chart options={options} series={series} type="bar" height={300} />
      </SimpleCard>
    </>
  )
}

export default AverageResumeMetric
