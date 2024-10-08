import React from "react";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 10, px: 4 }}>
      {/* Flexbox with increased gap between form and map */}
      <Grid container spacing={6} alignItems="flex-start">
        {/* Contact Form */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color:"black" }}>
            CONTACT US
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem", mb: 4 , color:"black" }}>
            Ask Us Anything - We’d Love to Hear from You!
          </Typography>

          <form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                sx={{ borderRadius: "4px" }}
              />
              <TextField
                fullWidth
                label="Your E-mail"
                type="email"
                variant="outlined"
                sx={{ borderRadius: "4px" }}
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                sx={{ borderRadius: "4px" }}
              />
              <TextField
                fullWidth
                label="Write a Message"
                variant="outlined"
                multiline
                rows={5}
                sx={{ borderRadius: "4px" }}
              />
              <Button
                fullWidth
                variant="contained"
                color="warning"
                sx={{ py: 2, fontWeight: "bold" }}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </form>
        </Grid>

        {/* Google Map Embed */}
        <Grid item xs={12} md={8}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.761432793425!2d85.3136214145376!3d27.69830298279439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd5ff74017%3A0x2f1e4d6f2e74d373!2sApollo%20International%20College!5e0!3m2!1sen!2snp!4v1601329639945!5m2!1sen!2snp"
            sx={{
              width: "100%",
              height: 400,
              border: 0,
              borderRadius: "8px",
              boxShadow: 3,
            }}
            allowFullScreen
            loading="lazy"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
