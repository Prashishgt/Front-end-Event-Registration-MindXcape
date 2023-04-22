import { Box, Typography } from '@mui/material';
import React from 'react';
import EventCard from '../../components/EventCard';


const EventsList = () => {
  
  return (
    <Box
    width='100%' display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" bgcolor="#f2f2f2" height="70vh"
   >
    <Box>
    <Typography textAlign="center">
      News & Events
    </Typography>
     <Typography variant='h3' textAlign='center'>
        Our Featured <b>Events</b>
     </Typography>
    </Box>  
  
     <Box
      
     >
        <EventCard />
       
     </Box>
   </Box>
  )
}

export default EventsList