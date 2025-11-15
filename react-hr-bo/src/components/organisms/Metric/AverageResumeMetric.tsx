import Chart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'

const AverageResumeMetric = () => {
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

  return <Chart options={options} series={series} type="bar" height={300} />
}

export default AverageResumeMetric
