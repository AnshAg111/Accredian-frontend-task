import React, { useState } from "react";
import HeroSection from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ReferralBenefits from "../components/ReferralBenefits";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ReferModal from "../components/ReferModal";
import ContactSection from "../components/ContactSection";
import { useContext } from "react";
import ToastContext from "../context/ToastContext";

const Home = () => {
  const { toast } = useContext(ToastContext);
  
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    courseID: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setForm({
      referrerName: "",
      referrerEmail: "",
      refereeName: "",
      refereeEmail: "",
      courseID: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/referrals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Referral submitted successfully!");
        handleClose();
      } else {
        toast.error(result.error || "Failed to submit referral.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting referral.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <HeroSection onOpenModal={handleOpen} />
      <HowItWorks />
      <ReferralBenefits onOpenModal={handleOpen} />
      <FAQ />
      <Footer />
      <ContactSection />
      <ReferModal
        open={open}
        onClose={handleClose}
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Home;
