import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Grid, Typography, Container, Paper, TextField } from "@material-ui/core";

import useStyles from "./styles";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Event",
    allDay: true,
    start: new Date(2022, 5, 7),
    end: new Date(2022, 5, 8),
  },
  {
    title: "Birthday Party",
    start: new Date(2018, 3, 14, 7, 0),
    end: new Date(2018, 3, 14, 10, 0),
  },
  {
    title: "Click for Google",
    start: new Date(2018, 3, 28),
    end: new Date(2018, 3, 29),
  },
];

const CalendarApp = () => {
  const classes = useStyles();
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="CalendarApp">
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4">Calendar</Typography>
        <Typography variant="h6">Add New Event</Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <TextField
                type="text"
                placeholder="Add Title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
              <DatePicker
                placeholderText="Start Date"
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <DatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
              <button onClick={handleAddEvent}>Add Event</button>
            </Grid>
          </form>
        </Paper>
      </Container>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px", background: "white" }}
      />
    </div>
  );
};

export default CalendarApp;
