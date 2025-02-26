import React from "react";
import { Box, Typography, Container, Grid2 } from "@mui/material";
import "./HowItWorks.css"; // Importing the CSS file

const HowItWorks = () => (
  <Box className="how-it-works-container">
    <Container>
      <Typography variant="h4" className="section-title">
        How Does It Work?
      </Typography>
      <Grid2 container spacing={3} justifyContent="center" className="steps-container">
        <Grid2 item xs={12} sm={4}>
          <Box className="step-box">
            <Typography variant="h6" className="step-title">Step 1</Typography>
            <Typography className="step-description">Refer a friend</Typography>
          </Box>
        </Grid2>
        <Grid2 item xs={12} sm={4}>
          <Box className="step-box">
            <Typography variant="h6" className="step-title">Step 2</Typography>
            <Typography className="step-description">Your friend joins</Typography>
          </Box>
        </Grid2>
        <Grid2 item xs={12} sm={4}>
          <Box className="step-box">
            <Typography variant="h6" className="step-title">Step 3</Typography>
            <Typography className="step-description">You earn rewards</Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  </Box>
);

export default HowItWorks;
