import React, { useContext, useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import "./LoginSignup.css";

import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const Signup = () => {
  const { toast } = useContext(ToastContext);
  const { registerUser } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !credentials.email ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      toast.error("please enter all the required fields!");
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      toast.error("password do not match!");
      return;
    }

    const userData = { ...credentials, confirmPassword: undefined };
    registerUser(userData);
  };
  return (
    <Container className="login-container">
      <Box className="login-box">
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          id="email"
          name="email"
          required
          placeholder="johndoe@example.com"
          value={credentials.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          name="password"
          id="password"
          required
          placeholder="Enter password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <TextField
          label="Confirm Password"
          fullWidth
          margin="normal"
          name="confirmPassword"
          id="confirmPassword"
          required
          placeholder="Re-enter Password"
          value={credentials.confirmPassword}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          className="activate-btn"
          fullWidth
          onClick={handleSubmit}
        >
          Register
        </Button>

        <Typography className="already-registered">
          Already have an account ?{" "}
          <a href="/login" className="login-link">
            Login
          </a>{" "}
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
