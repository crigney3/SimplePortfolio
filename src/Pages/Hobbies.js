import './Hobbies.css';
import Project from '../Components/Project';
import '../Components/ProjectData.js';
import { useContext, useEffect, useState } from 'react';
import { IDToHobby } from '../Components/ProjectData.js';
import ProjectContext from '../Components/ProjectContext.js';
import SideNavbar from '../Components/SideNavbar.js';

const Hobbies = () => {

    const allHobbies = useContext(ProjectContext).allHobbies;
    const setAllHobbies = useContext(ProjectContext).setAllHobbies;

    return (
        <div className='HobbiesPage'>
            <div className='HobbiesPaddingTop'></div>
            <SideNavbar currentPageID={1}/>
            {allHobbies}
            <div className='HobbiesPaddingBottom'></div>
        </div>
    )
}

export default Hobbies;