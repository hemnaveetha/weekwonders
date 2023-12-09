// BasicDateCalendar.js
import React, { useEffect } from "react";
import dayjs from 'dayjs';
import { DateCalendar, DateField } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import Box from '@mui/material/Box';
import { Button, Card, Container, Grid, Paper } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormDialog from "./AddEvent";
import EventList from "./Events";

const BasicDateCalendar = () => {
  const [value, setValue] = React.useState(dayjs(new Date().toDateString()));
  const [open, setOpen] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const [eventDate, setEventDate] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (events && events.length > 0 && value) {
      // Perform any additional logic when events or value change
    }
  }, [events, value]);

  useEffect(() => {
    if (eventDate && eventDate.length > 0) {
      // Perform any additional logic when eventDate changes
    } else {
      const dateSpecificEvents = { eventDate: 'test', eventData: events };
      setEventDate((values) => ({ ...values, dateSpecificEvents }));
    }
  }, [value, eventDate, events]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="main"
        sx={{
          background: 'linear-gradient(to right, #3498db, #2ecc71)',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper sx={{ p: 20, display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ minWidth: 400, maxWidth: 600 }}>
                  <DateCalendar
                    size="large"
                    sx={{ width: '100%', bgcolor: 'transparent', align: 'left' }}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                  <DateField label="Basic date picker" size="small">
                    <Button variant="contained">go</Button>
                  </DateField>
                </Card>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <EventList data={events} setData={setEvents} />
                <FormDialog open={open} setOpen={setOpen} setData={setEvents} data={events}></FormDialog>
                <AddCircleOutlineIcon fontSize="large" onClick={handleClickOpen} sx={{ color: '#2ecc71' }} />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default BasicDateCalendar;
