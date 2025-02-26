import './App.css';
import Home from "./pages/HomePage";
import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage'


function App() {

  return (

    <div className="App">
      {/* <Header/>
      <HeroSection /> */}
      <ToastContextProvider>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
    </div>
  );
}

export default App;
