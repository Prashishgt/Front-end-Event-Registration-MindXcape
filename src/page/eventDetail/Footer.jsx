import { Box, IconButton, Typography, Divider } from "@mui/material";
import React from "react";
import { BsDiscord } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Box
      
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box  width="80%" padding="20px">
        <Box display="flex" justifyContent="space-between" >
          <Box >
            <img
              style={{ borderRadius: "50%", height: "60px" }}
              src="https://www.ismt.edu.np/Frontend/assets/images/logos/logo-ismt.png"
              alt=""
            /> 
            <Typography variant="h3" >Ideathon 2023</Typography>
            <Typography variant="h4">
              <span>Email :</span>support@ismt.edu.np
            </Typography>
            <Typography>
              <span>Contact :</span> +977-9813246717, +977 9813246818
            </Typography>
          </Box>
          <Box>
            <Box>              
              <IconButton>
                <AiFillFacebook />
              </IconButton>
              <IconButton>
                <AiFillInstagram />
              </IconButton>
              <IconButton>
                <BsDiscord />
              </IconButton>
            </Box>
            <Box>
              <Typography>Event Summary</Typography>
              <Typography>
                Mode: <span>In-Person</span>
              </Typography>
              <Typography>
                Venue: <span>ISMT Block-A</span>
              </Typography>
              <Typography>
                Date: <span>21th May, 2023</span>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box margin="10px">
          <Divider />
          <Typography margin="10px" variant="h3" sx={{
            textAlign:"center"
          }}>
            All Rights Reserved © <span>ISMT IT Club 2023</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
