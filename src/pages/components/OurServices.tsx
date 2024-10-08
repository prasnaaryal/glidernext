import React from "react";
import Nurse3 from "/public/images/nurse3.png";
import { FcOk } from "react-icons/fc";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

const Services = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        py: 10,
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
        <Box
          sx={{
            py: 4,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 4,
          }}
        >
          <Box>
            {[
              "Green Card Sponsorship",
              "NCLEX_RN Preparation",
              "Study Resources",
              "Licensing Guidance",
              "Continued Support",
            ].map((service) => (
              <Typography
                key={service}
                sx={{ display: "flex", alignItems: "center", mb: 2 ,color:"black"}}
              >
                <FcOk style={{ marginRight: "8px" }} />
                {service}
              </Typography>
            ))}
          </Box>

          <Box>
            {[
              "CGFNS Filing",
              "Integrated E-Learning Platform",
              "Consulting and Advisory Services",
              "Mock Exams and Practice Assessments",
            ].map((service) => (
              <Typography
                key={service}
                sx={{ display: "flex", alignItems: "center", mb: 2,color:"black" }}
              >
                <FcOk style={{ marginRight: "8px" }} />
                {service}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Image Section */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
