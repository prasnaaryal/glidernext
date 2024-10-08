import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FcOk } from "react-icons/fc";
import Earth from "/public/images/earth.png"; // Make sure to replace this with the correct path to the image
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 10 }}>
      {/* Section Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" ,color:"black"}}>
          WHY CHOOSE US
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, fontWeight: "medium",color:"black" }}>
          Guiding the Future of Healthcare
        </Typography>
      </Box>

      {/* Grid Section */}
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={5}>
          <Image
            src={Earth}
            alt="Earth"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>

        {/* Service List Section */}
        <Grid item xs={12} md={7}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.25rem",
                color:"black"
              }}
            >
              <FcOk style={{ marginRight: "8px" }} />
              One stop-shop for NCLEX-RN, PTE/IELTS Preparation Classes.
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.25rem"
                ,color:"black"
              }}
            >
              <FcOk style={{ marginRight: "8px" }} />
              Virtual NCLEX classes, live and recorded classes.
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.25rem",
                color:"black"
              }}
            >
              <FcOk style={{ marginRight: "8px" }} />
              Premium processing of US immigration and visa with average
              approval of less than 2 months.
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.25rem"
                ,color:"black"
              }}
            >
              <FcOk style={{ marginRight: "8px" }} />
              100% placements in US government-affiliated hospitals, as well as
              private and public institutions.
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.25rem"
                ,color:"black"
              }}
            >
              <FcOk style={{ marginRight: "8px" }} />
              Transition support including food and accommodation.
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.25rem"
                ,color:"black"
              }}
            >
              <FcOk style={{ marginRight: "8px" }} />
              IT training and placement for eligible and interested dependents.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
