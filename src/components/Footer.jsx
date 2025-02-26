import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import styled from '@emotion/styled';

const FooterBox = styled(Box)`
  text-align: center;
  padding: 20px 0;
  background-color: #e9f4ff;
`;

const Footer = () => (
  <FooterBox>
    <Container>
      <Typography variant="body1">Want to know more? Visit our Help Center.</Typography>
    </Container>
  </FooterBox>
);

export default Footer;