import React from "react";
import Nurse3 from "/public/images/nurse3.png";
import { FcOk } from "react-icons/fc";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

const Services = () => {
  const services = [
    { name: "Green Card Sponsorship" },
    { name: "CGFNS Filing" },
    { name: "Integrated E-Learning Platform" },
    { name: "Consulting and Advisory Services" },
    { name: "Mock Exams and Practice Assessments" },
  ];

  const moreservices = [
    { name: "NCLEX_RN Preparation" },
    { name: "Study Resources" },
    { name: "Licensing Guidance" },
    { name: "Continued Support" },
  ];

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        py: 10,
        px: 2,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 8,
      }}
    >
      {/* Text Section */}
      <Box sx={{ m: 4 }}>
        <Typography
          variant="h5"
          sx={{ color: "black", mb: 4, fontWeight: "bold" }}
        >
          OUR SERVICES
        </Typography>
        <Typography variant="h4" sx={{ mb: 4, color: "black" }}>
          Your Path to Success Starts Here
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontFamily: "Poppins", lineHeight: 1.8, color: "black" }}
        >
          At Glider HealthCare, we understand that the journey to becoming a
          registered nurse is both challenging and rewarding. Our dedicated team
          of experienced nursing educators and mentors is here to support you
          every step of the way. We offer a comprehensive range of services
          designed to help you achieve your dream of becoming a licensed RN.
        </Typography>

        {/* Services List */}
        <Grid container spacing={2} sx={{ py: 4 }}>
          <Grid item xs={12} sm={6}>
            {moreservices.map((moreservice, index) => (
              <Typography
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  color: "black",
                }}
              >
                <FcOk style={{ marginRight: "8px" }} />
                {moreservice.name}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            {services.map((service, index) => (
              <Typography
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  color: "black",
                }}
              >
                <FcOk style={{ marginRight: "8px" }} />
                {service.name}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>

      {/* Image Section */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image
          src={Nurse3}
          alt="nurse"
          width={400}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Services;
