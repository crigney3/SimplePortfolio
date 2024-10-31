import './Hobbies.css';
import Project from '../Components/Project';
import '../Components/ProjectData.js';
import { useContext, useEffect, useState } from 'react';
import { IDToHobby } from '../Components/ProjectData.js';
import ProjectContext from '../Components/ProjectContext.js';

const Hobbies = () => {

    const allHobbies = useContext(ProjectContext).allHobbies;
    const setAllHobbies = useContext(ProjectContext).setAllHobbies;

    useEffect(() => {

    }, []);

    return (
        <div className='HobbiesPage'>
            {allHobbies}
        </div>
    )
}

export default Hobbies;