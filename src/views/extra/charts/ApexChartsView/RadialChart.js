import React from 'react';
import Chart from 'react-apexcharts';
import {
  Card,
  CardContent,
  Typography,
  useTheme
} from '@material-ui/core';

function RadialChart() {
  const theme = useTheme();

  const data = {
    options: {
      chart: {
        background: theme.palette.background.paper,
        stacked: false,
        toolbar: {
          show: false
        },
        zoom: false
      },
      colors: ['#27c6db'],
      labels: ['System Health'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          },
          dataLabels: {
            name: {
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.primary
            },
            value: {
              color: theme.palette.text.secondary
            }
          },
          track: {
            background: theme.palette.background.dark
          }
        }
      },
      theme: {
        mode: theme.palette.type
      }
    },
    series: [83]
  };

  return (
    <Card>
      <CardContent>
        <Chart
          options={data.options}
          series={data.series}
          type="radialBar"
          height="300"
        />
        <Typography
          align="center"
          color="textSecondary"
          variant="caption"
          component="p"
        >
          This shouldn&apos;t be bellow 80%
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RadialChart;
