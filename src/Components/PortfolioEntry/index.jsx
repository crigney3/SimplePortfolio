import React, { useState } from "react";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import './PortfolioEntry.css'
import { Download, GitHub, Web, YouTube } from "@mui/icons-material";
import { ReactComponent as ItchIo } from '../../Media/Logos/ItchIo_Logo.svg';
import { ReactComponent as Twitch } from '../../Media/Logos/Twitch_Logo.svg';

const PortfolioEntry = ({ entryInfo, id }) => {
    const { 
        title, 
        timeWorking, 
        description, 
        reel, 
        photos, 
        brandingImage,
        websiteLink,
        githubLink,
        downloadLink,
        itchLink,
        youtubeLink,
        twitchLink
    } = entryInfo;
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const toggleOpen = (state) => () => setOpen(state);

    const updateIndex = (when) =>
    ({ index: current }) => {
      if (when === open) {
        setIndex(current);
      }
    };

    return (
        <div className="PortfolioEntry" id={id}>
            <div className="project-info">
                <h1>{title}</h1>
                <h2>{timeWorking}</h2>
                <p>{description}</p>
            </div>
            <span className="project-gallery">
                <Lightbox 
                    index={index}
                    slides={photos}
                    plugins={[Inline]}
                    on={{
                    view: updateIndex(false),
                    click: toggleOpen(true),
                    }}
                    carousel={{
                    padding: 0,
                    spacing: 0,
                    imageFit: "cover",
                    }}
                    inline={{
                    style: {
                        width: "100%",
                        maxWidth: "900px",
                        aspectRatio: "3 / 2",
                        margin: "0 auto",
                    },
                    }}
                />
                <Lightbox
                    open={open}
                    close={toggleOpen(false)}
                    index={index}
                    slides={photos}
                    plugins={[Thumbnails]}
                    on={{ view: updateIndex(true) }}
                    animation={{ fade: 0 }}
                    controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
                />
            </span>
            <div className="project-links">
                    {githubLink && (
                        <a href={githubLink} target="_blank"><GitHub/></a>
                    )}
                    {websiteLink && (
                        <a href={websiteLink} target="_blank"><Web/></a>
                    )}
                    {itchLink && (
                        <a href={itchLink} target="_blank"><ItchIo/></a>
                    )}
                    {downloadLink && (
                        <a href={downloadLink} target="_blank"><Download/></a>
                    )}
                    {youtubeLink && (
                        <a href={youtubeLink} target="_blank"><YouTube/></a>
                    )}
                    {twitchLink && (
                        <a href={twitchLink} target="_blank"><Twitch/></a>
                    )}
            </div>
            <LazyLoadComponent
                threshold={750}
            >
                <div className="project-background">
                    <div className="project-background-mask" />
                    <div className="project-background-overlay" />
                    {reel 
                        ? <video src={reel} className="project-background-visual" playsInline autoPlay loop muted />    
                        : <img src={brandingImage} className="project-background-visual" />
                    }
                </div>
            </LazyLoadComponent>
        </div>
    )
}

export default PortfolioEntry;