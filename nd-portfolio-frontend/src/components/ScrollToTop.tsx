
import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`${isVisible ? "block" : "hidden"} fixed bottom-5 right-5`}>
      <button
        onClick={scrollToTop}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
      >
        Scroll to Top
      </button>
    </div>
  );
};

export default ScrollToTop;
