import './Projects.css';
import Project from '../Components/Project';
import '../Components/ProjectData.js';
import { useContext, useEffect, useState } from 'react';
import { IDToProject, IDToHobby } from '../Components/ProjectData.js';
import ProjectContext from '../Components/ProjectContext.js';

const Projects = () => {

    const allProjects = useContext(ProjectContext).allProjects;
    const setAllProjects = useContext(ProjectContext).setAllProjects;

    useEffect(() => {

    }, []);

    return (
        <div className='ProjectsPage'>
            {allProjects}
        </div>
    );
}

export default Projects;