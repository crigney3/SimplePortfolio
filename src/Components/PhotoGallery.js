import './PhotoGallery.css';
import ImageGallery from "react-image-gallery";

const PhotoGallery = ({
    GalleryImageArray
}) => {

    return (
        <ImageGallery items={GalleryImageArray} />
    );
}

export default PhotoGallery;