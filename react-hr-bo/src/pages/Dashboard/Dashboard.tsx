import { FileUser } from 'lucide-react'

// components
import { SimpleCard } from '../../components/molecules/Card'
import AverageResumeMetric from '../../components/organisms/Metric/AverageResumeMetric'
import ResumeStatistics from '../../components/organisms/Metric/ResumeStatistics'

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <SimpleCard>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-6 dark:bg-gray-800">
                <FileUser className="text-gray-900 dark:text-white/90" />
              </div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">
                Resume
              </h4>
              <div className="flex justify-between items-center gap-5">
                <p className="mt-2 text-title-sm font-semibold dark:text-white">
                  10
                </p>
                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-sm bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500 ">
                  <svg
                    className="fill-current"
                    width="1em"
                    height="1em"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.06462 1.62393C6.20193 1.47072 6.40135 1.37432 6.62329 1.37432C6.6236 1.37432 6.62391 1.37432 6.62422 1.37432C6.81631 1.37415 7.00845 1.44731 7.15505 1.5938L10.1551 4.5918C10.4481 4.88459 10.4483 5.35946 10.1555 5.65246C9.86273 5.94546 9.38785 5.94562 9.09486 5.65283L7.37329 3.93247L7.37329 10.125C7.37329 10.5392 7.03751 10.875 6.62329 10.875C6.20908 10.875 5.87329 10.5392 5.87329 10.125L5.87329 3.93578L4.15516 5.65281C3.86218 5.94561 3.3873 5.94546 3.0945 5.65248C2.8017 5.35949 2.80185 4.88462 3.09484 4.59182L6.06462 1.62393Z"
                      fill=""
                    ></path>
                  </svg>
                  11.01%
                </span>
              </div>
            </SimpleCard>

            <SimpleCard>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-6 dark:bg-gray-800">
                <FileUser className="text-gray-900 dark:text-white/90" />
              </div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">
                Total Employee
              </h4>
              <div className="flex justify-between items-center gap-5">
                <p className="mt-2 text-title-sm font-semibold dark:text-white">
                  5,359
                </p>
                <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-sm bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500 ">
                  <svg
                    className="fill-current"
                    width="1em"
                    height="1em"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.06462 1.62393C6.20193 1.47072 6.40135 1.37432 6.62329 1.37432C6.6236 1.37432 6.62391 1.37432 6.62422 1.37432C6.81631 1.37415 7.00845 1.44731 7.15505 1.5938L10.1551 4.5918C10.4481 4.88459 10.4483 5.35946 10.1555 5.65246C9.86273 5.94546 9.38785 5.94562 9.09486 5.65283L7.37329 3.93247L7.37329 10.125C7.37329 10.5392 7.03751 10.875 6.62329 10.875C6.20908 10.875 5.87329 10.5392 5.87329 10.125L5.87329 3.93578L4.15516 5.65281C3.86218 5.94561 3.3873 5.94546 3.0945 5.65248C2.8017 5.35949 2.80185 4.88462 3.09484 4.59182L6.06462 1.62393Z"
                      fill=""
                    ></path>
                  </svg>
                  11.01%
                </span>
              </div>
            </SimpleCard>
          </div>

          <AverageResumeMetric />
        </div>
        <div className="col-span-12 xl:col-span-5 ">
          <ResumeStatistics />
        </div>
      </div>
    </>
  )
}

export default Dashboard
