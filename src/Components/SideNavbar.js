import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, {useState, useEffect} from 'react';
import './SideNavbar.css';

const SideNavbar = ({
    
}) => {
    const [isOpen, setIsOpen] = useState(false);
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
            allProjList.push(<HashLink smooth key={'Project'+i} to={'/Projects/#' + allProjects[i].props.id.toString()}>{allProjects[i].props.titleText}</HashLink>)
        }

        setAllProjectsList(allProjList);
    }

    const generateHobbyList = () => {
        let allHobbList = [];

        for(let i = 0; i < allHobbies.length; i++) {
            allHobbList.push(<HashLink smooth key={'Hobby'+i} to={'/Hobbies/#' + allHobbies[i].props.id.toString()}>{allHobbies[i].props.titleText}</HashLink>)
        }

        setAllHobbiesList(allHobbList);
    }

    const generateJobsList = () => {
        let allJobList = [];
        
        for(let i = 0; i < allJobs.length; i++) {
            allJobList.push(<HashLink smooth key={'Job'+i} to={'/Jobs/#' + allJobs[i].props.id.toString()}>{allJobs[i].props.titleText}</HashLink>)
        }

        setAllJobsList(allJobList);
    }


    return (
        <div className='SideNavbar'>
            <div className='IconOpen'>
                <MenuOpenIcon/>
            </div>
            {(isOpen !== "") && <div className='ExpandedNavbar'>
                
            </div>}
        </div>
    );
}

export default SideNavbar;