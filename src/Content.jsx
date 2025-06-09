import { useState } from "react";
// import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Top from "./components/Top";
import Edu from "./components/Edu";
import Contact from "./components/Contact";

function Content() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Nav />
      <Top />
      <div className="container">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <p>background effect where pngs of my techstack are floating</p>
        <Edu />
        <Contact />
      </div>
    </>
  );
}

export default Content;
