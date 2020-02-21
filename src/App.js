import React, {Fragment} from 'react';
import Navbar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio"
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="lg:flex md:w-3/4 md:text-center md:mx-auto md:shadow-2xl md:mt-8 bg-blue-400 rounded-lg">
      <About />
      <Contact />
      </div>
      <Portfolio />
    </Fragment>
  );
}

export default App;
