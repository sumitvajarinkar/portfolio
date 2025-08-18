import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PlacementStoriesBlog from "@/public/PlacementStoriesBlog.png"
import WatchITBanner from "@/public/WatchITBanner.png";
import Visualizer from "@/public/Visualizer.png";
import Presents from "@/public/Presents.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Coditas Solutions LLP, Pune (India)",
    description:
      "Building GRCTech client product.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul-2025 - Present",
  },
  {
    title: "Frontend Engineer",
    location: "TATA Elxsi, Pune (India)",
    description:
      "Working on amazing in-house tech TEPlay - Web OTT platform (IP product) of organization.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar-2024 - Jul 2025",
  },
  {
    title: "Bachelor of Technology (B.Tech)",
    location: "Shivaji University",
    description:
      "I graduated in Information Technology background from Rajarambapu Institute Of Technology (An Autonomous institute) - CGPA : 8.25",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 - July 2023",
  },
  {
    title: "Associate Web Development Intern",
    location: "Bubble Byte Ventures Pvt. Ltd.",
    description:
      "I interned in digital marketing startup incubated by NRIT initiative Goverment Of Maharashtra in my 3rd year of engineering.",
    icon: React.createElement(FaReact),
    date: "Sep-2022 - Nov 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Placement Stories",
    description:
      "A platform dedicated to sharing real-life experiences and insights from individuals, aiming to simplifying job seekers in their career journeys.",
    tags: ["React.js", "Node.js", "MongoDB", "AWS S3"],
    imageUrl: PlacementStoriesBlog,
    link: "https://placementstories.netlify.app/"
  },
  {
    title: "WatchIT",
    description:
      "Leveraged the TMDB API to fetch and display movies dynamically, offering users an intuitive and visually rich browsing experience.",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    imageUrl: WatchITBanner,
    link: "https://watchithackathon.netlify.app/"
  },
  {
    title: "Sorting Visualier",
    description:
      "An interactive Sorting Algorithm Visualizer web tool that enhances students' understanding of sorting algorithms",
    tags: ["JavaScript", "HTML", "CSS", "Bootstap"],
    imageUrl: Visualizer,
    link: "https://visualizesorting17.netlify.app/"
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React.js",
  "Redux",
  "HTML",
  "CSS",
  "Git",
  "Github",
  "Vite",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "C++",
  "Data Structures & Algorithms",
] as const;
