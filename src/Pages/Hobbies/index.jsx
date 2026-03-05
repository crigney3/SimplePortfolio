import { useState } from 'react';
import './Hobbies.css';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Inline from "yet-another-react-lightbox/plugins/inline";
import { useMediaQuery } from 'react-responsive';

const Hobbies = ({ hobbyData }) => {
    const { title, description, sections, brandingImage, photos } = hobbyData;
    const isMobile = useMediaQuery({
        query: '(max-width: 1000px)'
    })
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const toggleOpen = (state) => () => setOpen(state);

    const updateIndex = (when) =>
    ({ index: current }) => {
        if (when === open) {
        setIndex(current);
        }
    };

    const mapSectionToComponent = (section) => (
        <>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
        </>
    )

    return (
        <div className='Hobby'>
            <div className='hobby-title'>
                <h2>{title}</h2>
            </div>
            <div className='hobby-description'>
                <p>{description}</p>
                {sections?.map(mapSectionToComponent)}
            </div>
            <div className='hobby-gallery'>
                {!isMobile ? (
                    <ColumnsPhotoAlbum
                        photos={photos}
                        onClick={({ index }) => {
                            setIndex(index);
                            setOpen(true);
                        }}
                        columns={3}
                        spacing={0}
                    /> ) : (
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
                    )
                }
                <Lightbox
                    slides={photos}
                    open={open}
                    index={index}
                    close={() => setOpen(false)}
                    plugins={[Thumbnails, Zoom]}
                />
            </div>
            <img src={brandingImage} className='hobby-background' />
        </div>
    )
}

export default Hobbies;