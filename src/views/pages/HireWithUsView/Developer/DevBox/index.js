import React from 'react';
// import classes from './DevBox.module.css'
import Gold_Ribbon from '../../../../../assets/images/Gold_Ribbon.png'
import Book_Icon from '../../../../../assets/images/Book_Icon.png'
import Thumbs_Up from '../../../../../assets/images/Thumbs_Up.png'
import { Typography,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  DevBox:{
    width: "239px",
    height: "170px",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px #BAAEAE",
    borderRadius: "121.5px 20px 121px 121.5px",
    border:"1px solid #BAAEAE",
    backgroundColor: "#f2e6ff",
    paddingTop: "30px",
    paddingLeft: "50px",
    zIndex: "500"
  },
  Icon:{
    position: "relative",
    left: "130px",
    top:"-20px",
    height: "30px",
    width: "30px"
  }
}));

export default function Devbox(props) {
  const classes = useStyles();

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
