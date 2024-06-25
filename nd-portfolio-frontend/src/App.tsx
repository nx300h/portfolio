import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop'; 

const App: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 min-h-screen text-white">
      <Navbar />
      <div className="flex-grow">
        <Home />
        <About />
        <Projects />
        <CV />
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
