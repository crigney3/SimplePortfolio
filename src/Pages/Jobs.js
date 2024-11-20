import { useEffect, useContext } from 'react';
import ProjectContext from '../Components/ProjectContext';
import SideNavbar from '../Components/SideNavbar.js';
import './Jobs.css';

const Jobs = () => {
    const allJobs = useContext(ProjectContext).allJobs;
    const setAllJobs = useContext(ProjectContext).setAllJobs;

    return (
        <div className='JobsPage'>
            <div className='JobsPaddingTop'></div>
            <SideNavbar currentPageID={2}/>
            {allJobs}
            <div className='JobsPaddingBottom'></div>
        </div>
    )
}

export default Jobs;