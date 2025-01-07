import React from "react";
import data from "./../datasets/skills.json";

const About = () => {
  console.log(data, "slills");
  return (
    <div className="py-20">
      <div className="w-full xl:w-[1140px] px-4 xl:px-0 xl:mx-auto gap-7 h-full">
        <div className="mb-5 mt-10">
          <h2 className="text-xl font-bold tracking-wide text-blue">
            About Me
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            Here you will find more information about me, what I do, and my
            current skills in terms of programming and technology.
          </p>
        </div>
        <div className="my-16 md:my-24 bg-lighter-green p-10">
          <h1 className="text-3xl font-bold my-5 tracking-wider text-darkGreen">
            Get to know me!
          </h1>

          <p className="text-lg leading-10 text-gray-600">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications mostly using ReactJs,
            that leads to the success of the overall product. Check out some of
            my work in the Projects section.
            <br /> <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
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
