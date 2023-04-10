import React from "react";
import google from "../assets/google.png";
import quote from "../assets/quote.png";
import task from "../assets/tasklist.png";
import insta from "../assets/insta.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: task,
      info: 'To-do List'
    },
    {
      id: 2,
      src: google,
      info: 'Google clone'
    },
    {
      id: 3,
      src: quote,
      info: 'Random Quote Generator'
    },
    {
      id: 4,
      src: insta,
      info: 'Instagram Clone'
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto
    flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3
  gap-8 px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, info }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200
            hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-full py-2 duration-200
                hover:scale-105"
                >
                    {info}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
