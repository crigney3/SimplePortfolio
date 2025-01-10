import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Hobbies from './Pages/Hobbies';
import Jobs from './Pages/Jobs';
import Navbar from './Components/Navbar';
import ProjectContext from './Components/ProjectContext';
import Project from './Components/Project';
import { IDToJob, IDToHobby, IDToProject } from './Components/ProjectData';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [allProjects, setAllProjects] = useState([]);
  const [allHobbies, setAllHobbies] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    createJobsFromData();
    createHobbiesFromData();
    createProjectsFromData();
  }, []);

  const createHobbiesFromData = () => {
    let allHobb = [];

    for (let i = 0; i < Object.keys(IDToHobby).length; i++) {
        let hobby = IDToHobby[i];
        let hobbyID = 'Hobby' + i.toString();
        allHobb.push(
            <Project id={hobbyID} key={hobbyID}
                     titleText={hobby.titleText}
                     descriptionText={hobby.descriptionText}
                     photoGalleryImageArray={hobby.photoGalleryImageArray}
                     videoLink={hobby.videoLink}
                     websiteDest={hobby.websiteDest}
                     websiteText={hobby.websiteText}
                     githubDest={hobby.githubDest}
                     githubText={hobby.githubText}
                     downloadDest={hobby.downloadDest}
                     downloadText={hobby.downloadText}
                     itchDest={hobby.itchDest}
                     itchText={hobby.itchText}
                     techArray={hobby.techArray}
                     miscLinkArray={hobby.miscLinkArray}
                     twitchDest = {hobby.twitchDest}
                     twitchText = {hobby.twitchText}
                     youtubeDest = {hobby.youtubeDest}
                     youtubeText = {hobby.youtubeText} />
        )        
    }

    setAllHobbies(allHobb);
  }
  
  const createProjectsFromData = () => {
    let allProj = [];

    for (let i = 0; i < Object.keys(IDToProject).length; i++) {
        let project = IDToProject[i];
        let projID = 'Project' + i.toString();
        allProj.push(
            <Project id={projID} key={projID}
                     titleText={project.titleText}
                     descriptionText={project.descriptionText}
                     photoGalleryImageArray={project.photoGalleryImageArray}
                     videoLink={project.videoLink}
                     websiteDest={project.websiteDest}
                     websiteText={project.websiteText}
                     githubDest={project.githubDest}
                     githubText={project.githubText}
                     downloadDest={project.downloadDest}
                     downloadText={project.downloadText}
                     itchDest={project.itchDest}
                     itchText={project.itchText} 
                     techArray={project.techArray}
                     miscLinkArray={project.miscLinkArray}
                     twitchDest = {project.twitchDest}
                     twitchText = {project.twitchText}
                     youtubeDest = {project.youtubeDest}
                     youtubeText = {project.youtubeText}/>
        )
    }

    setAllProjects(allProj);
  }

  const createJobsFromData = () => {
      let allJob = [];

      for (let i = 0; i < Object.keys(IDToJob).length; i++) {
          let job = IDToJob[i];
          let jobID = 'Job' + i.toString();
          allJob.push(
              <Project id={jobID} key={jobID}
                       titleText={job.titleText}
                       descriptionText={job.descriptionText}
                       photoGalleryImageArray={job.photoGalleryImageArray}
                       videoLink={job.videoLink}
                       websiteDest={job.websiteDest}
                       websiteText={job.websiteText}
                       githubDest={job.githubDest}
                       githubText={job.githubText}
                       downloadDest={job.downloadDest}
                       downloadText={job.downloadText}
                       itchDest={job.itchDest}
                       itchText={job.itchText} 
                       techArray={job.techArray}
                       miscLinkArray={job.miscLinkArray}
                       twitchDest = {job.twitchDest}
                       twitchText = {job.twitchText}
                       youtubeDest = {job.youtubeDest}
                       youtubeText = {job.youtubeText}/>
          )        
      }

      setAllJobs(allJob);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <ProjectContext.Provider value={{allProjects, setAllProjects, allHobbies, setAllHobbies, allJobs, setAllJobs}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='/Hobbies' element={<Hobbies/>}></Route>
          <Route path='/Jobs' element={<Jobs/>}></Route>
        </Routes>
        <Footer></Footer>
      </ProjectContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
