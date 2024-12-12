import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ProjectsSection from "./Components/ProjectsSection";
import SkillsSection from "./Components/SkillsSection";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="  ">
        <Navbar />
      
      </div>
   
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/ProjectsSection" element={<ProjectsSection />} />
        <Route path="/SkillsSection" element={<SkillsSection />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
