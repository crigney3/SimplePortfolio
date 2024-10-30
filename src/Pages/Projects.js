import './Projects.css';
import Project from '../Components/Project';
import '../Components/ProjectData.js';
import { useContext, useEffect, useState } from 'react';
import { IDToProject, IDToHobby } from '../Components/ProjectData.js';
import ProjectContext from '../Components/ProjectContext.js';

const Projects = () => {

    const allProjects = useContext(ProjectContext).allProjects;
    const setAllProjects = useContext(ProjectContext).setAllProjects;
    const allHobbies = useContext(ProjectContext).allHobbies;
    const setAllHobbies = useContext(ProjectContext).setAllHobbies;
    const allJobs = useContext(ProjectContext).allJobs;
    const setAllJobs = useContext(ProjectContext).setAllJobs;

    useEffect(() => {
        createProjectsFromData();
        createHobbiesFromData();
    }, []);

    const createProjectsFromData = () => {
        let allProj = [];

        for (let i = 0; i < 16; i++) {
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
                         itchText={project.itchText} />
            )
        }

        setAllProjects(allProj);
    }

    const createHobbiesFromData = () => {
        let allHobb = [];

        for (let i = 0; i < 4; i++) {
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
                         itchText={hobby.itchText} />
            )        
        }

        setAllHobbies(allHobb);
    }

    return (
        <div className='ProjectsPage'>
            {allProjects}

            {allHobbies}
        </div>
    );
}

export default Projects;