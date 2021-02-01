import React from 'react';
import { Grid, Typography, Box, Avatar } from '@material-ui/core';

import { members } from 'src/data/Members';

export default function Details({ course, bottom }) {
  return (
    <Grid
      container
      style={{
        marginBottom: '42px'
      }}
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
            <Typography
              style={{
                marginRight: '24px'
              }}
            >
              {course.duration}
            </Typography>
            <Typography>Hindi</Typography>
          </Box>
          <Box mb={2} display="flex" flexDirection="row">
            <Typography
              style={{
                marginRight: '24px'
              }}
            >
              Price
            </Typography>
            <Typography
              style={{
                margin: '0px 16px 0px 29px',
                color: '#939393',
                textDecoration: 'line-through'
              }}
            >
              {course.schedule[0].priceCut}
            </Typography>

            <Typography
              style={{
                color: '#A60000'
              }}
              variant="h4"
            >
              {course.schedule[0].price}
            </Typography>
          </Box>
          <Box mb={2} display="flex" flexDirection="row">
            <Typography
              style={{
                marginRight: '24px',
                color: '#0085FF'
              }}
              variant="body1"
            >
              {course.difficulty}
            </Typography>
          </Box>

          <Box mb={4} display="flex" flexDirection="row" flexWrap="wrap">
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
        </Box>

        <Box mb={4}>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            {course.mentors.map((mentor, index) => {
              return (
                <Box m={2} display="flex" flexDirection="row">
                  <Avatar
                    style={{
                      width: '64px',
                      height: '64px'
                    }}
                    src={members[mentor].avatar}
                  />

                  <Box
                    ml={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Typography noWrap={true}>
                      <Box fontWeight={500}>{members[mentor].name}</Box>
                    </Typography>
                    <Typography variant="body2">
                      <Box fontWeight={300}>{members[mentor].position}</Box>
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
