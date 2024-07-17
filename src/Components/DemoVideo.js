import './Project.css';

const DemoVideo = ({
    videoSource
}) => {

    return (
        <div className='VideoEmbed'>
            <iframe 
            src={videoSource} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
}

export default DemoVideo;