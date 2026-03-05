import { useEffect } from 'react';
import PortfolioEntry from '../../Components/PortfolioEntry';
import { titleToProjectId } from '../../Utils';
import { projectData } from '../../Utils/Data';
import './Portfolio.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const location = useLocation();

    const mapProjectToComponent = (project) => (
        <PortfolioEntry id={titleToProjectId(project.title)} entryInfo={project} key={titleToProjectId(project.title)} />
    )

    useEffect(() => {
        if(location?.state?.selectedProject) {
            document.getElementById(location?.state?.selectedProject).scrollIntoView()
        }
    })

    return (
        <>
            <div className='Portfolio'>
                {projectData.map(mapProjectToComponent)}
            </div>
            <span className='backdrop' />
        </>
    );
}

export default Portfolio;