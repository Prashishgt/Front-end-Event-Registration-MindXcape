import { Box, Typography } from '@mui/material';
import React from 'react';
import EventCard from '../../components/EventCard';
import {eventInfo} from '../../data';

const EventsList = () => {
  
  return (
    <Box
    width='100%' height="auto" padding="20px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgcolor="#f2f2f2" 
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
      sx={{
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, 300px)",
       
        gridGap:"30px",
        justifyContent:"center",
        gridTemplateRow:"repeat(auto=fit, 300px)",
        alignItems:"center",
        

      }}
     >
      {
        eventInfo.map((item) => (
          <EventCard venue={item.venue} body={item.body} date={item.date}/>
        ))
      }
        
       
     </Box>
   </Box>
  )
}

export default EventsList