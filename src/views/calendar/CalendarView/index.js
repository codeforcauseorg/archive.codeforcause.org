import React, {
  useCallback,
  useState,
  useRef,
  useEffect
} from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import {
  Box,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import Header from './Header';
import Toolbar from './Toolbar';
import AddEditEventModal from './AddEditEventModal';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  calendar: {
    '& .fc-unthemed th': {
      borderColor: theme.palette.divider
    },
    '& .fc-unthemed td': {
      borderColor: theme.palette.divider
    },
    '& .fc-unthemed td.fc-today': {
      backgroundColor: theme.palette.background.dark
    },
    '& .fc-head': {
      backgroundColor: theme.palette.background.dark
    },
    '& .fc-body': {
      backgroundColor: theme.palette.background.default
    },
    '& .fc-axis': {
      ...theme.typography.body2
    },
    '& .fc-list-item-time': {
      ...theme.typography.body2
    },
    '& .fc-list-item-title': {
      ...theme.typography.body1
    },
    '& .fc-list-heading-main': {
      ...theme.typography.h6
    },
    '& .fc-list-heading-alt': {
      ...theme.typography.h6
    },
    '& .fc th': {
      borderColor: theme.palette.divider
    },
    '& .fc-day-header': {
      ...theme.typography.subtitle2,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.dark
    },
    '& .fc-day-top': {
      ...theme.typography.body2
    },
    '& .fc-highlight': {
      backgroundColor: theme.palette.background.dark
    },
    '& .fc-event': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      borderWidth: 2,
      opacity: 0.9,
      '& .fc-time': {
        ...theme.typography.h6,
        color: 'inherit'
      },
      '& .fc-title': {
        ...theme.typography.body1,
        color: 'inherit'
      }
    },
    '& .fc-list-empty': {
      ...theme.typography.subtitle1
    }
  }
}));

function CalendarView() {
  const classes = useStyles();
  const calendarRef = useRef(null);
  const isMountedRef = useIsMountedRef();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const [view, setView] = useState(mobileDevice ? 'listWeek' : 'dayGridMonth');
  const [date, setDate] = useState(moment().toDate());
  const [events, setEvents] = useState(null);
  const [modal, setModal] = useState({
    event: null,
    mode: null,
    open: false
  });

  const resetModal = () => {
    setModal({
      event: null,
      mode: null,
      open: false
    });
  };

  const handleDateToday = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleViewChange = (newView) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleDatePrev = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleDateNext = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleEventAddClick = () => {
    setModal({
      mode: 'add',
      open: true,
      event: {
        allDay: false,
        description: '',
        end: moment().add(30, 'minutes').toDate(),
        start: moment().toDate(),
        title: ''
      }
    });
  };

  const handleSlotsSelect = (arg) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.unselect();
    }

    setModal({
      event: {
        allDay: arg.allDay,
        description: '',
        end: arg.end,
        start: arg.start,
        title: ''
      },
      mode: 'add',
      open: true
    });
  };

  const handleEventAdd = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
    resetModal();
  };

  const handleEventDelete = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((prevEvent) => prevEvent.id !== eventId));
    resetModal();
  };

  const handleEventSelect = (arg) => {
    const event = events.find((e) => e.id === arg.event.id);

    setModal({
      event: { ...event },
      mode: 'edit',
      open: true
    });
  };

  const handleEventEdit = (event) => {
    setEvents((prevEvents) => prevEvents.map((prevEvent) => (
      prevEvent.id === event.id ? event : prevEvent
    )));
    resetModal();
  };

  const handleEventResize = ({ event }) => {
    // Call API to update the event in database
    setEvents((prevEvents) => prevEvents.map((prevEvent) => (prevEvent.id === event.id ? ({
      ...prevEvent,
      allDay: event.allDay,
      start: event.start,
      end: event.end
    }) : prevEvent)));
  };

  const handleEventDrop = ({ event }) => {
    // If you add a droppable area, check if event dropped inside or outside of calendar
    // Call API to update the event in database
    setEvents((prevEvents) => prevEvents.map((prevEvent) => (prevEvent.id === event.id ? ({
      ...prevEvent,
      allDay: event.allDay,
      start: event.start,
      end: event.end
    }) : prevEvent)));
  };

  const handleModalClose = () => {
    resetModal();
  };

  const getEvents = useCallback(() => {
    axios
      .get('/api/calendar')
      .then((response) => {
        if (isMountedRef.current) {
          setEvents(response.data.events);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  useEffect(() => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = mobileDevice ? 'listWeek' : 'dayGridMonth';

      calendarApi.changeView(newView);
      setView(newView);
    }
  }, [mobileDevice]);

  if (!events) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Calendar"
    >
      <Container maxWidth={false}>
        <Header onEventAdd={handleEventAddClick} />
        <Toolbar
          date={date}
          onDateNext={handleDateNext}
          onDatePrev={handleDatePrev}
          onDateToday={handleDateToday}
          onViewChange={handleViewChange}
          view={view}
        />
        <Paper
          className={classes.calendar}
          component={Box}
          mt={3}
          p={2}
        >
          <FullCalendar
            allDayMaintainDuration
            defaultDate={date}
            defaultView={view}
            droppable
            editable
            eventClick={handleEventSelect}
            eventDrop={handleEventDrop}
            eventLimit
            eventResizableFromStart
            eventResize={handleEventResize}
            events={events}
            header={false}
            height={800}
            ref={calendarRef}
            rerenderDelay={10}
            select={handleSlotsSelect}
            selectable
            weekends
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              timelinePlugin
            ]}
          />
        </Paper>
        <AddEditEventModal
          event={modal.event}
          mode={modal.mode}
          onAdd={handleEventAdd}
          onCancel={handleModalClose}
          onDelete={handleEventDelete}
          onEdit={handleEventEdit}
          open={modal.open}
        />
      </Container>
    </Page>
  );
}

export default CalendarView;
