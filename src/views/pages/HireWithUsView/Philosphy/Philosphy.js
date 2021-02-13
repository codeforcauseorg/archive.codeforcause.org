import React from 'react';
// import classes from './Developer.module.css';
import {Grid,Typography,makeStyles } from '@material-ui/core';
import Businessman from '../../../../assets/images/Businessman.png';

const useStyles = makeStyles(theme => ({
  Philosphy:{
    height:"1000px",

    [theme.breakpoints.down('xs')]: {
      height:"800px"
    }
  },
  Heading:{
    width: "100%",
    height:"100px",
    [theme.breakpoints.down('xs')]: {
      height:"100px",
    },
  },
  Inner1:{
    width:"35%",
    height:"100px",
    background:"none",
    [theme.breakpoints.down('xs')]: {
      height:"50px"
    },
  },
  Inner2:{
      width: "65%",
      height : "100px",
      top: "0",
      bottom: "0",
      background: "#deded9",
      float:"right",
      paddingLeft:"140px",
      paddingTop:"30px",
      borderTopLeftRadius:"350px",
      borderBottomLeftRadius:"50px",
      // boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px #BAAEAE",
      opacity:"0.7",
      zIndex:"200",
      [theme.breakpoints.down('xs')]: {
        paddingLeft:"28px",
        paddingTop:"35px",
      },
  },
  Inner3:{
    height:"100px",
    width:"65%",
    top: "0",
    bottom: "0",
    float:"right",
    backgroundColor:"#adaba5",
    borderTopLeftRadius:"350px",
    borderBottomLeftRadius:"50px",
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px #BAAEAE",
    transform:"translate(0px,-120px)",
    opacity:"0.2",
    zIndex:"100",

  },
  MidSection:{
    marginLeft:"80px",
    height:"500px",
    width: "100%",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.breakpoints.down('xs')]: {
      flexDirection:"column",
    },
  },
  First:{
    width:"50%",
    height:"100%",
    [theme.breakpoints.down('md')]: {
      transform:"translate(-70px,250px)"
    },
    [theme.breakpoints.down('sm')]: {
      transform:"translate(-70px,250px)"
    },
    [theme.breakpoints.down('xs')]: {
      transform:"translate(-70px,180px)"
    },
  },
  Design1:{
    transform:"translate(100px,70px) rotate(-8deg)",
    [theme.breakpoints.down('md')]: {
      transform:"translate(100px,20px) rotate(-8deg)",
    },
    [theme.breakpoints.down('xs')]: {
      transform:"translate(100px,70px) rotate(-8deg)"
    },
  },
  Design11:{
    width: "340px",
    height: "60px",
    background: "rgba(255, 255, 255, 0.1)",
    backgroundColor: "gray",
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px gray",
    borderRadius: "200px 121.5px 121.5px 10px ",
    marginTop:"20px",
    opacity:"0.3",
    [theme.breakpoints.down('md')]: {
      height:"40px",
      width:"240px",
    },
    [theme.breakpoints.down('xs')]: {
      height:"30px",
      width:"180px"
    },
  },
  Design2:{
    height:"40px",
    transform:"translate(80px,105px) rotate(4deg)",
    borderRadius: "121.5px 200px 10px  121.5px ",
    [theme.breakpoints.down('md')]: {
      height:"40px",
      width:"260px",
      transform:"translate(80px,90px) rotate(3deg)",
    },
    [theme.breakpoints.down('xs')]: {
      height:"30px",
      width:"190px",
      transform:"translate(80px,95px) rotate(3deg)",
    },
  },
  Design3:{
    height:"50px",
    width:"315px",
    transform:"translate(100px,130px) rotate(-4deg)",
    borderRadius: "121.5px 200px 10px  121.5px ",
    [theme.breakpoints.down('md')]: {
      height:"40px",
      width:"240px",
      transform:"translate(100px,110px) rotate(-4deg)",
    },
    [theme.breakpoints.down('xs')]: {
      height:"30px",
      width:"160px",
      transform:"translate(108px,100px) rotate(-4deg)",
    },
  },
  Businessman:{
    height:"470px",
    width:"350px",
    transform:"translate(90px ,-195px)",
    [theme.breakpoints.down('md')]: {
      height:"360px",
      width:"280px",
      transform:"translate(90px ,-178px)",
    },
    [theme.breakpoints.down('xs')]: {
      height:"270px",
      width:"200px",
      transform:"translate(90px ,-110px)",
    },
  },
  Box:{
    width: "50%",
    height: "100%",
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
  padding:"105px 50px 20px 110px",
  [theme.breakpoints.down('md')]: {
    height:"280px",
    width:"400px",
    padding:"50px 10px 0 60px",
    transform:"translate(20px,0px)"
  },
  [theme.breakpoints.down('xs')]: {
    height:"170px",
    width:"280px",
    padding:"30px 10px 0 32px",
    transform:"translate(20px,0px)"
  },

},
Box2:{
  width:"270px",
  height:"170px",
  transform:"translate(-280px,-80px)",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.1), inset 0px 0px 30px #BAAEAE",
  zIndex:"200",
  opacity:"0.8",
  [theme.breakpoints.down('md')]: {
    height:"85px",
    width:"120px",
    transform:"translate(-45px,-45px)",
  },
  [theme.breakpoints.down('xs')]: {
    height:"50px",
    width:"100px",
    transform:"translate(-30px,-20px)"
  },

},
Box3:{
  width:"170px",
  height:"110px",
  boxShadow: "2px 2px 100px rgba(0, 0, 0, 0.1), inset 0px 0px 40px #BAAEAE",
  transform:"translate(-320px,-165px)",
  zIndex:"400",
  [theme.breakpoints.down('md')]: {
    height:"65px",
    width:"90px",
    transform:"translate(-55px,-85px)",
  },
  [theme.breakpoints.down('xs')]: {
    height:"35px",
    width:"70px",
    transform:"translate(-45px,-45px)",
  },

},
Second:{
  transform:"translate(-120px,-40px)",
  color:"white",
  [theme.breakpoints.down('md')]: {
    paddingRight:"320px",
    transform:"translate(150px,-555px)",
  },
  [theme.breakpoints.down('sm')]: {
    paddingRight:"320px",
    transform:"translate(150px,-555px)",
  },
  [theme.breakpoints.down('xs')]: {
    transform:"translate(-210px,30px)",
  },
},
Innerdiv:{
  marginTop:"20px",
  [theme.breakpoints.down('md')]: {
    fontSize:"12px"
  },
  [theme.breakpoints.down('xs')]: {
    fontSize:"8px"
  },

},


}));

