import React from 'react';
import github from '../assets/icons/github.svg'
const ProjectCard = ({ project: { name, image, deployed_url, github_url } }) => {
    return (
        <div className="projectrCard col-md-6 col-lg-4 ">
            <figure className="projectCard__wrapper">
                <a href={deployed_url} target="_blank" rel="noopener noreferrer" >
                    <img src={image} alt={name} className="projectCard__image" />
                    <p class="img__description">{name}</p>
                </a>

            </figure>

        </div >
    );
};

export default ProjectCard;