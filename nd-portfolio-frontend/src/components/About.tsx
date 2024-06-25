import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 min-h-screen flex justify-center items-center"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Highly motivated Junior Frontend Developer with practical experience
          in diverse projects, including backend systems. <br />
          Proficient in JavaScript, specializing in React.js and Next.js for
          frontend development. <br />
          Skilled in DevOps practices, including deploying applications on
          Linux-based servers. <br /> Dedicated to continuous learning and
          improving team capabilities. <br />
          Strong foundation in teamwork and collaboration.
        </p>
      </div>
    </section>
  );
};

export default About;
