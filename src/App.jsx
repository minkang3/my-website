import { useState } from 'react';
import './App.css';
import Me from './Me';
import Projects from './Projects/Projects';
import Skills from './Skills';
import ExandableMenu from './test';

function App() {
  const [section, setSection] = useState("");

  function pickSection(section) {
    switch (section) {
      case "me":
        return <Me />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
    }
  }

  return (
    <div className="max-w-[1000px] mx-auto px-10 my-[100px] font-thin">
      <h1 className="mb-3">
        <span
          className="text-5xl font-normal cursor-pointer"
          onClick={() => setSection("")}
        >
         Min Kang
        </span>
      </h1>
      <p>
        <span
          className="cursor-pointer text-white-700 hover:text-gray-500"
          onClick={() => setSection("me")}
        >
          Me
        </span>
      </p >
      <p> 
        <span
          className="cursor-pointer text-white-700 hover:text-gray-500"
          onClick={() => setSection("projects")}
        >
          Projects
        </span>
      </p>
      <p>
        <span
          className="cursor-pointer text-white-700 hover:text-gray-500"
          onClick={() => setSection("skills")}
        >
          Skills
        </span>
      </p>
      <div className="mb-[30px]"></div>
      {pickSection(section)}
    </div>
  )
}

export default App
