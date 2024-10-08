import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const EmailBox = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        backgroundColor: "#34826A",
        py: 8,
        px: 4,
        borderRadius: 2,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 4,
      }}
    >
      {/* Text Section */}
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography
          variant="h6"
          sx={{ color: "white", mb: 2, fontWeight: "medium", fontSize: "1rem" }}
        >
          Start Your Journey
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.25rem" }}
        >
          Establish specific, measurable goals that will guide you on your
          journey.
        </Typography>
      </Box>

      {/* Email Input Section */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Your Email"
          sx={{
            width: { xs: "100%", md: "450px" },
            backgroundColor: "white",
            borderRadius: 1,
          }}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E9A727",
            color: "white",
            width: "200px",
            height: "50px",
            borderRadius: "8px",
          }}
        >
          Enroll Now
        </Button>

        <Typography sx={{ color: "white", mt: 1, fontSize: "0.875rem" }}>
          Join Us Today
        </Typography>
      </Box>
    </Box>
  );
};

export default EmailBox;
