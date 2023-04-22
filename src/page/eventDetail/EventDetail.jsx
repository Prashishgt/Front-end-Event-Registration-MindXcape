import React from 'react';
import Banner from './Banner';
import Prizes from './Prizes';
import About from './About';
import Schedule from './Schedule';
import Faq from './Faq';
import Footer from './Footer';
import { Box } from '@mui/material';


export const EventDetail = () => {
  return (
    <Box sx={{
      overflow:"hidden"
    }}>
        <Banner />
        <About />
        <Prizes />        
        <Schedule />
        <Faq />
        <Footer />

    </Box>

  )
}
