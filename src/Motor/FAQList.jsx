import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function FAQLists () {
  const faqs = [
    "Frequently asked questions",
    "Frequently asked questions",
    "Frequently asked questions",
    "Frequently asked questions",
    "Frequently asked questions",
  ];

  return (
    <div >
      {faqs.map((question, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            width='150px'

          >
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
              This is the answer to the question. You can replace this text with actual FAQ answers.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
