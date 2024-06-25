// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center", // Center the section in the viewport
      });
    }
  };

  return (
    <nav className="p-6 bg-gray-800 bg-opacity-80 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Noel D'Souza</h1>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => handleNavLinkClick("home")}
              className="hover:underline focus:outline-none"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavLinkClick("about")}
              className="hover:underline focus:outline-none"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavLinkClick("projects")}
              className="hover:underline focus:outline-none"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavLinkClick("cv")}
              className="hover:underline focus:outline-none"
            >
              CV
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavLinkClick("contact")}
              className="hover:underline focus:outline-none"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
