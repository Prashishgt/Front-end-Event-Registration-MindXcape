import { Box, Typography } from '@mui/material';
import React from 'react';
import EventCard from '../../components/EventCard';
import {eventInfo} from '../../data';

const EventsList = () => {
  
  return (
    <Box
    width='100%' height="100vh" padding="20px" display="flex" flexDirection="column" alignItems="center"  justifyContent="space-evenly" bgcolor="#f2f2f2" 
   >
    <Box height="20%" display="flex" justifyContent="space-evenly" alignItems="center" flexDirection="column" >
    <Typography variant='h2' textAlign="center">
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
        gridTemplateColumns:"repeat(auto-fit, 320px)",       
        columnGap: "200px",
        rowGap:"30px",
        maxHeight: "100vh",
        overflow:"auto",
        gridAutoRows: "minmax(auto-fit, 1fr)",
        justifyContent:"center",
        alignItems:"center",
        

      }}
     >
      {
        eventInfo.map((item) => (
          <EventCard name={item.name} venue={item.venue} body={item.body} date={item.date}/>
        ))
      }
        
       
     </Box>
   </Box>
  )
}

export default EventsList