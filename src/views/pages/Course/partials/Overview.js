import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

export default function Overview({ course }) {
  return (
    <Grid
      container
      style={{
        marginBottom: '42px'
      }}
    >
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        align="center"
        display="flex"
        justify="center"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h3"
            align="left"
            style={{
              marginBottom: '16px'
            }}
          >
            Course Overview
          </Typography>

          {course.overview.map((paragraph, index) => {
            return (
              <Typography
                key={index}
                variant="body1"
                align="left"
                style={{
                  marginBottom: '16px',
                  color: '#606060'
                }}
              >
                <Box fontWeight={400} component={'span'} variant="body2">
                  {paragraph}
                </Box>
              </Typography>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
