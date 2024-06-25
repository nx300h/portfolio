import React from "react";

const Projects: React.FC = () => {
  const handleClick = (projectName: string) => {
    alert(`Clicked on ${projectName}`);
    // Handle click logic here, such as navigating to a different page or showing more details
  };

  return (
    <section
      id="projects"
      className="py-20 min-h-screen flex justify-center items-center"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:rotate-2 animate-fadeIn"
            onClick={() => handleClick("LulPos")}
          >
            <h3 className="text-2xl font-bold mb-2">LulPos</h3>
            <p className="text-lg">A brief description of the project.</p>
          </div>
          <div
            className="p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:rotate-2 animate-fadeIn"
            onClick={() => handleClick("London Junior Developer")}
          >
            <h3 className="text-2xl font-bold mb-2">London Junior Developer</h3>
            <p className="text-lg">A brief description of the project.</p>
          </div>
          <div
            className="p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:rotate-2 animate-fadeIn"
            onClick={() => handleClick("Tuition Centre Management System")}
          >
            <h3 className="text-2xl font-bold mb-2">
              Tuition Centre Management System
            </h3>
            <p className="text-lg">A brief description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
