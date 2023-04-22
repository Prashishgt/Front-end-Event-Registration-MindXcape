import { Box, Typography } from '@mui/material';
import React from 'react';
import EventCard from '../../components/EventCard';


const EventsList = () => {
  
  return (
    <Box
    width='90%' margin='40px auto' bgcolor="#f2f2f2" 
   >
    <Typography textAlign="center">
      News & Events
    </Typography>
     <Typography variant='h3' textAlign='center'>
        Our Featured <b>Events</b>
     </Typography>
  
     <Box
      margin="20px auto"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 300px)"
      justifyContent="space-around"
      rowGap="20px"
      columnGap="1.33%"
     >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
     </Box>
   </Box>
  )
}

export default EventsList