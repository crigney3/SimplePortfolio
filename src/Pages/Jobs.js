import { useEffect, useContext } from 'react';
import ProjectContext from '../Components/ProjectContext';
import './Jobs.css';

const Jobs = () => {
    const allJobs = useContext(ProjectContext).allJobs;
    const setAllJobs = useContext(ProjectContext).setAllJobs;

    return (
        <div className='JobsPage'>
            {allJobs}
        </div>
    )
}

export default Jobs;