import './Project.css';
import React, {useState, useEffect} from 'react';
import { GithubLink, ItchLink, DownloadLink, WebsiteLink } from './Links';
import PhotoGallery from './PhotoGallery';
import DemoVideo from './DemoVideo';
import { DescriptionBox, TitleBox } from './DescriptionBox';

const Project = ({
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

    return (
        <div className='Project'>
            {(titleText != "") && <TitleBox titleText={titleText}/>}
            {(descriptionText != "") && <DescriptionBox descriptionText={descriptionText}/>}
            {(photoGalleryImageArray != null) && <PhotoGallery imageArray={photoGalleryImageArray}/>}
            {(videoLink != "") && <DemoVideo videoSource={videoLink}/>}
            {(websiteDest != "") && (websiteText != "") && <WebsiteLink destination={websiteDest} text={websiteText}/>}
            {(githubDest != "") && (githubText != "") && <GithubLink destination={githubDest} text={githubText}/>}
            {(downloadDest != "") && (downloadText != "") && <DownloadLink destination={downloadDest} text={downloadText}/>}
            {(itchDest != "") && (itchText != "") && <ItchLink destination={itchDest} text={itchText}/>}
        </div>
    );
}

export default Project;