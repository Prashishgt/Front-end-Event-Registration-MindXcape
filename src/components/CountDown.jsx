import { Box, Typography } from "@mui/material";
import React from "react";
import { shades } from "../theme";

const CountDown = ({ timeLeft }) => {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center" padding="10px">
        <Typography variant="h2" padding="2px" color={shades.secondary[600]}>
          {timeLeft.days}
          <span> : </span>
        </Typography>
        <Typography variant="h2" padding="2px" color={shades.secondary[600]}>
          {timeLeft.hours}
          <span> : </span>
        </Typography>
        <Typography variant="h2" padding="2px" color={shades.secondary[600]}>
          {timeLeft.minutes}
          <span> : </span>
        </Typography>
        <Typography variant="h2" padding="2px" color={shades.secondary[600]}>
          {timeLeft.seconds}
        </Typography>
      </Box>
      <Box width="100%" display="flex" alignItems="center">
        <Typography variant="h3" margin="5px" color={shades.primary[600]}>Days</Typography>
        <Typography variant="h3" margin="5px" color={shades.primary[600]}>Hours</Typography>
        <Typography variant="h3" margin="5px" color={shades.primary[600]}>Minutes</Typography>
        <Typography variant="h3" margin="5px" color={shades.primary[600]}>Seconds</Typography>
       
      </Box>
    </Box>
  );
};

export default CountDown;
