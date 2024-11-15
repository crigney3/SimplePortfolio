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
        <div className='WebsiteLink'>
            <div className='LinkIcon'>
                <WebIcon/>
            </div>
            <a href={destination}>{text}</a>
        </div>
    );
}

const ItchLink = ({
    destination,
    text
}) => {
    return (
        <div className='ItchLink'>
            <div className='LinkIcon'>
                <SportsEsportsIcon/>
            </div>
            <a href={destination}>{text}</a>
        </div>
    );
}

const GithubLink = ({
    destination,
    text
}) => {
    return (
        <div className='GithubLink'>
            <div className='LinkIcon'>
                <GitHubIcon/>
            </div>
            <a href={destination}>{text}</a>
        </div>
    );
}

const DownloadLink = ({
    destination,
    text
}) => {
    return (
        <div className='DownloadLink'>
            <div className='LinkIcon'>
                <DownloadIcon/>
            </div>
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