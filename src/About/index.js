import React, {Component} from "react";
import Pic from "../Assets/profile_pic.jpg"

class About extends Component{

    render() {
        return(
            <div className="w-3/4 rounded-lg my-8 mx-auto shadow-2xl py-2 px-4 text-white antialiased md:shadow-none lg:py-0" id="aboutMe">
                <div className="lg:flex lg:items-center">
                    <img className="border border-gray-800 rounded-full mx-auto my-4 lg:mx-6 lg:mt-6" src={Pic} alt="Me"></img>
                    <h1 className="font-semibold tracking-wide text-xl text-center lg:hidden">
                        About Me
                    </h1>
                    <div className="font-hairline mt-2 text-sm lg:text-base">
                        <p>Hello, my name is <span className="font-bold">Nico Loparco</span> and welcome to my webpage.</p>
                        <p> I'm a full stack developer and recent college graduate based in Atlanta, GA.</p>
                        <p>I enjoy trying to solve complex problems, building things and always learning something new.</p>
                        <p className="mt-4 font-semibold md:hidden">Here's a list of things i've been working with recently: </p>
                    </div>
                </div>
                    <div className="flex justify-between mt-4 mb-2 italic font-semibold lg:justify-start lg:block lg:items-center">
                        <p className="lg:font-normal lg:not-italic lg:mt-10 lg:visible">Here's a list of things i've been working with recently: </p>
                        <div className="lg:flex">
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">ReactJS</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">JavaScript</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">JQuery</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">HTML5</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">TailwindCSS</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">Bootstrap</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">CSS3</p>
                        </div>
                        <div className="lg:flex">
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">MongoDB</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">Mongoose</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">MySQL</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">Sequelize</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">ExpressJS</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">NodeJS</p>
                            <p className="lg:ml-4 lg:mt-8 lg:not-italic">Handlebars</p>
                        </div>
                    </div>
                </div>
        )
    }

}

export default About;








