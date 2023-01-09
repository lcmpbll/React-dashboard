import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions'/>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet urna ante, in porta lacus interdum eget. Nulla facilisi. Maecenas ligula augue, egestas sed elit et, faucibus egestas nisi. In
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet urna ante, in porta lacus interdum eget. Nulla facilisi. Maecenas ligula augue, egestas sed elit et, faucibus egestas nisi. In
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Our favorite important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet urna ante, in porta lacus interdum eget. Nulla facilisi. Maecenas ligula augue, egestas sed elit et, faucibus egestas nisi. In
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            One more question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet urna ante, in porta lacus interdum eget. Nulla facilisi. Maecenas ligula augue, egestas sed elit et, faucibus egestas nisi. In
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            A final important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet urna ante, in porta lacus interdum eget. Nulla facilisi. Maecenas ligula augue, egestas sed elit et, faucibus egestas nisi. In
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ;