import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
// import ReferralModal from "./ReferralModal";
import styled from '@emotion/styled';
import classes from './Hero.module.css';

const HeroSection = ({ onOpenModal }) => {
  const HeroBox = styled(Box)`
  padding: 50px 0;
  background-color: #e0f7fa;
  text-align: center;
`;
  return (
    <HeroBox>
    <Container>
      <Typography variant="h3" gutterBottom className={classes.typography}>
      Let’s Learn & Earn
      </Typography>
      <Typography variant="h6" gutterBottom className={classes.typographyh6}>
      Get a chance to win up to <span className={classes.texthighlight}>Rs. 15,000</span>
      </Typography>
      <div className={classes.imgcontainer}>
        <img
          src="/Screenshot.png"
          alt="Refer & Earn"
          className={classes.image}
        />
      </div>
      <Button variant="contained" color="primary" className={classes.button} onClick={onOpenModal}>
        Refer Now
      </Button>
    </Container>
  </HeroBox>
  );
};

export default HeroSection;
