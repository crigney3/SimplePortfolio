import './Project.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import WebIcon from '@mui/icons-material/Web';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const WebsiteLink = ({
    destination,
    text
}) => {
    return (
        <a className='WebsiteLink BackgroundDark' href={destination} target='_blank'>
            <WebIcon className='LinkIcon'/>
            <p className='ForegroundLight'>{text}</p>
        </a>
    );
}

const ItchLink = ({
    destination,
    text
}) => {
    return (
        <a className='ItchLink BackgroundDark' href={destination} target='_blank'>
            <SportsEsportsIcon className='LinkIcon'/>
            <p className='ForegroundLight'>{text}</p>
        </a>
    );
}

const GithubLink = ({
    destination,
    text
}) => {
    return (
        <a className='GithubLink BackgroundDark' href={destination} target='_blank'>
            <GitHubIcon className='LinkIcon'/>
            <p className='ForegroundLight'>{text}</p>
        </a>
    );
}

const DownloadLink = ({
    destination,
    text
}) => {
    return (
        <a className='DownloadLink BackgroundDark' href={destination} target='_blank'>
            <DownloadIcon className='LinkIcon'/>
            <p className='ForegroundLight'>{text}</p>
        </a>
    );
}

const MiscLink = ({
    destination,
    text
}) => {
    return (
        <a className='MiscLink BackgroundDark' href={destination} target='_blank'>
            <LanguageIcon className='LinkIcon'/>
            <p className='ForegroundLight'>{text}</p>
        </a>
    );
}

const VideoLink = ({
    destination,
    text
}) => {
    return (
        <a className='MiscLink BackgroundDark' href={destination} target='_blank'>
            <YouTubeIcon className='LinkIcon'/>
            <p className='ForegroundLight'>{text}</p>
        </a>
    );
}

const TwitchLink = ({
    destination,
    text
}) => {
    return (
        <a className='MiscLink BackgroundDark' href={destination} target='_blank'>
            <VideoLibraryIcon className='LinkIcon'/>
            <p className='ForegroundLight'>{text}</p>
        </a>
    );
}

export {
    WebsiteLink,
    ItchLink,
    GithubLink,
    DownloadLink,
    MiscLink,
    TwitchLink,
    VideoLink
}