import React, { useState, useContext, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import "./Header.css"; 
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { user, setUser, loading } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  useEffect(() => {
    console.log("Header re-rendered. User:", user);
  }, [user]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Box className="logo-container">
          <Typography variant="h6" className="logo-text">accredian</Typography>
          <Typography variant="body2" className="logo-subtext">credentials that matter</Typography>
        </Box>

        {!loading && user ? (
          <>
            <Box className="nav-links">
              <Button className="nav-button courses-button" endIcon={<KeyboardArrowDownIcon />} onClick={handleClick}>
                Courses
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Course 1</MenuItem>
                <MenuItem onClick={handleClose}>Course 2</MenuItem>
                <MenuItem onClick={handleClose}>Course 3</MenuItem>
              </Menu>

              <Button className="nav-button">Refer & Earn</Button>
              <Button className="nav-button">Resources</Button>
              <Button className="nav-button">About Us</Button>
            </Box>
            <Box className="auth-buttons">
              <Button
                variant="contained"
                className="signup-button"
                onClick={() => {
                  setUser(null);
                  localStorage.clear();
                  toast.success("Logged out.");
                  navigate("/login", { replace: true });
                }}
              >
                Logout
              </Button>
            </Box>
          </>
        ) : (
          <Box className="auth-buttons">
            <Button variant="outlined" className="login-button" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button variant="contained" className="signup-button" onClick={() => navigate("/signup")}>
              Try for free
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
