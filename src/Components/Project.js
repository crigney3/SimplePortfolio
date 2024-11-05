import './Project.css';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { GithubLink, ItchLink, DownloadLink, WebsiteLink } from './Links';
import PhotoGallery from './PhotoGallery';
import DemoVideo from './DemoVideo';
import { DescriptionBox, TitleBox } from './DescriptionBox';

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
    itchText = ""
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

    const [backgroundColor, setBackgroundColor] = useState('white');

    useEffect(() => {
        calcBackgroundColor();
    }, []);

    const calcBackgroundColor = () => {
        let numID = id.match(/^\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;});
        let bgColor = numID[0] % 2 ? '#282c34' : '#1D1128';
        setBackgroundColor(bgColor);    
    }

    return (
        <div className='Project' id={id} style={{backgroundColor: backgroundColor}}>
            {(titleText !== "") && <TitleBox titleText={titleText}/>}
            <div className='DescAndGallery'>
                {(descriptionText !== "") && <DescriptionBox descriptionText={descriptionText}/>}
                <div className='Gallery'>
                    {(photoGalleryImageArray !== null) && <PhotoGallery GalleryImageArray={photoGalleryImageArray}/>}
                    {(videoLink !== "") && <DemoVideo videoSource={videoLink}/>}
                </div>                    
            </div>
            <div className='Links'>
                {(websiteDest !== "") && (websiteText !== "") && <WebsiteLink destination={websiteDest} text={websiteText}/>}
                {(githubDest !== "") && (githubText !== "") && <GithubLink destination={githubDest} text={githubText}/>}
                {(downloadDest !== "") && (downloadText !== "") && <DownloadLink destination={downloadDest} text={downloadText}/>}
                {(itchDest !== "") && (itchText !== "") && <ItchLink destination={itchDest} text={itchText}/>}
            </div>
        </div>
    );
}

export default Project;