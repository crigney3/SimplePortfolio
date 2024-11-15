import './TechBanner.css';
import { TechToImage, TechToLink } from './ProjectData';
import { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { WebsiteLink, ItchLink, GithubLink, DownloadLink } from './Links';

const TechBanner = ({
    TechArray = [],
    websiteDest = "",
    websiteText = "",
    githubDest = "",
    githubText = "",
    downloadDest = "",
    downloadText = "",
    itchDest = "",
    itchText = ""
}) => {
    const [techElements, setTechElements] = useState([]);

    useEffect(() => {
        createTechElements();
    }, []);

    const createTechElements = () => {
        let tempTechElements = [];
        let keys = Object.keys(TechArray);

        for (let i = 0; i < keys.length; i++) {
            let TechName = TechArray[i].toString();
            tempTechElements.push(
            <a key={TechName} className='InternalTech' target='_blank' href={TechToLink[TechName]}>
                <div className='ImageCropper'>
                    <img className='InternalTechImage' src={'/logos/' + TechName + '.webp'}/>
                </div>
                <p>{TechArray[i]}</p>
            </a>);
        }

        setTechElements(tempTechElements);
    };

    return (
        <div className='TechBanner'>
            <div className='OwnedLinks'>
                {(websiteDest !== "") && (websiteText !== "") && <WebsiteLink destination={websiteDest} text={websiteText}/>}
                {(githubDest !== "") && (githubText !== "") && <GithubLink destination={githubDest} text={githubText}/>}
                {(downloadDest !== "") && (downloadText !== "") && <DownloadLink destination={downloadDest} text={downloadText}/>}
                {(itchDest !== "") && (itchText !== "") && <ItchLink destination={itchDest} text={itchText}/>}
            </div>
            <div className='TechLink'>
                {techElements}
            </div>       
        </div>
    )

}

export default TechBanner;