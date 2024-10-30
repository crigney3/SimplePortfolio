import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';
import ProjectContext from './Components/ProjectContext';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [allProjects, setAllProjects] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <ProjectContext.Provider value={{allProjects, setAllProjects}}>
        <Navbar/>
        <Projects/>
        <Footer></Footer>
      </ProjectContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
