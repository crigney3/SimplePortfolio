import './Navbar.css';
import ProjectContext from '../Components/ProjectContext.js';
import { useContext, useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    const allProjects = useContext(ProjectContext).allProjects;
    const allHobbies = useContext(ProjectContext).allHobbies;
    const [allProjectsList, setAllProjectsList] = useState([]);
    const [allHobbiesList, setAllHobbiesList] = useState([]);

    useEffect(() => {
        generateProjectList();
    }, [allProjects]);

    useEffect(() => {
        generateHobbyList();
    }, [allHobbies]);

    const generateProjectList = () => {
        let allProjList = [];

        for(let i = 0; i < allProjects.length; i++) {
            allProjList.push(<HashLink smooth key={'Project'+i} to={'/#' + allProjects[i].props.id.toString()}>{allProjects[i].props.titleText}</HashLink>)
        }

        setAllProjectsList(allProjList);
    }

    const generateHobbyList = () => {
        let allHobbList = [];

        for(let i = 0; i < allHobbies.length; i++) {
            allHobbList.push(<HashLink smooth key={'Hobby'+i} to={'/#' + allHobbies[i].props.id.toString()}>{allHobbies[i].props.titleText}</HashLink>)
        }

        setAllHobbiesList(allHobbList);
    }

    // useEffect(() => {
    //     console.log(allProjectsList);
    // }, [allProjectsList]);

    return (
        <div className='Navbar'>
            <div className='Dropdown'>
                <button className='ProjectsDropBtn'>Projects</button>
                <div className='DropContent'>
                    {allProjectsList}
                </div>
            </div>
            <div className='Dropdown'>
                <button className='HobbiesDropBtn'>Hobbies</button>
                <div className='DropContent'>
                    {allHobbiesList}
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