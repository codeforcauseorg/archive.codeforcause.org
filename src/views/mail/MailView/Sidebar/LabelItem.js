import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ListItem,
  ButtonBase,
  Typography,
  makeStyles
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import LabelIcon from '@material-ui/icons/Label';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ReportIcon from '@material-ui/icons/Report';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const systemLabelIcons = {
  all: MailIcon,
  inbox: InboxIcon,
  trash: DeleteIcon,
  drafts: DraftsIcon,
  spam: ReportIcon,
  sent: SendIcon,
  starred: StarIcon,
  important: LabelImportantIcon
};

function getIcon(label) {
  if (label.type === 'system_label') {
    return systemLabelIcons[label.id];
  }

  return LabelIcon;
}

function getTo(label) {
  const baseUrl = '/app/mail';

  if (label.type === 'system_label') {
    return `${baseUrl}/${label.id}`;
  }

  if (label.type === 'custom_label') {
    return `${baseUrl}/label/${label.name}`;
  }

  return baseUrl;
}

function getColor(label) {
  if (label.type === 'custom_label') {
    return label.color;
  }

  return null;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0
  },
  content: {
    flexGrow: 1,
    height: 36,
    color: theme.palette.text.secondary,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    paddingRight: 18,
    paddingLeft: 32,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  },
  active: {
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: theme.palette.action.selected
  },
  label: {
    fontWeight: 'inherit',
    color: 'inherit'
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 0)
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  text: {
    fontWeight: 'inherit',
    flexGrow: 1
  }
}));

function LabelItem({ label, ...rest }) {
  const classes = useStyles();

  const Icon = getIcon(label);
  const to = getTo(label);
  const color = getColor(label);
  const displayUnreadCount = Boolean(label.unreadCount && label.unreadCount > 0);

  return (
    <ListItem
      className={classes.root}
      {...rest}
    >
      <ButtonBase
        activeClassName={classes.active}
        component={RouterLink}
        to={to}
        className={classes.content}
      >
        <Icon
          className={classes.icon}
          color="inherit"
          style={{ color }}
        />
        <Typography
          className={classes.text}
          variant="body2"
        >
          {label.name}
        </Typography>
        {displayUnreadCount && (
          <Typography
            color="inherit"
            variant="caption"
          >
            {label.unreadCount}
          </Typography>
        )}
      </ButtonBase>
    </ListItem>
  );
}

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
  children: PropTypes.any
};

export default LabelItem;
