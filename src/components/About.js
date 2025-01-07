import React from "react";
import data from "./../datasets/skills.json";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  // animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".my-16.md\\:my-24.bg-lighter-green.p-10",
      { autoAlpha: 0, y: 50 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".my-16.md\\:my-24.bg-lighter-green.p-10",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.utils.toArray(".mb-10").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.utils.toArray(".py-20 > div").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="py-20">
      <div className="w-full xl:w-[1140px] px-4 xl:px-0 xl:mx-auto gap-7 h-full">
        <div className="start mb-5 mt-10">
          <h2 className="text-xl font-bold tracking-wide text-blue">
            About Me
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            Here you will find more information about me, what I do, and my
            current skills in terms of programming and technology.
          </p>
        </div>
        <div className=" my-16 md:my-24 bg-lighter-green p-10">
          <h1 className="text-3xl font-bold my-5 tracking-wider text-darkGreen">
            Get to know me!
          </h1>

          <p className=" text-lg leading-10 text-gray-600">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications mostly using ReactJs,
            that leads to the success of the overall product. Check out some of
            my work in the{" "}
            <a
              href="/projects"
              className="text-blue underline hover:opacity-85 transition-all ease-in-out"
            >
              Projects section.
            </a>
            <br /> <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to{" "}
            <a
              href="/contact"
              className="text-blue underline hover:opacity-85 transition-all ease-in-out"
            >
              contact me.
            </a>
          </p>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold my-5 tracking-wider text-blue">
            My Skills
          </h1>
          {data.skillSets.map((skillset) => {
            return (
              <div key={skillset.id} className="mb-10">
                <span className="text-xl font-bold text-darkGreen">
                  {skillset.topic}
                </span>
                <ul className="flex flex-wrap gap-4 my-4">
                  {skillset.skills.map((skill, i) => {
                    return (
                      <li
                        key={i}
                        className="py-2 px-3 bg-gray-700 text-gray-200 text-lg rounded-xl font-medium tracking-wider"
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
