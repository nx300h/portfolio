import React from "react";
import profilePicture from "/Users/user/Desktop/fst/portfolio/nd-portfolio-frontend/src/Images/ND.png"; // Adjust the path as needed

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center space-y-4"
    >
      <img
        src={profilePicture}
        alt="Noel D'Souza"
        className="w-70 h-60 rounded-full shadow-lg animate-slow-bounce"
      />
      <h1 className="text-6xl font-bold ">Hello, I'm Noel</h1>
      <p className="text-xl "> <span className="scrolling-text">A passionate Software Developer</span></p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-gray-800 rounded-full text-lg hover:bg-gray-400 transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;
