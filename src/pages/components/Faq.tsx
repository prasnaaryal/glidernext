import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaPlusCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Image from "next/image";
import { Box, Button, Typography, Grid } from "@mui/material";

const Faq = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 10 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, color: "black" }}
        >
          Frequently asked questions
        </Typography>
        <Typography variant="h6" sx={{ color: "black" }}>
        Your Quick Guide to Common Questions
        </Typography>
      </Box>

      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <Box sx={{ color: "green" }}>
                <FaPlusCircle />
                
              </Box>
             }>
            Lorem ipsum dolor sit amet consectetur. Amet tortor ornar ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <br/>
        <br/>
        <Accordion>
          <AccordionSummary
           expandIcon={
            <Box sx={{ color: "green" }}>
              <FaPlusCircle />
              
            </Box>
           }>
            
            Lorem ipsum dolor sit amet consectetur. Amet tortor ornar ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <br/>
        <br/>
        <Accordion>
          <AccordionSummary
           expandIcon={
            <Box sx={{ color: "green" }}>
              <FaPlusCircle />
              
            </Box>
           }>
            
            Lorem ipsum dolor sit amet consectetur. Amet tortor ornar ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <br/>
        <br/>
        <Accordion>
          <AccordionSummary
           expandIcon={
            <Box sx={{ color: "green" }}>
              <FaPlusCircle />
              
            </Box>
           }>
            
            Lorem ipsum dolor sit amet consectetur. Amet tortor ornar ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
