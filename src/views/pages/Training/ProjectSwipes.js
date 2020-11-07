import { makeStyles, useMediaQuery } from '@material-ui/core';
import React from 'react';
import SwiperCore, { Controller, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from './ProjectCard';
import './swiperStyle.css';

SwiperCore.use([Navigation, Pagination, Controller]);

const projectSlides = [];

for (let i = 0; i < 6; i++) {
  projectSlides.push(
    <SwiperSlide key={`slide-${i}`} tag="li">
      <ProjectCard />
    </SwiperSlide>
  );
}

const useStyles = makeStyles(theme => ({
  swiper: {
    padding: theme.spacing(10, 0, 8)
  }
}));

export default function ProjectSwipes() {
  const classes = useStyles();
  const xxl = useMediaQuery('(min-width:1800px)');
  const xlarge = useMediaQuery('(min-width:1600px)');
  const large = useMediaQuery('(min-width:1200px)');
  const medium = useMediaQuery('(min-width:900px)');
  const small = useMediaQuery('(min-width:600px)');

  return (
    <Swiper
      id="main"
      navigation={true}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={
        xxl ? 4.2 : xlarge ? 3.8 : large ? 3.1 : medium ? 2.3 : small ? 1.2 : 1
      }
      slidesPerGroup={1}
      className={classes.swiper}
    >
      {projectSlides}
    </Swiper>
  );
}
