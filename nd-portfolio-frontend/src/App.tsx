import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <Navbar />
      <div className="flex-grow">
        <Home />
        <About />
        <Projects />
        <CV />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
