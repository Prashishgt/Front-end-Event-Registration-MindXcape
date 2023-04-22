import { Box } from '@mui/material';
import React from 'react';
import Banner from '../home/Banner';
import Footer from '../eventDetail/Footer';
import Registration from '../../components/Registration';

const RegistrationHome = () => {
  return (
    <Box>
        <Banner />
        <Registration />
        <Footer />
    </Box>
  )
}

export default RegistrationHome