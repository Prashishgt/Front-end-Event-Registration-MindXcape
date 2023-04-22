import { Box, Typography } from '@mui/material';
import React from 'react';


const About = () => {
  return (
    <Box width="auto" display="flex" justifyContent="center">    
    <Box width="80%" display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" height="100vh">
      <Box>
        <Typography variant='h2'>
          Internationl School of Management and Technology
        </Typography>
        <Typography variant='h3' pt="20px">
        ISMT was established in 2011 with a mission to deliver internationally recognized qualifications. ISMT offers a range of qualifications in collaboration with the University of Sunderland, Pearson BTEC, and ACCA, UK. ISMT exists to make an impact in the education system in Nepal, with an ambition to deliver industry-relevant education and make higher education accessible and beneficial to all those with the passion and ability to succeed.
        </Typography>
      </Box>
      <Box>
        <Typography variant='h2' textAlign="right">
          Ideathon 2023
        </Typography>
        <Typography textAlign="right" variant='h3' pt="20px" >
        An Ideathon is a collaborative event where individuals or teams come together to generate and develop innovative ideas related to a specific theme or challenge. The goal of an Ideathon is to create solutions or ideas that can address a particular problem or improve a situation.
        </Typography>
      </Box>
    </Box>
    </Box>
  )
}

export default About