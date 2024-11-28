import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';


export default function FAQLists () {
  const faqs = [
    "Frequently asked questions",
    "Frequently asked questions",
    "Frequently asked questions",
    "Frequently asked questions",
    "Frequently asked questions",
  ];

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
      {faqs.map((question, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            width='100%'

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
    </Box>
  );
}
