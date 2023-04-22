import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const ScheduleCard = () => {
  return (
    <Box 
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',         
            
        }}
    >   
    <Typography>
        9:00 AM
    </Typography>
      <input type="text" disabled placeholder="Event Destructring" style={{
        margin:'10px',
        width:'80%',
        padding:'5px',
        borderRadius:'25px',
        backgroundColor:'#FFD152'
      }} />     
        
    </Box>
  );
};

export default ScheduleCard;
