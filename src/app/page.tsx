"use client";

import { useState } from "react";

// Import components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {
  About,
  Projects,
  Skills,
  Experience,
  Contact,
  Resume,
} from "../components/sections";
import Certifications from "../components/sections/Certifications";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu when section is selected
  };

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "projects":
        return (
          <Projects
            expandedProjects={expandedProjects}
            toggleProject={toggleProject}
          />
        );
      case "skills":
        return <Skills />;
      case "certifications":
        return <Certifications />;
      case "resume":
        return <Resume />;
      // case "experience":
      //   return <Experience />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        handleSectionChange={handleSectionChange}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}
