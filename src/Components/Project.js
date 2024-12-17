import './Project.css';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { GithubLink, ItchLink, DownloadLink, WebsiteLink } from './Links';
import PhotoGallery from './PhotoGallery';
import DemoVideo from './DemoVideo';
import { DescriptionBox, TitleBox } from './DescriptionBox';
import TechBanner from './TechBanner';

const Project = ({
    id = "",
    titleText = "",
    descriptionText = "",
    photoGalleryImageArray = null,
    videoLink = "",
    websiteDest = "",
    websiteText = "",
    githubDest = "",
    githubText = "",
    downloadDest = "",
    downloadText = "",
    itchDest = "",
    itchText = "",
    techArray = [],
    miscLinkArray = []
}) => {
    // Projects have possible components like title, demo video, and download link.
    // If a parameter for one of these components is blank, Project will not render
    // that component.

    // Possible Component List:
    // Title
    // Description
    // Video
    // Photo Gallery
    // Download Link
    // Github Link
    // Website Link
    // Itch.IO Link

    const [backgroundClass, setBackgroundClass] = useState('BackgroundDark');
    const [foregroundClass, setForegroundClass] = useState('ForegroundDark');

    useEffect(() => {
        calcColorByID();
    }, []);

    const calcColorByID = () => {
        let numID = id.match(/^\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;});

        let bgColor = numID[0] % 2 ? 'BackgroundDark' : 'BackgroundMedDark';  
        setBackgroundClass(bgColor);

        let fColor = numID[0] % 2 ? 'ForegroundLightExtra' : 'ForegroundLight';
        setForegroundClass(fColor);
    }

    return (
        <div className={'Project' + ' ' + backgroundClass + ' ' + foregroundClass} id={id}>
            {(titleText !== "") && <TitleBox titleText={titleText}/>}
            <TechBanner TechArray={techArray} websiteDest={websiteDest} websiteText={websiteText} githubDest={githubDest} githubText={githubText} downloadDest={downloadDest} downloadText={downloadText} itchDest={itchDest} itchText={itchText} miscLinkArray={miscLinkArray}/>
            {(descriptionText !== "") && <DescriptionBox descriptionText={descriptionText} className='DescWrapper'/>}
            <div className='Gallery'>
                {(photoGalleryImageArray !== null) && <PhotoGallery GalleryImageArray={photoGalleryImageArray}/>}
            </div> 
                {/* <div className='Video'>
                    {(videoLink !== "") && <DemoVideo videoSource={videoLink}/>}
                </div>              */}
        </div>
    );
}

export default Project;