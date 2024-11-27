import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    return (
        <div className='Footer BackgroundDarkExtra'>
            <div className='FooterContentMain'>
                <div className='FooterContent'>
                    <GitHubIcon style={{color: 'white'}}/>
                    <a className='FooterGithubLink ForegroundLight' target='_blank' href='https://github.com/crigney3'>Github</a>
                </div>
                <div className='FooterContent'>
                    <EmailIcon style={{color: 'white'}}/>
                    <a className='EmailLink ForegroundLight' target='_blank' href='mailto:coreyrigney@gmail.com'>coreyrigney@gmail.com</a>
                </div>
                <div className='FooterContent'>
                    <DescriptionIcon style={{color: 'white'}}/>
                    <a className='Resume ForegroundLight' target='_blank' href='/content/Resume.pdf' download>Resume Download</a>
                </div>
                <div className='FooterContent'>
                    <LinkedInIcon style={{color: 'white'}}/>
                    <a className='LinkedIn ForegroundLight' target='_blank' href='https://www.linkedin.com/in/corey-rigney/'>LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;