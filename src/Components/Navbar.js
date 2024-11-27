import './Navbar.css';
import ProjectContext from '../Components/ProjectContext.js';
import { useContext, useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    const allProjects = useContext(ProjectContext).allProjects;
    const allHobbies = useContext(ProjectContext).allHobbies;
    const allJobs = useContext(ProjectContext).allJobs;
    const [allProjectsList, setAllProjectsList] = useState([]);
    const [allHobbiesList, setAllHobbiesList] = useState([]);
    const [allJobsList, setAllJobsList] = useState([]);

    useEffect(() => {
        generateProjectList();
    }, [allProjects]);

    useEffect(() => {
        generateHobbyList();
    }, [allHobbies]);

    useEffect(() => {
        generateJobsList();
    }, [allJobs]);

    const generateProjectList = () => {
        let allProjList = [];

        for(let i = 0; i < allProjects.length; i++) {
            allProjList.push(<HashLink className='HoverMedLight ForegroundLight' smooth key={'Project'+i} to={'/Projects/#' + allProjects[i].props.id.toString()}>{allProjects[i].props.titleText}</HashLink>)
        }

        setAllProjectsList(allProjList);
    }

    const generateHobbyList = () => {
        let allHobbList = [];

        for(let i = 0; i < allHobbies.length; i++) {
            allHobbList.push(<HashLink className='HoverMedLight ForegroundLight' smooth key={'Hobby'+i} to={'/Hobbies/#' + allHobbies[i].props.id.toString()}>{allHobbies[i].props.titleText}</HashLink>)
        }

        setAllHobbiesList(allHobbList);
    }

    const generateJobsList = () => {
        let allJobList = [];
        
        for(let i = 0; i < allJobs.length; i++) {
            allJobList.push(<HashLink className='HoverMedLight ForegroundLight' smooth key={'Job'+i} to={'/Jobs/#' + allJobs[i].props.id.toString()}>{allJobs[i].props.titleText}</HashLink>)
        }

        setAllJobsList(allJobList);
    }

    return (
        <div className='Navbar BackgroundDarkExtra'>
            <HashLink className='Dropdown' smooth to='/'>
                <button className='NoDropBtn BackgroundDarkExtra ForegroundLight HoverMedLight'>Home</button>
            </HashLink>
            <HashLink className='Dropdown' smooth to='/Projects'>
                <button className='ProjectsDropBtn BackgroundDarkExtra ForegroundLight HoverMedLight'>Projects</button>
                <div className='DropContent BackgroundMed'>
                    {allProjectsList}
                </div>
            </HashLink>
            <HashLink className='Dropdown' smooth to='/Hobbies'>
                <button className='HobbiesDropBtn BackgroundDarkExtra ForegroundLight HoverMedLight'>Hobbies</button>
                <div className='DropContent BackgroundMed'>
                    {allHobbiesList}
                </div>
            </HashLink>
            <HashLink className='Dropdown' smooth to='/Jobs'>
                <button className='JobsDropBtn BackgroundDarkExtra ForegroundLight HoverMedLight'>Jobs</button>
                <div className='DropContent BackgroundMed'>
                    {allJobsList}
                </div>
            </HashLink>
        </div>
    );
}

export default Navbar;