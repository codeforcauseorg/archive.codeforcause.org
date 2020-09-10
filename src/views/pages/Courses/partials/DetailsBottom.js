import React from 'react';
import { Grid, Typography, Box, Hidden} from '@material-ui/core';


export default function DetailsBottom({ course, bottom }) {
  return (
    <Grid
      container
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        align="left"
        display="flex"
        justifyContent="left"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h3"
            align="left"
            color="secondary"
            style={{
              marginBottom: '16px'
            }}
          >
            {course.domain}
          </Typography>

          <Typography
            variant="h2"
            align="left"
            style={{
              marginBottom: '24px'
            }}
          >
            {course.title}
          </Typography>

          <Box
            display="flex"
            flexDirection="row"
            style={{
              marginBottom: '8px'
            }}
          >
            <Typography
              style={{
                marginRight: '24px'
              }}
            >
              Duration
            </Typography>
            <Typography>{course.duration}</Typography>
          </Box>

          <Box mb={2}
            display="flex"
            flexDirection="row"
            
          >
            <Typography
              style={{
                marginRight: '48px',
                color: '#0085FF'
              }}
              variant="body1"
            >
              {course.difficulty}
            </Typography>
            <Typography variant="body1">{course.level}</Typography>
          </Box>

          <Hidden smDown>
          <Box
            display="flex"
            flexDirection="row"
            
          >
            {course.tags.map((tag, index) => (
              <div
                style={{
                  margin: '4px 16px 4px 0px',
                  padding: '4px 8px',
                  border: '1px solid',
                  borderColor: '#A60000',
                  borderRadius: '5px'
                }}
                variant="outlined"
              >
                <Typography color="secondary" variant="body2">
                  {tag}
                </Typography>
              </div>
            ))}
          </Box> 
          </Hidden>         
        </Box>
        
      </Grid>
    </Grid>
  );
}
