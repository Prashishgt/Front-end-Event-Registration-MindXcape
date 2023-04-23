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

export default function EventCard({ venue, body, date }) {
  
  return (

   
    <Card
      sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",        
        width: "300px",
        borderRadius: "10px",
        height:"380px",
      
       
      }}
    >
      <CardMedia sx={{ height: "150px", objectFit:"fill" }}  image={(venue === "Comming Soon") ? "" : Dummy} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="subtitle" component="div" textAlign="Center">
          {venue}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" textAlign="center">
          {body}
        </Typography>
      </CardContent>
      {
        venue === "Comming Soon"?
      (
        <Box>
          
        </Box>
      ):
      (
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
          <Typography variant="subtitle">{date}</Typography>
        </Box>
        <Button size="small"><Link to="/eventDetails" style={{
          textDecoration:"none", 
          color:shades.secondary[500],
          fontWeight:700,
          fontSize:"13px"
        }}> Register Now </Link></Button>          
        
      </CardActions>
      )
      }
    </Card>
  );
}
