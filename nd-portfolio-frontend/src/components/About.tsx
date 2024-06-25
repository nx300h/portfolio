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
          I am a highly motivated Junior Frontend Developer.
          With a robust skill set encompassing HTML5, CSS
          (including Bootstrap and Tailwind), JavaScript (React.JS, Next.js),
          and proficiency in DevOps practices on Linux servers, I bring
          hands-on experience from projects like LulPos, London Junior Developer (LJD) and Tuition Center Management System (TCMS) at Luul Solutions Ltd.
          I am commitment to continuous learning, strong teamwork ethic, and
          proactive approach to bug fixing and deployment which makes me a valuable
          asset for any frontend development team. With certifications in web
          development and CompTIA A+, along with a passion of staying updated
          with industry trends, I am poised to contribute effectively to your
          organization's goals.
        </p>
      </div>
    </section>
  );
};

export default About;
