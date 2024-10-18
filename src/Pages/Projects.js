import './Projects.css';
import Project from '../Components/Project';
import '../Components/ProjectData.js';
import { useEffect, useState } from 'react';
import { IDToProject } from '../Components/ProjectData.js';

const Projects = () => {

    const [allProjectsMarkup, setAllProjectsMarkup] = useState([]);

    useEffect(() => {
        createProjectsFromData();
    }, []);

    const createProjectsFromData = () => {
        let allProj = [];

        for (let i = 0; i < 16; i++) {
            let project = IDToProject[i];
            allProj.push(
                <Project id={i} key={i}
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

        setAllProjectsMarkup(allProj);
    }

    return (
        <body className='ProjectsBackground'>
            <div className='ProjectsPage'>
                {allProjectsMarkup}
            </div>
        </body>
    );
}

export default Projects;