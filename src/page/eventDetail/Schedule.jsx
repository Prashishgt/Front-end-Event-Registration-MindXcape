import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ScheduleCard from "../../components/ScheduleCard";

const Schedule = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">
          Event <span style={{ color: "#e2e2e2" }}>Schedule</span>
        </Typography>
        <Typography variant="h3">11th May, 2023</Typography>
      </Box>
      <Divider
        sx={{
          width: "84%",
          margin:'20px',
          color:'black'
        }}
      />
      <Box width="100%">
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Box>
    </Box>
  );
};

export default Schedule;
