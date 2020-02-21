import React from "react";

function ProjectCard(props) {
    return(
        <div className="rounded-lg shadow-xl mx-4 mb-4 mt-6 overflow-hidden lg:flex">
            <img  className="lg:h-64 lg:rounded-lg" src={props.image} alt={props.name}></img>
            <div className="px-4 py-4">
                <a href={props.deployedLink} class="hover:text-gray-800"><h3 className="font-semibold justify-start">{props.name}</h3></a>
                <p className="text-xs my-4">{props.description}</p>
                <p className="text-xs my-4 font-semibold italic">{props.techUsed}</p>
                <a className="text-xs my-4 text-white text-right" href={props.githubLink}>GitHub Repo</a>
            </div>
        </div>
    )
}

export default ProjectCard;