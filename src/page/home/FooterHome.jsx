import { Box, IconButton, Typography, Divider } from "@mui/material";
import React from "react";
import { BsDiscord } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import ismtEvent from '../../asset/logo.png';
import { shades } from "../../theme";

const FooterHome = () => {
  return (
    <Box
      
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box  width="80%" padding="20px">
        <Box display="flex" flexDirection={{lg:"row", sm:"column", xs:"column", xxs:"column"}} justifyContent="space-between" alignItems="center"  >
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly"  margin="10px">
            <img
              p={3}
              style={{ borderRadius: "50%", height: "60px" }}
              src={ismtEvent}
              alt="event logo"
            /> 
            <Typography padding="5px" variant="h3" >MindXcape</Typography>
            
            <Typography padding="5px" variant="h4">
              <span>Email: </span>itevents@ismt.edu.np
            </Typography>
            
          </Box>
          <Box margin="10px">
            
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
              <Typography variant="h3">Contact us</Typography>
              <Typography>
              <Typography padding="5px" variant="h4">
              +977-9813246717, +977-9813246818
            </Typography>
              </Typography>
              <Typography padding="5px" variant="h3">
                Follow us at
              </Typography>
              
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">              
              <IconButton 
                sx={{
                  color:shades.primary[600],
                }}
              >
                <AiFillFacebook  />
              </IconButton>
              <IconButton 
              sx={{
                color:shades.primary[600],
              }}
              >
                <AiFillInstagram />
              </IconButton>
              <IconButton
                sx={{
                  color:shades.primary[600],
                }}
              >
                <BsDiscord />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box margin="10px">
          <Divider />
          <Typography margin="10px" variant="h4" sx={{
            textAlign:"center",
            color: shades.secondary[400],
            fontWeight:500
          }}>
            All Rights Reserved © <span>ISMT IT Club 2023</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterHome;
