import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    return (
        <div className='Footer'>
            <div className='contact-info'>
                <h2>Contact Info</h2>
                <p><span>Email:</span> coreyrigney@gmail.com</p>
                <p><span>Phone:</span> (812) 431-9616</p>
                <p><span>Location:</span> Seattle, WA</p>
            </div>
            <div className='external-links'>
                <a 
                    target='_blank'
                    href='https://github.com/crigney3'
                >
                    <GitHubIcon />
                </a>
                <a 
                    target='_blank'
                    href='https://www.linkedin.com/in/corey-rigney/'
                >
                    <LinkedInIcon />
                </a>
                <a 
                    target='_blank'
                    href='/CoreyRigneyResume.pdf' 
                    download
                >
                    <DescriptionIcon />
                </a>
                <a 
                    target='_blank'
                    href='mailto:coreyrigney@gmail.com'
                >
                    <EmailIcon />
                </a>
            </div>
        </div>
    );
}

export default Footer;