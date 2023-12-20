import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    farmexpert,
    spotify,
    flightmanagement,
    generalstore,
    machinelearning,
    cpp,
    mysql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Cpp",
      icon: cpp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "My Sql",
      icon: mysql,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "Machine learning",
      icon: machinelearning,
    },
  ];
  
  
  const projects = [
    {
      name: "Farm Expert",
      description:
        "This project contains potential to help the farmers in all the ways possible. It was a team project. Our main focus was on helping the farmers to know the crops which can grow on the current soil conditions and the soil condition required for growing a particular crop. I worked as the Front-end Developer and helped with ML parts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
      ],
      image: farmexpert,
      source_code_link: "https://github.com/shivangi-gupta-01",
    },
    {
      name: "General Store",
      description:
        "A general store from the admin side of a company. It has all the features of managing a online store from a website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: generalstore,
      source_code_link: "https://github.com/shivangi-gupta-01",
    },
    {
      name: "Flight Management",
      description:
        "Web Application from the admin side of a company. It has all the features of managing online flights from a website.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: flightmanagement,
      source_code_link: "https://github.com/shivangi-gupta-01",
    },
    {
      name: "Spotify Clone",
      description:
        "Recreation of a very popular, user friendly music platform, Spotify",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/shivangi-gupta-01",
    },
  ];
  
  export { services, technologies, projects };