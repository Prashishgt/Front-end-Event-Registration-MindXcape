import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CountDown from "../../components/CountDown";
import Bg from "../../asset/bg2.jpg";
import Registration from "../../components/Registration";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const calculateTimeLeft = () => {
    const difference = +new Date("2023-05-11T18:30:00+05:30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Box
      height="100vh"
      width="auto"
      display="flex"
      justifyContent="center"
      style={{
        backgroundImage: `url("${Bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        width="80%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <img src="https://www.ismt.edu.np/Frontend/loader-img.webp" alt="" />
        </Box>
        <Box>
          <Typography variant="h1" fontSize={{ lg: "68", md:"50", sm:"40", xs:"20", xxs:"20"}}>Ideathon 2023</Typography>
        </Box>
        <Box>
          <Typography variant="h2">11th May</Typography>
        </Box>
        <Box>
          <CountDown timeLeft={timeLeft} />
        </Box>
        <Box>
          <IconButton size="large" onClick={() => navigate('/registration')}>
            Apply
          </IconButton>
        </Box>        
      </Box>
    </Box>
  );
};

export default Banner;
