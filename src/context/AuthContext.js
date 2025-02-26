/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ToastContext from "./ToastContext";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { toast } = useContext(ToastContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  const checkUserLoggedIn = async () => {
    setLoading(true); 
    try {
      const res = await fetch(`http://localhost:8000/api/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await res.json();
      if (!result.error) {
        setUser(result);
        if (location.pathname === "/login" || location.pathname === "/signup") {
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 500);
        }
      } else {
        setUser(null);
        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log("User state updated:", user);
    }
  }, [user, loading]);
  const loginUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();
      if (!result.error) {
        localStorage.setItem("token", result.token);
        setUser(result.user); 
        toast.success(`Logged in successfully!`);
        navigate("/", { replace: true });
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const registerUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8000/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();

      if (!result.error) {
        toast.success("User registered successfully! Login now.");
        navigate("/login", { replace: true }); 
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ loginUser, registerUser, user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
