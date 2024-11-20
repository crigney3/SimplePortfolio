import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    return (
        <div className='Footer'>
            <div className='FooterContentMain'>
                <div className='FooterContent'>
                    <GitHubIcon/>
                    <a className='FooterGithubLink' href='https://github.com/crigney3'>Github</a>
                </div>
                <div className='FooterContent'>
                    <EmailIcon/>
                    <a className='EmailLink' href='mailto:coreyrigney@gmail.com'>coreyrigney@gmail.com</a>
                </div>
                <div className='FooterContent'>
                    <DescriptionIcon/>
                    <a className='Resume' href='/content/Resume.pdf' download>Resume Download</a>
                </div>
                <div className='FooterContent'>
                    <LinkedInIcon/>
                    <a className='LinkedIn' href='https://www.linkedin.com/in/corey-rigney/'>LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;