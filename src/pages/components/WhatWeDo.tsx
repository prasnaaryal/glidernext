import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Nurse2 from "/public/images/nurse2.png";
import Image from "next/image";

const WhtWeDo = () => {
  return (
    <Box sx={{ maxWidth: "1200px", py: 10, mx: "auto"}}>
      <Grid container spacing={4}>
        {/* Image Section */}
       

        {/* Text Section */}
        <Grid item xs={12} md={7}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 ,color:"black"}}>
            WHO WE ARE
          </Typography>
          <Typography variant="h4" sx={{ mb: 4, color:"black" }}>
            Empowering Your Nursing Journey
          </Typography>

          <Typography variant="body1" sx={{ fontFamily: "Poppins", lineHeight: 1.8, color:"black" }}>
            At Glider Healthcare, we're here to guide you toward a fulfilling and successful nursing career.
            Our expert team specializes in helping aspiring nurses like you find the perfect educational
            path and launch your journey towards making a meaningful impact in healthcare.
            <br />
            <br/>
            We've been the trusted partner for countless nursing students, helping them navigate the complex
            world of nursing education. With our experience and dedication, you'll be equipped to succeed
            in the dynamic field of healthcare.<br/>
            <br />
            <Typography component="span" sx={{ color: "green", fontWeight: "bold" }}>
              Contact us
            </Typography>{" "}
            today to learn more about how we can assist you in achieving your NCLEX-RN goals.
          </Typography>
        </Grid>

        <Grid item xs={12} md={5}>
          <Image src={Nurse2} alt="nurse"  style={{ objectFit: "contain" ,width:"25rem", height:"auto"}} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhtWeDo;
