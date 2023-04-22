import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dummy from '../asset/bg-ideathon.png';
import { Link } from "react-router-dom";
import { AiFillCalendar } from "react-icons/ai";
import { Box } from "@mui/material";
import { shades } from "../theme";

export default function EventCard() {

  return (
    <Card
      sx={{
        maxWidth: "345px",
        borderRadius: "10px",
        height:"300px"
      }}
    >
      <CardMedia sx={{ height: "140px", objectFit:"fill" }}  image={Dummy} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="subtitle" component="div">
          Venue: ISMT Kathmandu
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          width="40%"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <AiFillCalendar color={shades.secondary[500]} />
          <Typography variant="subtitle">03-03-2023</Typography>
        </Box>
        <Button size="small"><Link to="/eventDetails"> Register Now </Link></Button>
      </CardActions>
    </Card>
  );
}
