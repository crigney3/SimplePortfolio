import './TechBanner.css';
import { TechToLink } from './ProjectData';
import { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { WebsiteLink, ItchLink, GithubLink, DownloadLink, MiscLink } from './Links';

const TechBanner = ({
    TechArray = [],
    websiteDest = "",
    websiteText = "",
    githubDest = "",
    githubText = "",
    downloadDest = "",
    downloadText = "",
    itchDest = "",
    itchText = "",
    miscLinkArray = []
}) => {
    const [techElements, setTechElements] = useState([]);
    const [miscLinkElements, setMiscLinkElements] = useState([]);

    useEffect(() => {
        createTechElements();
        if (miscLinkArray.length !== 0) {
            createMiscLinks();
        }
    }, []);

    const createTechElements = () => {
        let tempTechElements = [];
        let keys = Object.keys(TechArray);

        for (let i = 0; i < keys.length; i++) {
            let TechName = TechArray[i].toString();

            // Some strings need special processing.
            if (TechName === "C#") {
                TechName = "CSharp";
            } else if (TechName === "C++") {
                TechName = "CPlusPlus";
            } else if (TechName === "Snips.AI") {
                TechName = "SnipsAI";
            }

            let source = '/logos/' + encodeURI(TechName) + '.webp';

            tempTechElements.push(
                <a key={TechName} className='InternalTech BackgroundMedDark ForegroundLight' target='_blank' href={TechToLink[TechName]}>
                    <div className='ImageCropper'>
                        <img className='InternalTechImage' src={source}/>
                    </div>
                    <p>{TechArray[i]}</p>
                </a>);
        }

        setTechElements(tempTechElements);
    };

    const createMiscLinks = () => {
        let tempMiscElements = [];

        for (let i = 0; i < miscLinkArray.length; i++) {
            let linkKey = Object.keys(miscLinkArray[i])[0];
            tempMiscElements.push(
                <MiscLink destination={miscLinkArray[i][linkKey]} text={linkKey} key={linkKey}/>
            )
        }

        setMiscLinkElements(tempMiscElements);
    }

    return (
        <div className='TechBanner BackgroundMed'>
            <div className='OwnedLinks'>
                {(websiteDest !== "") && (websiteText !== "") && <WebsiteLink destination={websiteDest} text={websiteText}/>}
                {(githubDest !== "") && (githubText !== "") && <GithubLink destination={githubDest} text={githubText}/>}
                {(downloadDest !== "") && (downloadText !== "") && <DownloadLink destination={downloadDest} text={downloadText}/>}
                {(itchDest !== "") && (itchText !== "") && <ItchLink destination={itchDest} text={itchText}/>}
                {(miscLinkArray.length !== 0) && miscLinkElements}
            </div>
            <div className='TechLink'>
                {techElements}
            </div>       
        </div>
    )

}

export default TechBanner;