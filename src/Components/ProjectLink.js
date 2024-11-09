import './ProjectLink.css';
import { useState, useContext, useEffect } from 'react';
import ProjectContext from '../Components/ProjectContext.js';
import { HashLink } from 'react-router-hash-link';

// This is only for use on the home page.

const ProjectLinkInternal = ({
    id = 0,
    type = ""
}) => {
    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [link, setLink] = useState();
    const allHobbies = useContext(ProjectContext).allHobbies;
    const allJobs = useContext(ProjectContext).allJobs;
    const allProjects = useContext(ProjectContext).allProjects;

    useEffect(() => {
        fillFields();
    }, [allHobbies, allJobs, allProjects]);

    const fillFields = () => {
        if (type === "Job") {
            setImage(<img src={allJobs[id].props.photoGalleryImageArray[0].thumbnail}/>);
            setTitle(<p>{allJobs[id].props.titleText}</p>);
        } else if (type === "Hobby") {
            setImage(<img src={allHobbies[id].props.photoGalleryImageArray[0].thumbnail}/>);
            setTitle(<p>{allHobbies[id].props.titleText}</p>);
        } else if (type === "Project") {
            setImage(<img src={allProjects[id].props.photoGalleryImageArray[0].thumbnail}/>);
            setTitle(<p>{allProjects[id].props.titleText}</p>);
        }
    }

    return (
        <div className='ProjectLinkInternal'>
            <div className='KeyImageBackground'>
                {image}
            </div>
            <div className='CollapsibleDetails'>
                <div className='Title'>
                    {title}
                </div>
                <div className='OptionalLink'>
                    {link}
                </div>
            </div>
        </div>
    )
}

const ProjectLink = ({
    id = "",
    type = ""
}) => {
    const allHobbies = useContext(ProjectContext).allHobbies;
    const allJobs = useContext(ProjectContext).allJobs;
    const allProjects = useContext(ProjectContext).allProjects;
    const [projLink, setProjLink] = useState();

    useEffect(() => {
        fillLink();
    }, [allHobbies, allJobs, allProjects]);

    const fillLink = () => {
        let pLink;
        if (type === "Job") {
            pLink = <HashLink smooth key={'Job'+id} to={'/Jobs/#Job' + id.toString()}><ProjectLinkInternal id={id} type={type}/></HashLink>;
        } else if (type === "Hobby") {
            pLink = <HashLink smooth key={'Hobby'+id} to={'/Hobbies/#Hobby' + id.toString()}><ProjectLinkInternal id={id} type={type}/></HashLink>;
        } else if (type === "Project") {
            pLink = <HashLink smooth key={'Project'+id} to={'/Projects/#Project' + id.toString()}><ProjectLinkInternal id={id} type={type}/></HashLink>;
        }

        setProjLink(pLink);
    }

    return (
        <div className='ProjectLink'>
            {projLink}
        </div>
    )
}

export {
    ProjectLink
}