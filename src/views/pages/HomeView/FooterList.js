import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
  }));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList({footerColumn}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
      {footerColumn.map(footer => (            
            <ListItemLink href={footer.link} target="_blank">
            <ListItemText primary={footer.title}  />
          </ListItemLink>
          ))}
      </List>
    </div>
  );
}
