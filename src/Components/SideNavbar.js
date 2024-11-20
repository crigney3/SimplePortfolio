import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, {useState, useEffect, useContext} from 'react';
import ProjectContext from '../Components/ProjectContext.js';
import { HashLink } from 'react-router-hash-link';
import './SideNavbar.css';

const SideNavbar = ({
    currentPageID = 0
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const allProjects = useContext(ProjectContext).allProjects;
    const allHobbies = useContext(ProjectContext).allHobbies;
    const allJobs = useContext(ProjectContext).allJobs;
    const [allItemsList, setAllItemsList] = useState([]);

    useEffect(() => {
        if (currentPageID === 2) {
            generateJobsList();
        }
    }, [allJobs]);

    useEffect(() => {
        if (currentPageID === 1) {
            generateHobbyList();
        }
    }, [allHobbies]);

    useEffect(() => {
        if (currentPageID === 0) {
            generateProjectList();
        }
    }, [allProjects]);

    const generateProjectList = () => {
        let allProjList = [];

        for(let i = 0; i < allProjects.length; i++) {
            allProjList.push(<HashLink smooth key={'Project'+i} to={'/Projects/#' + allProjects[i].props.id.toString()}>{allProjects[i].props.titleText}</HashLink>)
        }

        setAllItemsList(allProjList);
    }

    const generateHobbyList = () => {
        let allHobbList = [];

        for(let i = 0; i < allHobbies.length; i++) {
            allHobbList.push(<HashLink smooth key={'Hobby'+i} to={'/Hobbies/#' + allHobbies[i].props.id.toString()}>{allHobbies[i].props.titleText}</HashLink>)
        }

        setAllItemsList(allHobbList);
    }

    const generateJobsList = () => {
        let allJobList = [];
        
        for(let i = 0; i < allJobs.length; i++) {
            allJobList.push(<HashLink smooth key={'Job'+i} to={'/Jobs/#' + allJobs[i].props.id.toString()}>{allJobs[i].props.titleText}</HashLink>)
        }

        setAllItemsList(allJobList);
    }

    const openBar = () => {
        setIsOpen(true);
    }

    const closeBar = () => {
        setIsOpen(false);
    }

    return (
        <div className='SideNavbar'>
            {(!isOpen) &&
            <div className='IconOpener' onClick={openBar}>
                <MenuOpenIcon className='OpenIcon'/>
            </div>}
            {(isOpen) && 
            <div className='ExpandedNavbar'>
                <div className='IconCloser' onClick={closeBar}>
                    <MenuOpenIcon className='CloseIcon'/>
                </div>
                <div className='ItemsList'>
                    {allItemsList}
                </div>  
            </div>}
        </div>
    );
}

export default SideNavbar;