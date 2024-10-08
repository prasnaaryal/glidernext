import React from "react";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Call from "/public/images/call.png"; // If using Next.js
import CallIcon from "@mui/icons-material/Call";
import Logo from "/public/images/logo.png"; // Update the path to your logo

const pages = ["Home", "About Us", "Services", "Gallery", "FAQ", "Contact Us"];

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={Logo} alt="Logo" width={80} height={50} />
          </Box>

          {/* Navigation Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page) => (
              <Button key={page} sx={{ color: "#333", fontWeight: "bold" }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* Contact & Login Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Contact Information */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Image src={Call} alt="call" width={40} height={40} />
              <Typography sx={{ color: "#333", fontWeight: "bold" }}>
                +977-9812345678
              </Typography>
            </Box>

            {/* Login Button */}
            <Button
              sx={{
                color: "#2E7D32",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