export default function Philosphy(props){
      const classes = useStyles();
    return (

      <Grid container className={classes.Philosphy}>
        <Grid className={classes.Heading}>
          <Grid className={classes.Inner1}></Grid>
          <Grid className={classes.Inner2}>
            <Typography variant='h1'> Our Philosphy </Typography>
          </Grid>
          <Grid className={classes.Inner1}></Grid>
          <Grid className={classes.Inner3}></Grid>
        </Grid>
        <Grid container className={classes.MidSection}>
          <Grid item xs={12} sm={12} md={12} lg={4} className={classes.First}>
            <Grid item className={classes.Design1}>
              <Grid item className={classes.Design11}/>
              <Grid item className={classes.Design11}/>
            </Grid>
            <div>
              <Grid item className={`${classes.Design11} ${classes.Design2}`}/>
              <Grid item className={`${classes.Design11} ${classes.Design3}`}/>
              <Grid item>
                <img src={Businessman}  alt="" className={classes.Businessman} />
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} className={classes.Second}>
              <Grid item className={`${classes.Box} ${classes.Box1}`}>
                <Typography variant="h3">Our Philosphy</Typography>
                <Typography variant="body1" className={classes.Innerdiv}>
                  Lorem Ipsum is simply dummy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets cont                </Typography>
              </Grid>
              <Grid item className={`${classes.Box} ${classes.Box2}`} />
              <Grid item className={`${classes.Box} ${classes.Box3}`} />
          </Grid>
        </Grid>
      </Grid>
    )

}
