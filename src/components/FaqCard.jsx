import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {BsFillArrowDownSquareFill} from 'react-icons/bs';
import { shades } from '../theme';


const FaqCard = ({ question, answer }) => {
  return (
    <Accordion sx={{
      margin:"5px",
      width:"70%"
    }}>
        <AccordionSummary
          expandIcon={<BsFillArrowDownSquareFill color={shades.secondary[400]} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{
            color:shades.secondary[500],
            fontWeight:"500",
            fontSize:"20px"
          }}>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography 
            sx={{
            color:shades.primary[500],
            fontWeight:"400",
            fontSize:"15px"
          }}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default FaqCard