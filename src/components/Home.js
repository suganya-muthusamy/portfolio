import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".text-center",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  useEffect(() => {
    const animation = gsap.to(".home", {
      backgroundPosition: "200% center",
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    gsap.fromTo(
      ".name",
      { opacity: 0, x: -300 },
      { opacity: 1, x: 0, duration: 1 }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="home h-[100vh]  ">
      <div className="w-full xl:w-[1140px] px-4 xl:px-0 xl:mx-auto gap-7 h-full flex justify-center items-center">
        <div className="text-center w-full md:w-8/12">
          <h1 className="name text-4xl md:text-5xl my-10 font-extrabold tracking-wide text-darkGreen">
            Hi! I am Suganya Anbazhagan
          </h1>
          <p className="text-xl md:text-2xl font-medium leading-10 text-gray-600">
            With over 4 years of experience as a Frontend Developer with
            expertise in ReactJS, I have successfully built stunning, responsive
            web applications.
          </p>
          <div className="my-10">
            <a
              href="/about"
              className="px-4 py-2 bg-gray-700 text-white text-lg font-semibold rounded hover:opacity-85 transition-all ease-in-out"
            >
              More About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
