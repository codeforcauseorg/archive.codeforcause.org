import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

export default function Overview({ course }) {
  return (
    <Grid container style={{
      marginBottom: '42px'
    }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        align="center"
        display="flex"
        justifyContent="center"
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

          {course.overview.map((paragraph, index) =>{
            return (<Typography
              variant="body1"
              align="left"
              style={{
                marginBottom: '16px'
              }}
            >
              {paragraph}
            </Typography>);
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
