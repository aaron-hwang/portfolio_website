import { FaReact, FaNode, FaCss3Alt, FaJava} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";

import hsr_logo from "../assets/hsr_logo.png";

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
        project_url: "https://github.com/simimpact/srsim",
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
]