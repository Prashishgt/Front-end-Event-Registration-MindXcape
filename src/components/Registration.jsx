import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { Box, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

export default function Registration() {

  const [message, setMessage] = useState("")
  const [error, setError] = useState(false);
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    semester: "",
    expectation: ""
  });

  const handleOnChange = (e) => {
 
    const { name, value } = e.target;
    

    console.log(name);
    console.log(value);
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const { firstName, lastName, email, contactNo, semester, expectation } = register;
  const handleRegister = (e) => {
    e.preventDefault();

    const validIsmtMail = /[a-z0-9._%+-]+@ismt\.edu\.np$/;
    if (!(firstName && lastName && email && contactNo && semester && expectation)){
      setMessage("All input fields must be filled");    
    }
    else if (!validIsmtMail.test(email)){
      setMessage("ISMT email must be used for registration");
      setError(true)
    }
    else {
      axios.post("", register)
      .then((res) => {

      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  return (
    <Box 
      height="100vh"
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent="center"
      alignItems="center"
      margin="10px"
    >  
    <Typography variant="h3" gutterBottom>
        Registration Form
      </Typography>
      <Grid width="60%" container spacing={4}>
        <Grid item xs={12} >
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="filled"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="filled"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={error}
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="example@ismt.edu.np"
            variant="filled"
            onChange={handleOnChange}
          />
        </Grid>        
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="contactNo"
            name="contactNo"
            label="Contact Number"
            fullWidth          
            variant="filled"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="semester"
            name="semester"
            label="Current Semester"
            fullWidth
            variant="filled"
            onChange={handleOnChange}
          />
        </Grid>        
        <Grid item xs={12}>
          <TextField
            required
            id="expectation"
            name="expectation"
            label="Expectation"
            placeholder="What is your motivation/expectation from this event?"
            fullWidth
            
            variant="filled"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="event"
            name="event"
            label="Event"
            placeholder="Which event are you registering for?"
            fullWidth
            
            variant="filled"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
            
            <Button onClick={handleRegister} variant="contained" fullWidth>Register</Button>

        </Grid>
      </Grid>
    
    </Box>
  );
}