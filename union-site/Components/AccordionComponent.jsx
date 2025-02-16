import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { FAQ } from "../src/text.json";

export default function AccordionComponent({ language }) {
  return (
    <div>
      {FAQ.Points[language].map((point) => {
        return (
          <Accordion key={point[0]} sx={{margin:"2vh"}}>
            <AccordionSummary
              
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{fontFamily:"Inter, serif",  fontWeight: 'bold' }} component="span">{point[0]}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"rgb(224, 222, 222)"}}>
              <Typography sx={{fontFamily: "Inter, serif"}}>
               {point[1]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
