import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Nurse from "/public/images/nurse.png";
import Image from "next/image";

const WhtWeDo = () => {
  return (
    <Box sx={{ maxWidth: "1200px", py: 10, mx: "auto" }}>
      <Grid container spacing={4}>
        {/* Image Section */}

        {/* Text Section */}
       

        <Grid item xs={12} md={5}>
          <Image
            src={Nurse}
            alt="nurse"
            style={{ objectFit: "contain", width: "25rem", height: "auto" }}
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "black" }}
          >
            What we do
          </Typography>
          <Typography variant="h4" sx={{ mb: 4, color: "black" }}>
            Leading the Way in Healthcare Education
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontFamily: "Poppins", lineHeight: 1.8, color: "black" }}
          >
            At Glider Healthcare, we're here to guide you toward a fulfilling
            and successful nursing career. Our expert team specializes in
            helping aspiring nurses like you find the perfect educational path
            and launch your journey towards making a meaningful impact in
            healthcare.
            <br />
            <br />
            Join our community of successful NCLEX-RN candidates and let us be
            your trusted partner on your journey to becoming a registered nurse.
            Your dream of making a difference in healthcare starts here. <br />
            <br />
            <Typography
              component="span"
              sx={{ color: "green", fontWeight: "bold" }}
            >
              Contact us
            </Typography>{" "}
            today to learn more about how we can assist you in achieving your
            NCLEX-RN goals.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhtWeDo;
