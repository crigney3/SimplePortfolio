import './Projects.css';
import Project from '../Components/Project';
import '../Components/ProjectData.js';
import { useContext, useEffect, useState } from 'react';
import { IDToProject, IDToHobby } from '../Components/ProjectData.js';
import ProjectContext from '../Components/ProjectContext.js';
import SideNavbar from '../Components/SideNavbar.js';

const Projects = () => {

    const allProjects = useContext(ProjectContext).allProjects;
    const setAllProjects = useContext(ProjectContext).setAllProjects;

    return (
        <div className='ProjectsPage'>
            <div className='ProjectsPaddingTop'></div>
            <SideNavbar currentPageID={0}/>
            {allProjects}
            <div className='ProjectsPaddingBottom'></div>
        </div>
    );
}

export default Projects;