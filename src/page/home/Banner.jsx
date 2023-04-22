import React from 'react';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme.js';

const Banner = () => {
  return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="300px"
        width="100%"
        sx={{
            backgroundColor:shades.secondary[500]
        }}
       
    >
        <Box>
            <Typography variant='h2'>
                MindXcape 
            </Typography>
        </Box>
        <Box mt="10px">
            <Typography variant='subtitle'>
                An Innovator's Community
            </Typography>
        </Box>
    </Box>
  )
}

export default Banner