import Chart from 'react-apexcharts'
import React from 'react'
import { EllipsisVertical } from 'lucide-react'
import type { ApexOptions } from 'apexcharts'

// components
import { SimpleCard } from '../../molecules/Card'
import DropdownItem from '../../atoms/DropdownItem'
import { Popover } from '../../molecules/Popover'
import Button from '../../atoms/Button'
import { useTheme } from '../../../contexts/ThemeContext'

const ResumeStatistics = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const { theme } = useTheme()

  const options: ApexOptions = {
    colors: ['#465FFF'],
    chart: {
      fontFamily: 'Outfit, sans-serif',
      type: 'radialBar',
      height: 330,
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: '80%',
        },
        track: {
          background: '#E4E7EC',
          strokeWidth: '100%',
          margin: 5, // margin is in pixels
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '36px',
            fontWeight: '600',
            offsetY: -40,
            color: theme === 'dark' ? '#fff' : '#1D2939',
            formatter: function (val) {
              return val + '%'
            },
          },
        },
      },
    },
    fill: {
      type: 'solid',
      colors: ['#465FFF'],
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  }
  const series = [70]

  const handleClose = () => {
    setIsOpen(false)
  }
  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SimpleCard
        title="Resume Statistics"
        subTitle="Target you’ve set for each month"
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
        <div className="relative">
          <Chart
            options={options}
            series={series}
            type="radialBar"
            height={330}
          />
          <span className="absolute left-1/2 top-18 -translate-x-1/2 -translate-y-[95%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
            +10%
          </span>
        </div>
        <p className="mt-0 text-center text-sm text-gray-400 md:text-base">
          {' '}
          You received 20 CV monthly, it's higher than last month
        </p>

        <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
          <div>
            <p className="mb-1 text-center text-theme-xs sm:text-sm text-success-600 dark:text-success-500">
              Approved
            </p>
            <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
              10
            </p>
          </div>

          <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

          <div>
            <p className="mb-1 text-center text-theme-xs dark:text-error-400 sm:text-sm text-error-600 dark:text-error-500">
              Rejected
            </p>
            <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
              5
            </p>
          </div>

          <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

          <div>
            <p className="mb-1 text-center text-warning-600 dark:text-orange-400 text-theme-xs sm:text-sm">
              Pending
            </p>
            <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
              3
            </p>
          </div>
        </div>
      </SimpleCard>
    </>
  )
}

export default ResumeStatistics
