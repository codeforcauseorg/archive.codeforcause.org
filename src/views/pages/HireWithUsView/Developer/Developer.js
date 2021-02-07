import React,{Component} from 'react';
import Devbox from './DevBox/index';
import classes from './Developer.module.css';
import { Typography } from '@material-ui/core';

class Developer extends Component{
  render(){

    return (

      <div>
        <div className={classes.Developer}>

        <div>
         <p><span className={classes.heading1}>The Making Of </span>
           <span className={classes.heading2}>The Fine Developer</span></p>
       </div>

          <div className={classes.Box}>
              <Devbox Img='Gold_Ribbon'/>
              <Devbox Img='Book_Icon'/>
              <Devbox Img='Thumbs_Up'/>
          </div>

          <div className={classes.Bottom}>
            <Devbox/>
            <div className={classes.BottomBox}>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ke Aldus PageMaker including versions of Lorem Ipsum elease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.
              </Typography>
            </div>

          </div>

        </div>
          <div className={classes.SideBox} />
      </div>
    )
  }
}

export default Developer;
