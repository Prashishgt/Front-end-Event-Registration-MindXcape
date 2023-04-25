import { Box } from '@mui/material';
import React from 'react';
import Banner from '../home/Banner';
import FooterHome from '../../page/home/FooterHome'
import Registration from '../../components/Registration';

const RegistrationHome = () => {
  return (
    <Box>
        <Banner />
        <Registration />
        <FooterHome />
    </Box>
  )
}

export default RegistrationHome