import React from "react";
import Landing from "/public/images/landing.png";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";

const Banner = () => {
  return (
    <Box position="relative" height="80vh" overflow="hidden">
      {/* Background image container */}
      <Box height="100%" width="100%" position="relative">
        <Image
          src={Landing}
          alt="landing"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      {/* Overlay Content */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        ml={10}
        mb={4}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          Empowering Your Nursing Journey
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", mt: 2, fontSize: "1.25rem" }}
        >
          We're here for you from education to employment. Your trusted partner
          in achieving your nursing dreams.
        </Typography>

        <Box mt={4}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#E9A727", color: "white", width: "13rem", height: "3rem" }}
          >
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
