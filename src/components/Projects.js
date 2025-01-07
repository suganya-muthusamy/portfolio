import useProjectData from "../datasets/useProjectData";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".mt-20").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          duration: 0.8,
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
    gsap.utils.toArray(".mt-5").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1.2,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.utils.toArray(".text-3xl").forEach((title) => {
      gsap.fromTo(
        title,
        { autoAlpha: 0, x: 100 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const projectList = useProjectData();
  console.log(projectList, "project");

  return (
    <div className="py-20">
      <div className="w-full xl:w-[1140px] px-4 xl:px-0 xl:mx-auto gap-7 h-full">
        <div className="my-5">
          <h2 className="text-xl font-bold tracking-wide text-blue">
            My Projects
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            Here you will find some of the personal and client's projects that I
            created with each project containing its own case study
          </p>
        </div>
        <div>
          {projectList.map((project, i) => {
            return (
              <div
                key={project.id}
                className="mt-20 mb-40 flex flex-wrap justify-between "
              >
                <div className="w-full md:w-6/12">
                  <img
                    alt={project.img_url}
                    src={project.img_url}
                    className=" rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-5/12 mt-14 md:mt-0 flex flex-col justify-center">
                  <h1 className="text-3xl font-bold text-darkGreen tracking-wide">
                    {project.title}
                    <span className="text-sm mx-2 text-red tracking-widest">
                      {project.type}
                    </span>
                  </h1>

                  <h2 className="text-gray-400 mt-2">{project.sub_title}</h2>
                  <i className="mt-5 text-gray-600 text-lg ">
                    {project.description.map((desc, i) => {
                      return <p className="my-2">{desc}</p>;
                    })}
                  </i>
                  <div className="mt-10">
                    {project.git_url && (
                      <a
                        href={project.git_url}
                        target="_blank"
                        rel="noreferrer"
                        className="buttons py-2 px-4 text-lg bg-red text-white mr-5 rounded-md hover:opacity-85 transition-all ease-in-out"
                      >
                        Get Code
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-4 text-lg bg-darkGreen text-white rounded-md hover:opacity-85 transition-all ease-in-out"
                      >
                        View Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
