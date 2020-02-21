import React, {Component} from "react";

class Contact extends Component{

    render(){
        return(
            <div className="w-2/3 rounded-lg my-16 mx-auto shadow-2xl py-2 text-white antialiased md:shadow-none lg:my-8" id="contact">
                <h1 className="text-lg font-semibold text-center mt-2 tracking-wide lg:hidden">
                    Contact Me
                </h1>
                <div className="py-2 text-center mb-1">
                    <div className="font-semibold mt-2 lg:font-hairline">
                        <h3 className="font-hairline lg:mt-8 lg:text-xl lg:font-bold">Mobile</h3>
                        <p className="text-sm lg:text-base lg:italic">305-903-5503</p>
                        <h3 className="font-hairline mt-4 lg:mt-10 lg:text-xl lg:font-bold">Email</h3>
                        <a className="text-sm lg:text-base lg:italic" href="mailto:nicoloparco75@gmail.com">nicoloparco75@gmail.com</a>
                        <h3 className="font-hairline mt-4 lg:mt-10 lg:text-xl lg:font-bold">LinkedIn</h3>
                        <a className="text-sm lg:text-base lg:italic" href="https://www.linkedin.com/in/nicolas-loparco-040989141/">https://www.linkedin.com/in/nicolas-loparco-040989141/</a> 
                        <h3 className="font-hairline mt-4 lg:mt-10 lg:text-xl lg:font-bold">GitHub</h3>
                        <a className="text-sm lg:text-base lg:italic" href="https://github.com/nicoloparco">https://github.com/nicoloparco</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;