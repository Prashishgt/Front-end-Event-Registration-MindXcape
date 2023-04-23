import React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import PrizeCard from '../../components/PrizeCard';

const Prizes = () => {
  return (
    <Box
    width='90%' margin='40px auto' bgcolor="#f2f2f2"  padding="40px"
   >
    
     <Typography variant='h3' textAlign='center'>
        Featured <b>Prizes</b>
     </Typography>
  
     <Box     
      margin="40px auto"
      
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 350px)"
      justifyContent="space-evenly"     
      rowGap="40px"
      columnGap="1.33%"
     >
        <PrizeCard />
        <PrizeCard />
        <PrizeCard />
        
     </Box>
   </Box>
  )
}

export default Prizes