import React, {Component} from "react";
import ProjectCard from "../ProjectCard";
import projects from "../projects.json";
import Sports from "../Assets/Sports.png";
import Sunny from "../Assets/AlwaysSunny.png"
import Burger2 from "../Assets/Burger2.png";
import Burger from "../Assets/Burger.png";
import News from "../Assets/News.jpg"
import Crystal from "../Assets/CrystalGame.png";
import Friends from "../Assets/Friends.png";
import Shopper from "../Assets/Shopper.png";
import LIRI from "../Assets/LIRI.png";
import Trivia from "../Assets/TriviaGame.png";
import GIPHY from "../Assets/GIPHY.png";
import Hangman from "../Assets/Hangman.png";


class Portfolio extends Component {

    render(){
        return(
            <div className="w-2/3 rounded-lg mt-16 mb-8 mx-auto py-2 text-white antialiased overflow-scroll md:w-3/4" id="portfolio" style={{height: "700px"}}>
                <h1 className="font-semibold tracking-wide text-xl text-center mt-2">
                    Portfolio
               </h1>
               <ProjectCard
                name={projects[0].name}
                description={projects[0].description}
                techUsed={projects[0].techUsed}
                githubLink={projects[0].githubLink}
                deployedLink={projects[0].deployedLink}
                image={Sports}
               />
               <ProjectCard
                name={projects[1].name}
                description={projects[1].description}
                techUsed={projects[1].techUsed}
                githubLink={projects[1].githubLink}
                deployedLink={projects[1].deployedLink}
                image={Sunny}
               />
               <ProjectCard
                name={projects[2].name}
                description={projects[2].description}
                techUsed={projects[2].techUsed}
                githubLink={projects[2].githubLink}
                deployedLink={projects[2].deployedLink}
                image={Burger2}
               />
               <ProjectCard
                name={projects[3].name}
                description={projects[3].description}
                techUsed={projects[3].techUsed}
                githubLink={projects[3].githubLink}
                deployedLink={projects[3].deployedLink}
                image={Burger}
               />
               <ProjectCard
                name={projects[4].name}
                description={projects[4].description}
                techUsed={projects[4].techUsed}
                githubLink={projects[4].githubLink}
                deployedLink={projects[4].deployedLink}
                image={News}
               />
               <ProjectCard
                name={projects[5].name}
                description={projects[5].description}
                techUsed={projects[5].techUsed}
                githubLink={projects[5].githubLink}
                image={Crystal}
               />
               <ProjectCard
                name={projects[6].name}
                description={projects[6].description}
                techUsed={projects[6].techUsed}
                githubLink={projects[6].githubLink}
                deployedLink={projects[6].deployedLink}
                image={Friends}
               />
               <ProjectCard
                name={projects[7].name}
                description={projects[7].description}
                techUsed={projects[7].techUsed}
                githubLink={projects[7].githubLink}
                deployedLink={projects[7].deployedLink}
                image={Shopper}
               />
               <ProjectCard
                name={projects[8].name}
                description={projects[8].description}
                techUsed={projects[8].techUsed}
                githubLink={projects[8].githubLink}
                image={LIRI}
               />
               <ProjectCard
                name={projects[9].name}
                description={projects[9].description}
                techUsed={projects[9].techUsed}
                githubLink={projects[9].githubLink}
                image={Trivia}
               />
               <ProjectCard
                name={projects[10].name}
                description={projects[10].description}
                techUsed={projects[10].techUsed}
                githubLink={projects[10].githubLink}
                deployedLink={projects[10].deployedLink}
                image={GIPHY}
               />
               <ProjectCard
                name={projects[11].name}
                description={projects[11].description}
                techUsed={projects[11].techUsed}
                githubLink={projects[11].githubLink}
                deployedLink={projects[11].deployedLink}
                image={Hangman}
                />
            </div>
        )
    }
}

export default Portfolio;