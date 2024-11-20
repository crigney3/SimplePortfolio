import './Project.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import WebIcon from '@mui/icons-material/Web';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const WebsiteLink = ({
    destination,
    text
}) => {
    return (
        <a className='WebsiteLink' href={destination} target='_blank'>
            <WebIcon className='LinkIcon'/>
            <p>{text}</p>
        </a>
    );
}

const ItchLink = ({
    destination,
    text
}) => {
    return (
        <a className='ItchLink' href={destination} target='_blank'>
            <SportsEsportsIcon className='LinkIcon'/>
            <p>{text}</p>
        </a>
    );
}

const GithubLink = ({
    destination,
    text
}) => {
    return (
        <a className='GithubLink' href={destination} target='_blank'>
            <GitHubIcon className='LinkIcon'/>
            <p>{text}</p>
        </a>
    );
}

const DownloadLink = ({
    destination,
    text
}) => {
    return (
        <a className='DownloadLink' href={destination} target='_blank'>
            <DownloadIcon className='LinkIcon'/>
            <p>{text}</p>
        </a>
    );
}

export {
    WebsiteLink,
    ItchLink,
    GithubLink,
    DownloadLink
}