import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import "./ReferralBenefits.css"; // Importing the CSS file

const ReferralBenefits = ({ onOpenModal }) => {
  const programs = [
    { category: "Product Management", courses: [
        { name: "Professional Certificate Program in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000" },
        { name: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000" },
      ]},
    { category: "Business Analytics", courses: [
        { name: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
        { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
      ]},
    { category: "Digital Transformation", courses: [
        { name: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
        { name: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
      ]},
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL PROGRAMS");
  const [showAll, setShowAll] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  const filteredCourses = selectedCategory === "ALL PROGRAMS"
    ? programs.flatMap((program) => program.courses)
    : programs.find((program) => program.category === selectedCategory)?.courses || [];

  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 8);

  return (
    <Box className="referral-benefits-container">
      <Container>
        <Typography variant="h4" className="section-title">
          What Are The Referral Benefits?
        </Typography>
        <Grid2 container>
          <Grid2 item xs={12} md={3}>
            <Paper className="sidebar">
              <List>
                <ListItem button onClick={() => handleCategoryClick("ALL PROGRAMS")}>
                  <ListItemText primary="ALL PROGRAMS" />
                </ListItem>
                {programs.map((program, index) => (
                  <ListItem button key={index} onClick={() => handleCategoryClick(program.category)}>
                    <ListItemText primary={program.category} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid2>
          <Grid2 item xs={12} md={9}>
            <Paper className="table-container">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Programs</TableCell>
                    <TableCell align="right">Referrer Bonus</TableCell>
                    <TableCell align="right">Referee Bonus</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedCourses.map((course, index) => (
                    <TableRow key={index}>
                      <TableCell>{course.name}</TableCell>
                      <TableCell align="right">{course.referrerBonus}</TableCell>
                      <TableCell align="right">{course.refereeBonus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
            <Box className="button-container">
              {!showAll && filteredCourses.length > 8 && (
                <Button variant="contained" color="primary" onClick={handleShowMore}>
                  See More
                </Button>
              )}
              <Button variant="contained" color="primary" onClick={onOpenModal} className="refer-button">
                Refer Now
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default ReferralBenefits;
