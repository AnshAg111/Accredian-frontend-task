import React, { useState, useContext } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom"; 
import "./LoginSignup.css";

import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const Login = () => {
  const { toast } = useContext(ToastContext);
  const { loginUser } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error("Please enter all the required fields!");
      return;
    }

    loginUser(credentials);
  };

  return (
    <Container className="login-container">
      <Box className="login-box">
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          name="email"
          id="email"
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
          type="password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          className="activate-btn"
          fullWidth
          onClick={handleSubmit}
        >
          Login
        </Button>

        <Typography className="already-registered">
          Don't have an account?{" "}
          <Link to="/signup" className="login-link">
            Create One
          </Link>{" "}
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
