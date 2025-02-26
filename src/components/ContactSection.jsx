import React from 'react';
import { Box, Container, Typography, Button, Grid2, Link } from '@mui/material';
import styled from '@emotion/styled';

const GetInTouchBox = styled(Box)`
  background-color: #007bff;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FooterBox = styled(Box)`
  background-color: #333;
  color: white;
  padding: 40px 0;
`;

const ContactSection = () => {
  return (
    <>
      <GetInTouchBox>
        <Container>
          <Typography variant="h5" gutterBottom>
            Want to delve deeper into the program?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Share your details to receive expert insights from our program team!
          </Typography>
          <Button variant="contained" color="primary">
            Get in touch
          </Button>
        </Container>
      </GetInTouchBox>
      
      <FooterBox>
        <Container>
          <Grid2 container spacing={4}>
            <Grid2 item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>Programs</Typography>
              {['Data Science & AI', 'Product Management', 'Business Analytics', 'Digital Transformation', 'Business Management', 'Project Management', 'Strategy & Leadership', 'Senior Management', 'Fintech'].map((program) => (
                <Typography key={program} variant="body2">
                  {program}
                </Typography>
              ))}
            </Grid2>
            <Grid2 item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>Contact Us</Typography>
              <Typography variant="body2">Email us (For Data Science Queries): AAA@ABC.com</Typography>
              <Typography variant="body2">Email us (For Product Management Queries): XYZ@ABC.com</Typography>
              <Typography variant="body2">Data Science Admission Helpline: +91 XXXXXXXXXX (9 AM - 7 PM)</Typography>
              <Typography variant="body2">Product Management Admission Helpline: +91 XXXXXXXXXX</Typography>
              <Typography variant="body2">Enrolled Student Helpline: +91 XXXXXXXXXXX</Typography>
              <Typography variant="body2">Office Address: NEW DELHI </Typography>
            </Grid2>
            <Grid2 item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>Why ABC</Typography>
              <Typography variant="body2">Follow Us</Typography>
              <Box>
                <Link href="#" color="inherit">LinkedIn</Link>
                <Link href="#" color="inherit" style={{ marginLeft: 8 }}>Facebook</Link>
                <Link href="#" color="inherit" style={{ marginLeft: 8 }}>Twitter</Link>
                <Link href="#" color="inherit" style={{ marginLeft: 8 }}>Instagram</Link>
              </Box>
            </Grid2>
            <Grid2 item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>ABC</Typography>
              {['About', 'Career', 'Blog', 'Admission Policy', 'Referral Policy', 'Privacy Policy', 'Terms of Service', 'Master FAQs'].map((item) => (
                <Typography key={item} variant="body2">
                  {item}
                </Typography>
              ))}
            </Grid2>
          </Grid2>
          <Box textAlign="center" mt={4}>
            <Typography variant="body2">© 2024 ABC.</Typography>
          </Box>
        </Container>
      </FooterBox>
    </>
  );
};

export default ContactSection;