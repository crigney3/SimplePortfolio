import './PhotoGallery.css';
import ImageGallery from "react-image-gallery";

const PhotoGallery = ({
    GalleryImageArray
}) => {

    return (
        <div className='ImageGalleryWrapper'>
            <ImageGallery items={GalleryImageArray} />
        </div>
    );
}

export default PhotoGallery;