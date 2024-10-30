import './Navbar.css';
import ProjectContext from '../Components/ProjectContext.js';
import { useContext, useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    const allProjects = useContext(ProjectContext).allProjects;
    const [allProjectsList, setAllProjectsList] = useState([]);

    useEffect(() => {
        generateProjectList();
    }, [allProjects]);

    const generateProjectList = () => {
        let allProjList = [];

        for(let i = 0; i < allProjects.length; i++) {
            allProjList.push(<HashLink smooth key={i} to={'/#' + allProjects[i].props.id.toString()}>{allProjects[i].props.titleText}</HashLink>)
        }

        setAllProjectsList(allProjList);
    }

    // useEffect(() => {
    //     console.log(allProjectsList);
    // }, [allProjectsList]);

    return (
        <div className='Navbar'>
            {allProjectsList}
            <div className='Dropdown'>
                <button className='ProjectsDropBtn'>Projects</button>
                <div className='DropContent'>
                    {allProjectsList}
                </div>
            </div>
            <div className='Dropdown'>
                <button className='HobbiesDropBtn'>Hobbies</button>
                <div className='DropContent'>
                    {allProjectsList}
                </div>
            </div>
            <div className='Dropdown'>
                <button className='JobsDropBtn'>Jobs</button>
                <div className='DropContent'>
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;