import './Project.css';

const WebsiteLink = ({
    destination,
    text
}) => {
    return (
        <div className='ProjectLink WebsiteLink'>
            <a href={destination}>{text}</a>
        </div>
    );
}

const ItchLink = ({
    destination,
    text
}) => {
    return (
        <div className='ProjectLink ItchLink'>
            <a href={destination}>{text}</a>
        </div>
    );
}

const GithubLink = ({
    destination,
    text
}) => {
    return (
        <div className='ProjectLink GithubLink'>
            <a href={destination}>{text}</a>
        </div>
    );
}

const DownloadLink = ({
    destination,
    text
}) => {
    return (
        <div className='ProjectLink DownloadLink'>
            <a href={destination}>{text}</a>
        </div>
    );
}

export {
    WebsiteLink,
    ItchLink,
    GithubLink,
    DownloadLink
}