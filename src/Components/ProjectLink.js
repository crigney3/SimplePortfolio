import './ProjectLink.css';
import { useState, useContext, useEffect } from 'react';
import ProjectContext from '../Components/ProjectContext.js';
import { HashLink } from 'react-router-hash-link';

// This is only for use on the home page.

// const ProjectLinkInternal = ({
//     id = 0,
//     type = ""
// }) => {
//     const allHobbies = useContext(ProjectContext).allHobbies;
//     const allJobs = useContext(ProjectContext).allJobs;
//     const allProjects = useContext(ProjectContext).allProjects;

//     useEffect(() => {
        
//     }, [allHobbies, allJobs, allProjects]);

//     return (
//         <div className='ProjectLinkInternal'>
//             <div className='KeyImageBackground'>
//                 {image}
//             </div>
//             <div className='CollapsibleDetails'>
//                 <div className='Title'>
//                     {title}
//                 </div>
//                 <div className='OptionalLink'>
//                     {link}
//                 </div>
//             </div>
//         </div>
//     )
// }

const ProjectLink = ({
    id = "",
    type = "",
    croppedImage = ""
}) => {
    const allHobbies = useContext(ProjectContext).allHobbies;
    const allJobs = useContext(ProjectContext).allJobs;
    const allProjects = useContext(ProjectContext).allProjects;
    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [link, setLink] = useState();
    const [projLink, setProjLink] = useState();

    useEffect(() => {
        if (allHobbies.length !== 0 &&
            allJobs.length !== 0 &&
            allProjects.length !== 0) {
                fillFields();
        }
    }, [allHobbies, allJobs, allProjects]);

    useEffect(() => {
        fillLink();
    }, [image, title]);

    const fillFields = () => {
        if (croppedImage !== "") {
            if (type === "Job") {
                setImage(croppedImage.original);
                setTitle(<p>{allJobs[id].props.titleText}</p>);
            } else if (type === "Hobby") {
                setImage(croppedImage.original);
                setTitle(<p>{allHobbies[id].props.titleText}</p>);
            } else if (type === "Project") {
                setImage(croppedImage.original);
                setTitle(<p>{allProjects[id].props.titleText}</p>);
            }
        } else {
            if (type === "Job") {
                setImage(allJobs[id].props.photoGalleryImageArray[0].thumbnail);
                setTitle(<p>{allJobs[id].props.titleText}</p>);
            } else if (type === "Hobby") {
                setImage(allHobbies[id].props.photoGalleryImageArray[0].thumbnail);
                setTitle(<p>{allHobbies[id].props.titleText}</p>);
            } else if (type === "Project") {
                setImage(allProjects[id].props.photoGalleryImageArray[0].thumbnail);
                setTitle(<p>{allProjects[id].props.titleText}</p>);
            }
        }

    }

    const fillLink = () => {
        let pLink;
        if (type === "Job") {
            pLink = <HashLink className='InternalLink' smooth key={'Job'+id} to={'/Jobs/#Job' + id.toString()}>{title}</HashLink>;
        } else if (type === "Hobby") {
            pLink = <HashLink className='InternalLink' smooth key={'Hobby'+id} to={'/Hobbies/#Hobby' + id.toString()}>{title}</HashLink>;
        } else if (type === "Project") {
            pLink = <HashLink className='InternalLink' smooth key={'Project'+id} to={'/Projects/#Project' + id.toString()}>{title}</HashLink>;
        }

        setProjLink(pLink);
    }

    return (
        <div className='ProjectLink' style={{backgroundImage: `url(${image})`}}>
            {projLink}
        </div>
    )
}

export {
    ProjectLink
}