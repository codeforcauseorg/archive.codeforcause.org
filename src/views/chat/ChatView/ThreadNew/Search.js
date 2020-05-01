import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  ClickAwayListener,
  Typography,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popper,
  Paper,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';

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
  input: {
    backgroundColor: theme.palette.background.default,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    height: 32,
    borderRadius: 16
  }
}));

function Search({ className, ...rest }) {
  const classes = useStyles();
  const { contacts } = useSelector((state) => state.chat);
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  const [displaySearchResults, setDisplaySearchResults] = useState(false);

  const handleSearchChange = (event) => {
    event.persist();
    setSearchText(event.target.value);
  };

  const handleResultsClickAway = () => {
    setDisplaySearchResults(false);
  };

  useEffect(() => {
    if (searchText && !displaySearchResults) {
      setDisplaySearchResults(true);
    }
    // eslint-disable-next-line
  }, [searchText]);

  const filteredContactIds = filterContacts(contacts, searchText);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Input
        className={classes.input}
        disableUnderline
        onChange={handleSearchChange}
        placeholder="Search contacts"
        value={searchText}
        ref={inputRef}
        autoFocus
      />
      <Popper
        anchorEl={inputRef.current}
        open={displaySearchResults}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={handleResultsClickAway}>
          <Box
            component={Paper}
            width={320}
            maxWidth="100%"
            mt={1}
          >
            {filteredContactIds.length === 0 ? (
              <Box
                px={2}
                pb={2}
                pt={2}
                textAlign="center"
              >
                <Typography
                  variant="h4"
                  color="textPrimary"
                  gutterBottom
                >
                  Nothing Found
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  We couldn&apos;t find any matches for &quot;
                  {searchText}
                  &quot;. Try checking for typos or using complete words.
                </Typography>
              </Box>
            ) : (
              <>
                <Box
                  px={2}
                  pt={2}
                >
                  <Typography
                    variant="h6"
                    color="textSecondary"
                  >
                    Contacts
                  </Typography>
                </Box>
                <List>
                  {filteredContactIds.map((contactId) => {
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
              </>
            )}
          </Box>
        </ClickAwayListener>
      </Popper>
    </div>
  );
}

Search.propTypes = {
  className: PropTypes.string
};

export default Search;
