import React from "react";
import profilePicture from "/Users/user/Desktop/fst/portfolio/nd-portfolio-frontend/src/Images/ND.jpg"; // Adjust the path as needed

const Header: React.FC = () => {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-center space-y-4">
      <img
        src={profilePicture}
        alt="Noel D'Souza"
        className="w-32 h-32 rounded-full shadow-lg"
      />
      <h1 className="text-6xl font-bold">Hello, I'm Noel</h1>
      <p className="text-xl">A passionate Software Developer</p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-gray-800 rounded-full text-lg hover:bg-gray-300 transition duration-300"
      >
        View My Work
      </a>
    </header>
  );
};

export default Header;
