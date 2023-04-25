import React from "react";
import Image from "../assets/hero.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="Home"
      className=" via-black h-screen w-full bg-gradient-to-b
    from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am an aspiring full stack developer who loves learning and
            implementing new concepts. Currently in the process
            of gaining mastery over frontend technologies like Javascript,
            React, Tailwind and Bootstrap, and more.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={850}
              offset={-50}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-2/4 h-auto">
          <img src={Image} alt="my profile" className="rounded-2xl md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
