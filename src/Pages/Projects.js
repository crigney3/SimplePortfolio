import './Projects.css';
import Project from '../Components/Project';
import '../Components/ProjectData.js';
import { useContext, useEffect, useState } from 'react';
import { IDToProject } from '../Components/ProjectData.js';
import ProjectContext from '../Components/ProjectContext.js';

const Projects = () => {

    const allProjects = useContext(ProjectContext).allProjects;
    const setAllProjects = useContext(ProjectContext).setAllProjects;

    useEffect(() => {
        createProjectsFromData();
    }, []);

    const createProjectsFromData = () => {
        let allProj = [];

        for (let i = 0; i < 16; i++) {
            let project = IDToProject[i];
            allProj.push(
                <Project id={'Project' + i.toString()} key={i}
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
                         itchText={project.itchText} />
            )
        }

        setAllProjects(allProj);
    }

    return (
        <div className='ProjectsPage'>
            {allProjects}
        </div>
    );
}

export default Projects;