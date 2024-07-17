import './Footer.css';

const Footer = () => {

    return (
        <div className='Footer'>
            <div className='FooterContentMain'>
                <div className='FooterContent'>
                    <a className='GithubLink' href='https://github.com/crigney3'>Github</a>
                </div>
                <div className='FooterContent'>
                    <a className='EmailLink' href='mailto:coreyrigney@gmail.com'>coreyrigney@gmail.com</a>
                </div>
                <div className='FooterContent'>
                    <a className='Resume' href='/content/Resume.pdf' download>Resume Download</a>
                </div>
                <div className='FooterContent'>
                    <a className='LinkedIn' href='https://www.linkedin.com/in/corey-rigney/'>LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;