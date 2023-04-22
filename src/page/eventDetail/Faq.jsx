import React from 'react';
import FaqCard from '../../components/FaqCard';
import { Box, Typography } from '@mui/material';
import faq from '../../data';

export default function Faq() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" flexDirection="column" margin="15px">  
      <Typography variant='h3' margin="5px">
        Faq
      </Typography> 
      {
        faq.map((data) => (
          <FaqCard question={data.question} answer={data.answer}/>
        )
        )
      } 
     
    </Box>
  );
}