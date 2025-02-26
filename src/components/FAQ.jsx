import React from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQ.css"; // Importing the CSS file

const FAQ = () => {
  const faqs = [
    {
      question: "How do I refer a friend?",
      answer:
        'You can refer a friend by clicking the "Refer Now" button and filling out the form.',
    },
    {
      question: "What rewards do I get?",
      answer: "You can earn up to Rs. 15,000 based on the number of successful referrals.",
    },
    {
      question: "When will I receive my referral reward?",
      answer: "Your referral reward will be credited within 30 days after your referral completes the process.",
    },
    {
      question: "Can I refer multiple friends?",
      answer: "Yes! There is no limit to the number of friends you can refer.",
    },
  ];

  return (
    <Box className="faq-container">
      <Container>
        <Typography variant="h4" className="faq-title">
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} className="faq-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="faq-summary">
              <Typography className="faq-question">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-answer">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQ;
