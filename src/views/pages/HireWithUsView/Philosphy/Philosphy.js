import React from 'react';
// import classes from './Developer.module.css';
import { Typography,makeStyles } from '@material-ui/core';
import Businessman from '../../../../assets/images/Businessman.png';

const useStyles = makeStyles(theme => ({
  Philosphy:{
    height:"900px"
  },
  Heading:{
    width: "100%",
    height:"200px",
    flexWrap: "wrap",
    display: "flex",
    alignItems: "flex-end"
  },
  Inner1:{
    width:"35%",
    height:"100px",
    background:"none"
  },
  Inner2:{
      width: "65%",
      height : "100px",
      top: "0",
      bottom: "0",
      right: "40px",
      background: "#deded9",
      float:"right",
      paddingLeft:"140px",
      paddingTop:"30px",
      borderTopLeftRadius:"350px",
      borderBottomLeftRadius:"50px",
      // boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px #BAAEAE",
      opacity:"0.7",
      zIndex:"200"
  },
  Inner3:{
    height:"100px",
    width:"65%",
    backgroundColor:"#adaba5",
    borderTopLeftRadius:"350px",
    borderBottomLeftRadius:"50px",
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px #BAAEAE",
    transform:"translate(0px,-120px)",
    opacity:"0.2",
    zIndex:"100"
  },
  MidSection:{
    marginLeft:"80px",
    height:"500px",
    width: "100%",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  First:{
    transform:"translate(40px,20px)"
  },
  Design1:{
    transform:"translate(100px,70px) rotate(-8deg)"
  },
  Design11:{
    width: "340px",
    height: "60px",
    background: "rgba(255, 255, 255, 0.1)",
    backgroundColor: "gray",
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px gray",
    borderRadius: "200px 121.5px 121.5px 10px ",
    marginTop:"20px",
    opacity:"0.3"
  },
  Design2:{
    height:"40px",
    transform:"translate(80px,105px) rotate(5deg)",
    borderRadius: "121.5px 200px 10px  121.5px ",
  },
  Design3:{
    height:"50px",
    width:"315px",
    transform:"translate(100px,130px) rotate(-4deg)",
    borderRadius: "121.5px 200px 10px  121.5px ",
  },
  Businessman:{
    height:"470px",
    transform:"translate(90px ,-208px)"
  },
  Box:{
    width: "239px",
    height: "170px",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px #BAAEAE",
    borderRadius: " 300px 200px 200px 10px",
    border:"1px solid #BAAEAE",
    paddingTop: "30px",
    paddingLeft: "50px",
  },
Box1:{
  width:"600px",
  height:"400px",
  border:"1px solid #0054db",
  transform:"translate(-130px,5px)",
  backgroundColor:"#0054db",
  zIndex:"100",
  opacity:"0.7",
  padding:"105px 50px 20px 110px"
},
Box2:{
  width:"270px",
  height:"170px",
  transform:"translate(-280px,-80px)",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.1), inset 0px 0px 30px #BAAEAE",
  zIndex:"200",
  opacity:"0.8"
},
Box3:{
  width:"170px",
  height:"110px",
  boxShadow: "2px 2px 100px rgba(0, 0, 0, 0.1), inset 0px 0px 40px #BAAEAE",
  transform:"translate(-320px,-165px)",
  zIndex:"400"
},
Second:{
  transform:"translate(-120px,-40px)",
  color:"white"
},
Innerdiv:{
  marginTop:"20px"
}

}));

export default function Philosphy(props){
      const classes = useStyles();
    return (

      <div className={classes.Philosphy}>
        <div className={classes.Heading}>
          <div className={classes.Inner1}></div>
          <div className={classes.Inner2}>
            <Typography variant='h1'> Our Philosphy </Typography>
          </div>
          <div className={classes.Inner1}></div>
          <div className={classes.Inner3}></div>
        </div>
        <div className={classes.MidSection}>
          <div className={classes.First}>
            <div className={classes.Design1}>
              <div className={classes.Design11}></div>
              <div className={classes.Design11}></div>
            </div>
            <div className={`${classes.Design11} ${classes.Design2}`}></div>
            <div className={`${classes.Design11} ${classes.Design3}`}></div>
            <img src={Businessman}  alt="" className={classes.Businessman} />
          </div>
          <div className={classes.Second}>
              <div className={`${classes.Box} ${classes.Box1}`}>
                <Typography variant="h2">Our Philosphy</Typography>
                <Typography variant="h6" className={classes.Innerdiv}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </div>
              <div className={`${classes.Box} ${classes.Box2}`} />
              <div className={`${classes.Box} ${classes.Box3}`} />
          </div>
        </div>
      </div>
    )

}
