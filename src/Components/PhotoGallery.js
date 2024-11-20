import './PhotoGallery.css';
import ImageGallery from "react-image-gallery";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useContext, useEffect, useRef } from 'react';

const PhotoGallery = ({
    GalleryImageArray
}) => {
    const [imagesList, setImagesList] = useState([]);
    const [currentImage, setCurrentImage] = useState();
    const [currentImagePath, setCurrentImagePath] = useState("");
    //const [imageFitType, setImageFitType] = useState("");
    const imageElementRef = useRef(null);

    useEffect(() => {
        setupImages();
        setCurrentImage(0);
    }, []);

    useEffect(() => {
        // Didn't turn out to be necessary, but maybe useful later?
        // let [imageWidth, imageHeight] = getImageDimensions();
        // let [containerWidth, containerHeight] = getContainerDimensions();

        // if (imageWidth >= containerWidth &&
        //     imageHeight >= containerHeight) {
        //         setImageFitType("contain");
        // } else {
        //     setImageFitType("contain");
        // }

        setCurrentImagePath(imagesList[currentImage]);
    }, [currentImage]);

    const setupImages = () => {
        let tempImages = [];

        for(let i = 0; i < Object.keys(GalleryImageArray).length; i++) {
            tempImages.push(GalleryImageArray[i].original);
        }

        setImagesList(tempImages);
    }

    const previousImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }
    }

    const nextImage = () => {
        if (currentImage < Object.keys(GalleryImageArray).length - 1) {
            setCurrentImage(currentImage + 1);
        }
    }

    // Didn't turn out to be necessary, but maybe useful later?
    // const getImageDimensions = () => {
    //     let newImage = new Image();
    //     let url = imagesList[currentImage];
    //     let dimensions = [0,0];

    //     newImage.src = url;
    //     newImage.onload = () => {
    //         dimensions[0] = newImage.width;
    //         dimensions[1] = newImage.height;
    //     }

    //     return dimensions;
    // }

    // const getContainerDimensions = () => {
    //     let containerSizes = [];

    //     containerSizes[0] = imageElementRef.current.clientWidth;
    //     containerSizes[1] = imageElementRef.current.clientHeight;

    //     return containerSizes;
    // }

    return (
        <div className='ImageCarousel' style={{backgroundImage: `url(${currentImagePath})`}} ref={imageElementRef}>
            <button className='LeftButton' onClick={previousImage} disabled={currentImage === 0 ? true : false}>
                <ArrowBackIosIcon className='ArrowImage'/>
            </button>
            <button className='RightButton' onClick={nextImage} disabled={currentImage === Object.keys(GalleryImageArray).length - 1 ? true : false}>
                <ArrowForwardIosIcon className='ArrowImage'/>
            </button>
        </div>
    );
}

export default PhotoGallery;