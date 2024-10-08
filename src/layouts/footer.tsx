import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Box, Typography, Divider, IconButton } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#f9f9f9", py: 6 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", md: "left" },
            mb: 4,
          }}
        >
          {/* Company Info */}
          <Box sx={{ mb: { xs: 4, md: 0 }, textAlign: { xs: "center", md: "left" } }}>
            

            
            <Box sx={{ mt: 2 ,display: "flex",alignItems: "center", justifyContent:"center"}}>
            <Typography variant="h6" sx={{ color: "#00695f", fontWeight: "bold", mb: 1 }}>
              Glider Healthcare Pvt. Ltd.
            </Typography>
              <Box sx={{ display: "flex", mb: 1 }}>
                <FaMapMarkerAlt style={{ color: "#4caf50", marginRight: "8px" }} />
                <Typography variant="body2" sx={{ color: "gray" }}>
                  New-baneshwor, Kathmandu, Nepal
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <FaEnvelope style={{ color: "#4caf50", marginRight: "8px" }} />
                <Typography variant="body2" sx={{ color: "gray" }}>
                  info@gliderhealthcare.com
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FaPhoneAlt style={{ color: "#4caf50", marginRight: "8px" }} />
                <Typography variant="body2" sx={{ color: "gray" }}>
                  +977 01 1234567
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Social Links */}
          <Box sx={{ textAlign: { xs: "center", md: "left" }, display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "gray", mr: 1 }}>
              Follow Us On:
            </Typography>
            <IconButton href="#" sx={{ color: "#4267B2", fontSize: "24px" }}>
              <FaFacebookF />
            </IconButton>
            <IconButton href="#" sx={{ color: "#E1306C", fontSize: "24px" }}>
              <FaInstagram />
            </IconButton>
            <IconButton href="#" sx={{ color: "#1DA1F2", fontSize: "24px" }}>
              <FaTwitter />
            </IconButton>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 4, borderColor: "gray.300" }} />

        {/* Footer Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
            textAlign: { xs: "center", md: "left" },
            color: "gray",
            fontSize: "0.875rem",
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            Copyright © gliderhealthcare | Developed by Brainztechs
          </Typography>
       
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
