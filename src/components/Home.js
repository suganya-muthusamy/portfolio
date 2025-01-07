import React from "react";

const Home = () => {
  return (
    <div className="h-[100vh]">
      <div className="w-full xl:w-[1140px] px-4 xl:px-0 xl:mx-auto gap-7 h-full flex justify-center items-center">
        <div className="text-center w-full md:w-8/12">
          <h1 className="text-4xl md:text-5xl my-10 font-extrabold tracking-wide text-darkGreen">
            Hi! I am Suganya Anbazhagan
          </h1>
          <p className="text-xl md:text-2xl font-medium leading-10 text-gray-600">
            With over 3 years of experience as a Frontend Developer with
            expertise in ReactJS, I have successfully built stunning, responsive
            web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
