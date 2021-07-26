import React, { useState, useEffect } from "react";
import { About } from "../components/homepage/About";
import { Contact } from "../components/homepage/Contact";
import { Features } from "../components/homepage/Features";
import { Header } from "../components/homepage/Header";
import { Navigation } from "../components/homepage/Navigation";
import { Navbar } from "../components/homepage/Navbar";
import { Services } from "../components/homepage/Services";
import { Team } from "../components/homepage/Team";
import { Testimonials } from "../components/homepage/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
};

export default Homepage;
