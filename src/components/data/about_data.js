import React from 'react';

import api from '../../assets/icons/api.png'
import flowchart from '../../assets/icons/flowchart.png'
import frontend_icon from '../../assets/icons/front-end.png'
import backend_icon from '../../assets/icons/back-end.png'
import teamwork from '../../assets/icons/teamwork.png'
import agile from '../../assets/icons/agile.png'


const skills = [
    {
        icon: frontend_icon,
        title: "Front-end Development",
        about: "HTML5",
        about2: "CSS3 | SASS | Bootstrap",
        about3: "JS | jQuery | ReactJS"
    },
    {
        icon: backend_icon,
        title: "Back-end  Development",
        about: "NodeJS | MongoDB   ",
        about2: "ASP.NET | MSSQL",
        about3: "Spring | MySQL" 
    },
    {
        icon: api,
        title: "System Design",
        about: "REST APIs" ,
        about2: "Load Balance | Cache",
        about3: "DB Schema | Sharding"
    },
    {
        icon: flowchart,
        title: "Architecture",
        about: "Microservices ",
        about2: " Dockers | Kubernetes",
        about3: "MVC | Spring | ASP.NET"
    },
    {
        icon: agile,
        title: "DevOps",
        about: "Project Mngment | JIRA ",
        about2: "CI/CD | Jenkins | GIT",
        about3: "Test Driven Development"
    },
    {
        icon: teamwork,
        title: "Teamwork",
        about: "Strong Communication" ,
        about2: "Constant Feedback",
        about3: "Continuous Learning"
    },
]

export default skills;