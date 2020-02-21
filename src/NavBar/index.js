import React, {Component} from "react";

class Navbar extends Component{
    
    state = {
        isOpen: false
    }

    openClose = () => {
        this.setState({ isOpen: !this.state.isOpen})
    }

    
    
    render(){

        if(this.state.isOpen === true){
            return (
            <header className="bg-gray-800 sm:flex sm:justify-between">
            <div className="flex justify-between items-center px-3 py-2">
                <div>
                    <button type="button" className="block text-blue-400 focus:text-blue-300 focus:outline-none">
                        <svg className="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet">
                            <metadata>
                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                            </metadata>
                            <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M290 1805 l0 -65 -95 0 -95 0 0 -810 0 -810 805 0 805 0 0 70 0 70 100 0 100 0 0 805 0 805 -810 0 -810 0 0 -65z m1590 -740 l0 -785 -85 0 -85 0 0 730 0 730 -700 0 -700 0 0 55 0 55 785 0 785 0 0 -785z m-1590 -75 l0 -730 700 0 700 0 0 -55 0 -55 -785 0 -785 0 0 785 0 785 85 0 85 0 0 -730z m1400 10 l0 -720 -690 0 -690 0 0 720 0 720 690 0 690 0 0 -720z"/>
                            <path d="M600 1020 l0 -260 55 0 54 0 3 142 3 143 95 -140 95 -140 48 -3 47 -3 0 260 0 261 -55 0 -54 0 -3 -142 -3 -143 -95 142 -95 142 -47 1 -48 0 0 -260z"/>
                            <path d="M1090 1020 l0 -260 160 0 160 0 0 50 0 50 -105 0 -105 0 0 210 0 210 -55 0 -55 0 0 -260z"/>
                            </g>
                            </svg>
                    </button>
                </div>
                <div className="sm:hidden">
                    <button type="button" className="block text-blue-400 focus:text-blue-300 focus:outline-none hover:text-blue-300" onClick={this.openClose}>
                        <svg className="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path className="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8.41 7l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="block px-3 pt-2 pb-4 leading-8 sm:flex" id="links">
                <a className="block text-blue-400 font-semibold rounded hover:bg-gray-400 px-2" href="#aboutMe">About Me</a>
                <a className="block text-blue-400 font-semibold rounded hover:bg-gray-400 px-2" href="#contact">Contact Me</a>
                <a className="block text-blue-400 font-semibold rounded hover:bg-gray-400 px-2" href="#portfolio">Portfolio</a>
            </div>
        </header>
            )
        }
         else {
            return (
                <header className="bg-gray-800 sm:flex sm:justify-between sm:px-4 sm:py-3">
                <div className="flex justify-between items-center px-3 py-2 sm:p-0">
                    <div>
                        <button type="button" className="block text-blue-400 focus:text-blue-300 focus:outline-none">
                            <svg className="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet">
                                <metadata>
                                Created by potrace 1.15, written by Peter Selinger 2001-2017
                                </metadata>
                                <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M290 1805 l0 -65 -95 0 -95 0 0 -810 0 -810 805 0 805 0 0 70 0 70 100 0 100 0 0 805 0 805 -810 0 -810 0 0 -65z m1590 -740 l0 -785 -85 0 -85 0 0 730 0 730 -700 0 -700 0 0 55 0 55 785 0 785 0 0 -785z m-1590 -75 l0 -730 700 0 700 0 0 -55 0 -55 -785 0 -785 0 0 785 0 785 85 0 85 0 0 -730z m1400 10 l0 -720 -690 0 -690 0 0 720 0 720 690 0 690 0 0 -720z"/>
                                <path d="M600 1020 l0 -260 55 0 54 0 3 142 3 143 95 -140 95 -140 48 -3 47 -3 0 260 0 261 -55 0 -54 0 -3 -142 -3 -143 -95 142 -95 142 -47 1 -48 0 0 -260z"/>
                                <path d="M1090 1020 l0 -260 160 0 160 0 0 50 0 50 -105 0 -105 0 0 210 0 210 -55 0 -55 0 0 -260z"/>
                                </g>
                                </svg>
                        </button>
                    </div>
                    <div className="sm:hidden">
                        <button type="button" className="block text-blue-400 focus:text-blue-300 focus:outline-none hover:text-blue-300" onClick={this.openClose}>
                            <svg className="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path className="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                        </button>
                    </div>
                </div>
                <div className="hidden sm:flex sm:items-center" id="links">
                    <a className="block text-blue-400 font-semibold rounded hover:text-blue-200 px-2 mt-0 sm:ml-2 " href="#aboutMe">About Me</a>
                    <a className="block text-blue-400 font-semibold rounded hover:text-blue-200 px-2 mt-0 sm:ml-2 md:hidden" href="#contact">Contact Me</a>
                    <a className="block text-blue-400 font-semibold rounded hover:text-blue-200 px-2 mt-0 sm:ml-2" href="#portfolio">Portfolio</a>
                </div>
            </header>
            )
            }
        }
    }


export default Navbar;