import { FaReact, FaNode, FaCss3Alt, FaJava} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";

import hsr_logo from "../assets/hsr_logo.png";
import robot_dog from "../assets/robot_dog_1.png";

export const Skils = [
    {
        id: 0,
        tech: 'React-JS',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'Node',
        icon: <FaNode />
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript />
    },
    {
        id: 4,
        tech: "Go",
        icon: <FaGolang />
    },
    {
        id: 5,
        tech: "Java",
        icon: <FaJava />
    }

]

export const projectDetails = [
    {
        id: 0,
        project_name: "SRSim",
        project_description: "Monte Carlo simulator for multivariate analysis of highly complex stochastic systems actively used by a fanbase for Honkai: Star Rail, with a multi-million global community.",
        tech_stack: ['Golang', 'React JS'],
        project_img: hsr_logo,
        project_url: "https://github.com/aaron-hwang/srsim",
        reverse: false,
    },
    {
        id: 1,
        project_name: "Bullet Journal",
        project_description: "Developed bullet journal app using SOLID principles in Java, using JavaFX for a fully featured and adjustable GUI.",
        tech_stack: ['Java', 'JavaFX'],
        project_img: <></>,
        project_url: "https://github.com/aaron-hwang/Bullet-Journal",
        reverse: false,
    },
    {
        id: 2,
        project_name: "Stack based VM Interpreter",
        project_description: "",
        tech_stack: ['C'],
        project_img: <></>,
        project_url: "https://github.com/aaron-hwang/craftinginterpreters-clox",
        reverse: false,
    },
    {
        id: 3,
        project_name: "Robot Dog",
        project_description: "Robotic quaraped built by the Robotics team at NEU. ",
        tech_stack: ['Python', 'ROS'],
        project_img: robot_dog,
        project_url: "https://nurobotics.org/robot-dog/",
        reverse: false,
    },
    {
        id: 4,
        project_name: "Mars Rover",
        project_description: "Lunar rover built by the Northeastern Mars Rover team. Competes annually at the URC to complete multiple scientific challenges. ",
        tech_stack: ['C++', 'ROS'],
        project_img: <></>,
        project_url: "https://www.northeasternrover.com/",
        reverse: false,
    },
]

export const navLinks = [
    {
        id:0,
        name: "Home",
        href: "Home",
    },
    {
        id:1,
        name: "My Skills",
        href: "Skills",
    },
    {
        id:3,
        name: "Projects",
        href: "Projects",
    },
    {
        id:4,
        name: "My Contact",
        href: "Contact",
    }
]