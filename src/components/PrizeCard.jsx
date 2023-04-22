import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dummy from "../asset/dummy.jpg";
import { useNavigate } from "react-router-dom";
import { AiFillCalendar } from "react-icons/ai";
import { Avatar, Box } from "@mui/material";

export default function PrizeCard() {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "10px",
        zIndex:'50'
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          bgcolor: "#f2f2f2",
        }}
      >
        <Avatar
          sx={{
            width: "80px",
            height: "80px",
          }}
        >
          1st
        </Avatar>
      </Box>
      <CardContent sx={{
        height:'200px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
      }}>
        <Typography gutterBottom variant="subtitle" component="div">
          Venue: ISMT Kathmandu
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
