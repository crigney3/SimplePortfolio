import { useState } from 'react';
import './Hobbies.css';
import { MasonryPhotoAlbum } from 'react-photo-album';
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Hobbies = ({ hobbyData }) => {
    const { title, description, brandingImage, photos } = hobbyData;
    const [index, setIndex] = useState(-1);

    return (
        <div className='Hobby'>
            <div className='hobby-title' style={{background: `radial-gradient(rgba(0,0,0,0.1), rgba(0, 0, 0, 0.5)) , url(${brandingImage}) center center`}}>
                <h2>{title}</h2>
            </div>
            <div className='hobby-description'>
                <p>{description}</p>
            </div>
            <div className='hobby-gallery'>
                <MasonryPhotoAlbum
                    photos={photos}
                    onClick={({ index }) => setIndex(index)}
                />
                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Thumbnails, Zoom]}
                />
            </div>
        </div>
    )
}

export default Hobbies;