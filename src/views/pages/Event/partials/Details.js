/* eslint-disable linebreak-style */
import React from 'react';
import {
  Grid,
  Typography,
  Box,
  ListItem,
  List,
  ListItemText
} from '@material-ui/core';
import ApplyModal from '../ApplyModal';

export default function Details({ course }) {
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
        align="left"
        display="flex"
        justify="flex-start"
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
              {course.duration}{' '}
              {/* The default duration is set to 0th index of schedule */}
            </Typography>
            <Typography>{course.language}</Typography>
          </Box>
          <Box mb={2} display="flex" flexDirection="row">
            <Typography
              style={{
                marginRight: '24px'
              }}
            >
              Prizes worth
            </Typography>

            <Typography
              style={{
                color: '#A60000'
              }}
              variant="h4"
            >
              {course.prizeMoney}
            </Typography>
          </Box>
          <Typography
            style={{
              color: '#000000'
            }}
            variant="body1"
          >
            Code for Cause in collaboration with Elastic is bringing you Elastic
            Weekend + Hackathon!
          </Typography>

          <Typography
            style={{
              color: '#000000'
            }}
            variant="body1"
          >
            Learn about:
          </Typography>

          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemText primary="➡ Building Search Engines" />
            </ListItem>
            <ListItem>
              <ListItemText primary={`➡ DevOps & Security`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`➡ Data Science`} />
            </ListItem>
          </List>

          <Typography
            style={{
              color: '#000000'
            }}
            variant="body1"
          >
            Hackathon winners will get prizes worth INR 1 lakh, including iPad,
            PS4, mobile phones, premium headphones, accessories, and more!
          </Typography>
          <Box mb={2} display="flex" flexDirection="row" paddingTop="10px">
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
                key={index}
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
          <ApplyModal course={course} />
        </Box>
      </Grid>
    </Grid>
  );
}
