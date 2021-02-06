import React from 'react';
import classes from './DevBox.module.css'
import Gold_Ribbon from '../../../../../assets/images/Gold_Ribbon.png'
import Book_Icon from '../../../../../assets/images/Book_Icon.png'
import Thumbs_Up from '../../../../../assets/images/Thumbs_Up.png'


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
            <img src={img} className={classes.Gold_Ribbon}/>
          </div>
          <strong><p>1000+</p></strong>
          <strong><p>Problems Solved</p></strong>
        </div>
      </div>
    </div>
  )

}

export default devBox;
