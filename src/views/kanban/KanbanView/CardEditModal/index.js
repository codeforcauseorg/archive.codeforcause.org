import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import {
  Box,
  Dialog,
  Divider,
  Grid,
  Typography,
  makeStyles,
  IconButton,
  SvgIcon
} from '@material-ui/core';
import {
  XCircle as CloseIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  ArrowRight as ArrowRightIcon,
  Archive as ArchiveIcon,
  CheckSquare as CheckIcon,
  Copy as CopyIcon,
  Users as UsersIcon,
  File as FileIcon,
  Layout as LayoutIcon
} from 'react-feather';
import {
  deleteCard,
  updateCard,
  addChecklist
} from 'src/actions/kanbanActions';
import Details from './Details';
import Checklist from './Checklist';
import NewComment from './NewComment';
import Comment from './Comment';
import ActionButton from './ActionButton';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  listName: {
    fontWeight: theme.typography.fontWeightMedium
  },
  checklist: {
    '& + &': {
      marginTop: theme.spacing(3)
    }
  }
}));

function CardEditModal({
  card,
  className,
  list,
  onClose,
  open,
  ...rest
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubscribe = async () => {
    try {
      await dispatch(updateCard(card.id, { isSubscribed: true }));
      enqueueSnackbar('Unsubscribed', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  };

  const handleUnsubscribe = async () => {
    try {
      await dispatch(updateCard(card.id, { isSubscribed: false }));
      enqueueSnackbar('Subscribed', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteCard(card.id));
      enqueueSnackbar('Card archived', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  };

  const handleAddChecklist = async () => {
    try {
      await dispatch(addChecklist(card.id, 'Untitled Checklist'));
      enqueueSnackbar('Checklist added', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="md"
      fullWidth
      {...rest}
    >
      <div className={classes.root}>
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            variant="body2"
            color="textSecondary"
          >
            in list
            {' '}
            <span className={classes.listName}>
              {list.name}
            </span>
          </Typography>
          <IconButton onClick={onClose}>
            <SvgIcon>
              <CloseIcon />
            </SvgIcon>
          </IconButton>
        </Box>
        <Grid
          container
          spacing={5}
        >
          <Grid
            item
            xs={12}
            sm={8}
          >
            <Details
              card={card}
              list={list}
            />
            {card.checklists.length > 0 && (
              <Box mt={5}>
                {card.checklists.map((checklist) => (
                  <Checklist
                    key={checklist.id}
                    card={card}
                    checklist={checklist}
                    className={classes.checklist}
                  />
                ))}
              </Box>
            )}
            <Box mt={3}>
              <Typography
                variant="h4"
                color="textPrimary"
              >
                Activity
              </Typography>
              <Box mt={2}>
                <NewComment cardId={card.id} />
                {card.comments.length > 0 && (
                  <Box mt={3}>
                    {card.comments.map((comment) => (
                      <Comment
                        key={comment.id}
                        comment={comment}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Typography
              variant="overline"
              color="textSecondary"
            >
              Add to card
            </Typography>
            <ActionButton
              icon={CheckIcon}
              onClick={handleAddChecklist}
            >
              Checklist
            </ActionButton>
            <ActionButton
              icon={UsersIcon}
              disabled
            >
              Members
            </ActionButton>
            <ActionButton
              icon={UsersIcon}
              disabled
            >
              Labels
            </ActionButton>
            <ActionButton
              icon={FileIcon}
              disabled
            >
              Attachments
            </ActionButton>
            <Box mt={3}>
              <Typography
                variant="overline"
                color="textSecondary"
              >
                Actions
              </Typography>
              <ActionButton
                icon={ArrowRightIcon}
                disabled
              >
                Move
              </ActionButton>
              <ActionButton
                icon={CopyIcon}
                disabled
              >
                Copy
              </ActionButton>
              <ActionButton
                icon={LayoutIcon}
                disabled
              >
                Make Template
              </ActionButton>
              {card.isSubscribed ? (
                <ActionButton
                  icon={EyeOffIcon}
                  onClick={handleUnsubscribe}
                >
                  Unwatch
                </ActionButton>
              ) : (
                <ActionButton
                  icon={EyeIcon}
                  onClick={handleSubscribe}
                >
                  Watch
                </ActionButton>
              )}
              <Divider />
              <ActionButton
                icon={ArchiveIcon}
                onClick={handleDelete}
              >
                Archive
              </ActionButton>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
}

CardEditModal.propTypes = {
  card: PropTypes.object.isRequired,
  className: PropTypes.string,
  list: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

CardEditModal.defaultProps = {
  open: false,
  onClose: () => {}
};

export default CardEditModal;
