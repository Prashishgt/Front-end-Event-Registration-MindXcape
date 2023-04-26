import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dummy from "../asset/bg-ideathon.png";
import { Link } from "react-router-dom";
import { AiFillCalendar } from "react-icons/ai";
import { Box } from "@mui/material";
import { shades } from "../theme";

export default function EventCard({ name, venue, body, date }) {
  
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "320px",
        borderRadius: "10px",
        height: "400px",
      }}
    >
      <CardMedia
        sx={{ height: "150px", objectFit: "fill" }}
        image={venue === "Comming Soon" ? "" : Dummy}
        title="Event Name"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          color="black"
          component="div"
          textAlign="left"
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          color="grey"
          fontWeight="600"
          component="div"
          textAlign="left"
        >
          Venue: {venue}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="left"
        >
          {body}
        </Typography>
      </CardContent>
      {venue === "Comming Soon" ? (
        <Box></Box>
      ) : (
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
            <Typography variant="subtitle1" fontWeight={600}>{date}</Typography>
          </Box>
          {
            body === "Comming Soon"? <></> :
          
          <Button size="small">
              <Link
                to="/eventDetails"
                style={{
                  textDecoration: "none",
                  color: shades.secondary[500],
                  fontWeight: 700,
                  fontSize: "13px",
                }}
              >                
                Register Now
              </Link>
            </Button> 
          }         
        </CardActions>
      )}
    </Card>
  );
}
