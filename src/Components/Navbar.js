import './Navbar.css';
import ProjectContext from '../Components/ProjectContext.js';
import { useContext, useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const allProjects = useContext(ProjectContext).allProjects;
    const allHobbies = useContext(ProjectContext).allHobbies;
    const allJobs = useContext(ProjectContext).allJobs;
    const [allProjectsList, setAllProjectsList] = useState([]);
    const [allHobbiesList, setAllHobbiesList] = useState([]);
    const [allJobsList, setAllJobsList] = useState([]);
    const navigate = useNavigate();

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
            <div className='Dropdown'>
                <HashLink className='DropBtn BackgroundDarkExtra ForegroundLight' smooth to='/'>Home</HashLink>
            </div>
            <div className='Dropdown'>
                <HashLink className='DropBtn BackgroundDarkExtra ForegroundLight' smooth to='/Projects/#Project0'>Projects</HashLink>
                <div className='DropContent BackgroundMed'>
                    {allProjectsList}
                </div>
            </div>
            <div className='Dropdown'>
                <HashLink className='DropBtn BackgroundDarkExtra ForegroundLight' smooth to='/Hobbies/#Hobby0'>Hobbies</HashLink>
                <div className='DropContent BackgroundMed'>
                    {allHobbiesList}
                </div>
            </div>
            <div className='Dropdown'>
                <HashLink className='DropBtn BackgroundDarkExtra ForegroundLight' smooth to='/Jobs/#Job0'>Jobs</HashLink>
                <div className='DropContent BackgroundMed'>
                    {allJobsList}
                </div>
            </div>
        </div>
    );
}

export default Navbar;