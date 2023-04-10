import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I have completed by B.Tech in Computer Science and currently working
          as a Software Engineer. I love learning new languages and using that
          knowledge to solve problems. I have always been in awe of the amazing
          websites that people make and my goal has always been to be able to build
          amazing responsive websites that has the 'WOW' factor and can grab anyone's
          attention. My biggest strength is my ability to understand and grasp any new
          technology quickly and start using it in projects easily. 
        </p>
        <br />

        <p className="text-xl">
          While mastering the frontend first has always been my goal, I also love working on the 
          backend, understanding how things happen behind the screen and how I can play around
          and make it even better. What makes me a valuable asset is I'm open to learn any 
          technology, frontend or backend because without one, the other cannot exist. I'm always 
          open to work with people who push me to learn more and continously help me improve my skills. 
        </p>
      </div>
    </div>
  );
};

export default About;
