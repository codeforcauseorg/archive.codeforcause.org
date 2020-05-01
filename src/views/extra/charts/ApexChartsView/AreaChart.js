import React from 'react';
import Chart from 'react-apexcharts';
import {
  Card,
  CardContent,
  Typography,
  useTheme
} from '@material-ui/core';

function AreaChart() {
  const theme = useTheme();

  const data = {
    options: {
      chart: {
        background: theme.palette.background.paper,
        toolbar: {
          show: false
        }
      },
      colors: ['#13affe', '#fbab49'],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: theme.palette.divider,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      legend: {
        show: true,
        labels: {
          colors: theme.palette.text.secondary
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '40%'
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      theme: {
        mode: theme.palette.type
      },
      tooltip: {
        theme: theme.palette.type
      },
      xaxis: {
        axisBorder: {
          show: true,
          color: theme.palette.divider
        },
        axisTicks: {
          show: true,
          color: theme.palette.divider
        },
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: {
        axisBorder: {
          show: true,
          color: theme.palette.divider
        },
        axisTicks: {
          show: true,
          color: theme.palette.divider
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      }
    },
    series: [
      {
        name: 'This week',
        data: [30, 40, 25, 50, 49, 21, 70, 51]
      },
      {
        name: 'Last week',
        data: [23, 12, 54, 61, 32, 56, 81, 19]
      }
    ]
  };

  return (
    <Card>
      <CardContent>
        <Typography
          variant="h4"
          color="textPrimary"
        >
          Sales
        </Typography>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height="300"
        />
      </CardContent>
    </Card>
  );
}

export default AreaChart;
