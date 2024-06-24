import React from "react";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r "
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" p-6 rounded-lg shadow-md ">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-lg">A brief description of the project.</p>
          </div>
          <div className="  rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-lg">A brief description of the project.</p>
          </div>
          <div className="  rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <p className="text-lg">A brief description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
