import React from 'react';
import FaqCard from '../../components/FaqCard';
import { Box, Typography } from '@mui/material';
import { faq } from '../../data';

export default function Faq() {
  return (
    <Box width="100%" height="80vh" display="flex" justifyContent="center" alignItems="center" flexDirection="column" >  
      <Typography variant='h3' margin="5px">
        Faq
      </Typography> 
      <Box width="90%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      {
        faq.map((data) => (
          <FaqCard question={data.question} answer={data.answer}/>
        )
        )
      }
      </Box>      
     
    </Box>
  );
}