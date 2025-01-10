import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    return (
        <div className='Footer BackgroundDarkExtra'>
            <div className='FooterContentMain'>
                <a className='FooterContent' target='_blank' href='https://github.com/crigney3'>
                    <GitHubIcon className='FooterIcon'/>
                    <p className='FooterGithubLink ForegroundLight'>Github</p>
                </a>
                <a className='FooterContent' target='_blank' href='mailto:coreyrigney@gmail.com'>
                    <EmailIcon className='FooterIcon'/>
                    <p className='EmailLink ForegroundLight'>coreyrigney@gmail.com</p>
                </a>
                <a className='FooterContent' target='_blank' href='/CoreyRigneyResume.pdf' download>
                    <DescriptionIcon className='FooterIcon'/>
                    <p className='Resume ForegroundLight'>Resume Download</p>
                </a>
                <a className='FooterContent' target='_blank' href='https://www.linkedin.com/in/corey-rigney/'>
                    <LinkedInIcon className='FooterIcon'/>
                    <p className='LinkedIn ForegroundLight' >LinkedIn</p>
                </a>
            </div>
        </div>
    );
}

export default Footer;