import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 min-h-screen flex justify-center items-center"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            className="w-full p-4 mb-4 border border-gray-300 rounded text-black"
            placeholder="Name"
            onFocus={() => console.log("Name field focused")}
          />
          <input
            type="email"
            className="w-full p-4 mb-4 border border-gray-300 rounded text-black"
            placeholder="Email"
            onFocus={() => console.log("Email field focused")}
          />
          <textarea
            className="w-full p-4 mb-4 border border-gray-300 rounded text-black"
            placeholder="Message"
            onFocus={() => console.log("Message field focused")}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
