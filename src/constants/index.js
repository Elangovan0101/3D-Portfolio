import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  wisdomsoft,
  html,
  javascript,
  jobit,
  incubator,
  mobile,
  diabetes,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web
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
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "App Developer",
    icon: backend,
  },
  {
    title: "Critical Thinker",
    icon: web,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Machine Learning Engineer ",
    company_name: "Sairam Techno Incubator",
    icon: incubator,
    iconBg: "#383E56",
    date: "December, 2022 - Present",
    points: [
      "Designed machine learning models for an autonomous aerial surveillance drone to be used in flood rescue operations at Sairam Techno Incubator.",
      "Model Training and Performance: The models were trained with high accuracy scores, hence performing with surety in real disaster scenarios.",
      "Computer Vision Implementation: Advanced computer vision techniques were implemented for the drone, hence bettering the efficiency in flood rescue and/or real-time disasters..",
    ],
  },
  {
    title: "AI Engineer Intern",
    company_name: "Wisdomsoft",
    icon: wisdomsoft,
    iconBg: "#E6DEDD",
    date: "June 2024 - July 2024",
    points: [
      "Design of scheduling models: Created high level optimization algorithms targeting maintenance services at Wisdomsoft in the Middle East.",
      "Developed Streamlit Applications: Utilized Streamlit to create optimized applications that are easy for a user linking multiple tables and filtering through data.",
      "Optimization and Scalability : Utilized optimization, process maps to efficiently allocate resources while dealing with difficult data inputs in order to provide operationally efficient softwares and human-readable.",
      "it provides an intuitive interface for tracking the service history of various equipment, ensuring better organization and timely service management.",

    ],
  },
  {
    title: "AI/ML Developer",
    company_name: "Maestrominds",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Machine Learning Project Development: Develop machine learning projects to build models that address real-world problems and add business value.",
      "Integrated machine learning models with apps for better performance and drive smarter automation, data-driven insights through application enrichment.",
      "Achieved Through Implementing Innovative Solution: Developed innovative solutions by app development which combines machine learning techniques to enhance the analytics performance in several projects."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Elangovan is a highly skilled and innovative software developer and machine learning expert. With a deep understanding of both software engineering and AI/ML",
    name: "Daniel",
    designation: "HR",
    company: "Wisdomsoft",
    image:wisdomsoft
  },
];

const projects = [
  {
    name: "Autonomous ariel surveillance drone for flood rescue operation",
    description:"In the profile of rising challenges in flood and glacial lake outburst flood (GLOF) scenarios.This project introduces a disruptive solution through the implementation of autonomous drones provide with advanced technologies to support and optimize rescue working in flood-prone regions",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Computer vision",
        color: "green-text-gradient",
      },
      {
        name: "Model training",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  {
    name: "Service Scheduler",
    description:
      "This project is an Equipment Service Scheduler developed using Python, Streamlit. It helps in scheduling and managing equipment service efficiently.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Scheduling algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Elangovan0101/Service-scheduler",
  },
  {
    name: "Adaptive retail app",
    description:
      "The adaptive retail app simplifies in-store shopping by helping customers locate products, scan items, and check out directly through the app, offering a seamless and queue-free shopping experience.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "React js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Elangovan0101/Adaptive-Retail-app",
  },
  {
    name: "Diabetes Prediction",
    description:
      "Predicting diabetes risk using data-driven insights and machine learning.",
    tags: [
      {
        name: "Model Training",
        color: "blue-text-gradient",
      },
      {
        name: "Streamliit",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: diabetes,
    source_code_link: "https://github.com/Elangovan0101/Diabetes-prediction",
  },
];

export { experiences, projects, services, technologies, testimonials };

