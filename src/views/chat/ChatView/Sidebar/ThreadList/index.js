import React, {
  useState,
  useEffect
} from 'react';
import {
  Link as RouterLink,
  useLocation
} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { getThreads } from 'src/actions/chatActions';
import {
  Avatar,
  Box,
  ClickAwayListener,
  Input,
  SvgIcon,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import ThreadItem from './ThreadItem';

function filterContacts(contacts, searchText) {
  if (!searchText) {
    return contacts.allIds;
  }

  return contacts.allIds.filter(
    (contactId) => contacts.byId[contactId].name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  searchContainer: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    height: 44,
    borderRadius: 22,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.background.dark
  },
  searchInput: {
    flexGrow: 1,
    marginLeft: theme.spacing(1)
  },
  contactAvatar: {
    height: 32,
    width: 32
  },
  threadList: {},
  hideThreadList: {
    display: 'none'
  }
}));

function ThreadList({ className, ...rest }) {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const { threads, contacts } = useSelector((state) => state.chat);
  const [searchText, setSearchText] = useState('');
  const [displaySearchResults, setDisplaySearchResults] = useState(false);

  const handleSearchFocus = (event) => {
    event.persist();
    setDisplaySearchResults(true);
  };

  const handleSearchChange = (event) => {
    event.persist();
    setSearchText(event.target.value);
  };

  const handleSearchClickAway = () => {
    if (displaySearchResults) {
      setSearchText('');
      setDisplaySearchResults(false);
    }
  };

  useEffect(() => {
    dispatch(getThreads());
  }, [dispatch]);

  useEffect(() => {
    if (displaySearchResults) {
      setDisplaySearchResults(false);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <ClickAwayListener onClickAway={handleSearchClickAway}>
        <div className={classes.searchContainer}>
          <div className={classes.search}>
            <SvgIcon
              fontSize="small"
              color="action"
            >
              <SearchIcon />
            </SvgIcon>
            <Input
              className={classes.searchInput}
              disableUnderline
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              placeholder="Search contacts"
              value={searchText}
            />
          </div>
          {displaySearchResults && (
          <Box mt={2}>
            <Typography
              variant="h6"
              color="textSecondary"
            >
              Contacts
            </Typography>
            <List>
              {filterContacts(contacts, searchText).map((contactId) => {
                const contact = contacts.byId[contactId];

                return (
                  <ListItem
                    button
                    component={RouterLink}
                    key={contact.id}
                    to={`/app/chat/${contact.username}`}
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={contact.avatar}
                        className={classes.contactAvatar}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={contact.name}
                      primaryTypographyProps={{
                        noWrap: true,
                        variant: 'h6',
                        color: 'textPrimary'
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
          )}
        </div>
      </ClickAwayListener>
      <List className={clsx(classes.threadList,
        { [classes.hideThreadList]: displaySearchResults })}
      >
        {threads.allKeys.map((threadKey) => (
          <ThreadItem
            key={threadKey}
            thread={threads.byKey[threadKey]}
          />
        ))}
      </List>
    </div>
  );
}

ThreadList.propTypes = {
  className: PropTypes.string
};

export default ThreadList;
