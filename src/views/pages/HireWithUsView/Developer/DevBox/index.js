import React from 'react';
import classes from './DevBox.module.css'
import Gold_Ribbon from '../../../../../assets/images/Gold_Ribbon.png'
import Book_Icon from '../../../../../assets/images/Book_Icon.png'
import Thumbs_Up from '../../../../../assets/images/Thumbs_Up.png'
import { Typography } from '@material-ui/core';

const devBox = (props)=>{
  let img;
  switch(props.Img){
    case('Gold_Ribbon') :{
      img = Gold_Ribbon;
      break;
    }
    case('Book_Icon') : {
      img = Book_Icon;
      break;
    }
    case('Thumbs_Up'):{
      img=Thumbs_Up;
      break;
    }
    default:img=Thumbs_Up
  }

  return (
    <div>
      <div className={classes.DevBox}>
        <div className={classes.Content}>
          <div>
            <img src={img} className={classes.Icon} alt=""/>
          </div>
          <Typography variant="h4">1000+</Typography>
          <Typography variant="h4">Problems Solved</Typography>
        </div>
      </div>
    </div>
  )

}

export default devBox;
