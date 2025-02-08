import skipTheKitchen_URL from "./skip-the-kitchen.png";
import netflixGPT_URL from "./netflix-gpt.png";
import LMA_URL from "./lakshmi-medical-academy.png";
import YOUTUBE_URL from "./youtube.png";

const useProjectData = () => {
  const projectList = [
    {
      id: 1,
      type: "Personal",
      title: "Skip The Kitchen",
      sub_title:
        "Clone app inspired from Swiggy, the food delivering web application.",
      description: [
        "I re-created some of the frontend features of swiggy's official web app using their live API. Because, I got attracted to their config-driven UI. It was a great experience for me to build this clone website.",
      ],
      img_url: skipTheKitchen_URL,
      git_url: "https://github.com/suganya-muthusamy/Swiggy-Clone",
      live_url: "https://nomoredish.netlify.app/",
    },
    {
      id: 2,
      type: "Personal",
      title: "NetflixGPT",
      sub_title:
        "Clone app inspired from Netflix, the movie streaming web application",
      description: [
        "I have fetched the real time movie datas from 'The Movie Database(TMDB)",
        "The search bar is integrated with chatGPT in order to act as a movie recommendation system and implemented multi-lingual search bar.",
      ],
      img_url: netflixGPT_URL,
      git_url: "https://github.com/suganya-muthusamy/netflix-GPT",
    },
    {
      id: 3,
      type: "Client",
      title: "Laksmi Medical Academy",
      sub_title:
        "An institution giving online courses to medical students based in Tenkasi, India",
      description: [
        "In this application I have implemented mutiple choice online examination, where the students can get their result by end of the test and the exam results send to the management.",
        " It includes a dashboard enabled with user based authentication, and the user able to manage their respective management works.",
      ],

      img_url: LMA_URL,
      live_url: "https://lakshmimedicalacademy.com/",
    },
    {
      id: 4,
      type: "Personal",
      title: "YouTube Clone",
      sub_title: "A feature-rich clone of YouTube with video streaming functionality",
      description: [
        "Fetched real-time video data using the YouTube Data API for dynamic content updates.",
        "Implemented a responsive UI with a sidebar, video player, and recommendation section similar to YouTube.",
        "Integrated search functionality with debouncing and cached results to allowing users best search experience.",
        "Implemented recursion for n-level nested comments"
      ],
      img_url: YOUTUBE_URL,
      git_url: "https://github.com/suganya-muthusamy/my-youtube",
      live_url:"https://tube-search-eight.vercel.app/"
    }
    
  ];
  return projectList;
};

export default useProjectData;
