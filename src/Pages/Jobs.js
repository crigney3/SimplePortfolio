import { useEffect, useContext } from 'react';
import ProjectContext from '../Components/ProjectContext';
import './Jobs.css';

const Jobs = () => {
    const allJobs = useContext(ProjectContext).allJobs;
    const setAllJobs = useContext(ProjectContext).setAllJobs;

    return (
        <div className='JobsPage'>
            <div className='JobsPaddingTop'></div>
            {allJobs}
            <div className='JobsPaddingBottom'></div>
        </div>
    )
}

export default Jobs;