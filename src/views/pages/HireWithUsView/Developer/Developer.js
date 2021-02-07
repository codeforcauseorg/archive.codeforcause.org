import React,{Component} from 'react';
import Devbox from './DevBox/index';
import classes from './Developer.module.css';
import { Typography } from '@material-ui/core';

class Developer extends Component{
  render(){

    return (

      <div>
        <div className={classes.Developer}>

        <div className={classes.Head}>
          <Typography variant="h2" className={classes.heading1}>The Making Of </Typography>
          <Typography variant="h1" className={classes.heading2}>The Fine Developer</Typography>
       </div>

          <div className={classes.Box}>
              <Devbox Img='Gold_Ribbon'/>
              <Devbox Img='Book_Icon'/>
              <Devbox Img='Thumbs_Up'/>
          </div>

          <div className={classes.Bottom}>
          <div className={classes.lastbox}><Devbox/></div>
            <div className={classes.BottomBox}>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ke Aldus PageMaker including versions of Lorem Ipsum elease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.
              </Typography>
            </div>
            <div className={classes.SideBox} />
          </div>

        </div>
        <div className={classes.Footer}></div>
      </div>
    )
  }
}

export default Developer;
