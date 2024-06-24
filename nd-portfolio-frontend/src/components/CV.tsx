import React from "react";

const CV: React.FC = () => {
  const pdfUrl = "https://drive.google.com/file/d/12xZm9rXnGBihcCeauBzIJsDpqMJI0ckq/view?usp=drive_link";

  return (
    <section
      id="cv"
      className="py-20"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My CV</h2>
        <p className="text-lg mb-8">
          Download or view my CV to know more about my professional background
          and skills.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href={pdfUrl}
            className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
          <a
            href={pdfUrl}
            className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
            download="Noel_Dsouza_Resume.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default CV;
