import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ButtonComponent from 'src/components/Button/ButtonComponent';
import Dev1 from '../../../../assets/images/dev1.png';
import Dev2 from '../../../../assets/images/dev2.png';
import Dev3 from '../../../../assets/images/dev3.png';
import Dev4 from '../../../../assets/images/dev4.png';
import Rect1 from '../../../../assets/images/Rectangle1.png';
import Rect2 from '../../../../assets/images/Rectangle2.png';

const useStyles = makeStyles(theme => ({
  Major: {
    margin: '20px 0px',
    paddingBottom: '62px'
  },
  Heading: {
    position: 'relative',
    background: '#deded9',
    padding: '30px 0px',
    borderBottomRightRadius: '50px',
    borderTopRightRadius: '50px',
    transform: 'skewY(-1deg)',
    '&:before': {
      position: 'absolute',
      top: '-30px',
      right: '-20px',
      background: '#adaba5',
      content: '""',
      display: 'block',
      width: '106%',
      height: '100%',
      opacity: '0.2',
      borderBottomRightRadius: '50px',
      borderTopRightRadius: '50px',
      boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px #BAAEAE'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px 10px',
      justifyContent: 'left',
      width: '72%',
      '&:before': {
        top: '-10px',
        right: '-8px'
      }
    }
  },
  ContentBox: {
    margin: 'auto'
  },
  ButtonCommon: {
    backgroundColor: 'blue',
    width: '250px',
    fontWeight: 'bold',
    fontSize: '17px',
    marginTop: '40px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 220, 1)'
    }
  },
  Button: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  Images: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },
  LeftImg: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '5px'
  },
  RightImg: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '5px'
  },
  MobileBtn: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: '10px'
    }
  },
  Shape1: {
    position: 'absolute',
    left: '-16%',
    width: '20%'
  },
  Shape2: {
    position: 'absolute',
    bottom: '-8%',
    right: '-2%',
    width: '16%'
  },
  Shape3: {
    position: 'absolute',
    right: '-10%',
    width: '22%',
    transform: 'scaleY(-1)'
  },
  Shape4: {
    position: 'absolute',
    bottom: '-18%',
    transform: 'scaleY(-1)',
    left: '16%',
    width: '26%'
  }
}));
export default function Major(props) {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" className={classes.Major}>
      <Grid container>
        <Grid justify="center" container sm="7" className={classes.Heading}>
          <Typography variant="h2">Developers With Skill Majors</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justify="center"
        className={classes.ContentBox}
      >
        <Grid item sm={4} xs={12}>
          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
          <ButtonComponent
            title="Start Hiring"
            href="#"
            size="large"
            variant="contained"
            className={`${classes.Button} ${classes.ButtonCommon}`}
          />
        </Grid>
        <Grid item sm={7} xs={9} className={classes.Images}>
          <div className={classes.LeftImg}>
            <img width="100%" src={Dev1} alt="" />
          </div>
          <div className={classes.RightImg}>
            <img width="106%" src={Dev2} alt="" />
          </div>
          <div className={classes.LeftImg}>
            <img width="100%" src={Dev3} alt="" />
            <img className={classes.Shape1} src={Rect2} alt="" />
            <img className={classes.Shape2} src={Rect2} alt="" />
          </div>
          <div className={classes.RightImg}>
            <img width="72%" height="78%" src={Dev4} alt="" />
            <img className={classes.Shape3} src={Rect1} alt="" />
            <img className={classes.Shape4} src={Rect1} alt="" />
          </div>
        </Grid>
      </Grid>
      <ButtonComponent
        title="Start Hiring"
        href="#"
        size="large"
        variant="contained"
        className={`${classes.MobileBtn} ${classes.ButtonCommon}`}
      />
    </Grid>
  );
}
