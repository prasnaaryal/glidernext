import React from "react";
import Earth from "../../../assets/images/earth.png";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import KathmanduImage from "/public/images/Rectangle 200.png";
import PokharaImage from "/public/images/Rectangle 201.png";
import NepalgunjImage from "/public/images/Rectangle 202 (1).png";
import Image from "next/image";
import { Box, Button, Typography, Grid } from "@mui/material";

const OurSeminars = () => {
  const seminars = [
    {
      name: "Kathmandu",
      image: KathmanduImage,
    },
    {
      name: "Pokhara",
      image: PokharaImage,
    },
    {
      name: "Nepalgunj",
      image: NepalgunjImage,
    },
    {
      name: "Kathmandu",
      image: KathmanduImage,
    },
    {
      name: "Pokhara",
      image: PokharaImage,
    },
    {
      name: "Nepalgunj",
      image: NepalgunjImage,
    },
  ];

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 10 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 ,color:"black"}}>
          OUR SEMINARS
        </Typography>
        <Typography variant="h6" sx={{color:"black"}}>
          A Glimpse into our Seminar Experience
        </Typography>
      </Box>

   
       

        {/* Seminar Items */}
        <Grid item xs={12} sm={10}>
          <Grid container spacing={4}>
            {seminars.map((seminar, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Image
                    src={seminar.image}
                    alt={seminar.name}
                    style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                  />
                  <Typography sx={{ mt: 2, fontWeight: "medium",color:"black" }}>
                    {seminar.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

       
      
    </Box>
  );
};

export default OurSeminars;
