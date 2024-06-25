import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-4">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/noel-dsouza-4a380283/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>
        <a
          href="https://github.com/nx300h"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-gray-300" />
        </a>
      </div>
      <p className="mt-4">&copy; 2024 Noel D'Souza. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
