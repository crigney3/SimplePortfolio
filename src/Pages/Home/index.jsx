import './Home.css';
import { useEffect, useState } from 'react';
import { titleToProjectId } from '../../Utils';
import { projectData, jobData } from '../../Utils/Data';
import { techLogos, Portrait, DemoReels } from '../../Media';
import { useNavigate } from 'react-router-dom';
import Particles from '../../Components/Particles';
import { ComputerOutlined, LeaderboardOutlined, LibraryMusicOutlined, PhoneAndroidOutlined } from '@mui/icons-material';

const Landing = () => {
    const [scrollYPos, setScrollYPos] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollYPos(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='landing'>
            <div className={`landing-brand ${scrollYPos > 100 ? 'landing-brand-scroll' : ''}`}>
                <h1 className='landing-brand-name ForegroundLight'>Corey Rigney</h1>
                <p className='landing-brand-title ForegroundLight'><span>Game</span> Developer</p>
            </div>
            <div className='landing-overlay'>
                <Particles 
                    particleColors={["#5de872", "#808080"]}
                    particleCount={75}
                    particleSpread={10}
                    speed={0.05}
                    particleBaseSize={100}
                    sizeRandomness={0.2}
                    alphaParticles={true}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
            <video className='landing-reel' src={DemoReels.LandingReel} playsInline autoPlay loop muted />
        </div>
    )
}

const STATS = {
    mobilePublished: '2',
    desktopPublished: '1',
    teamLead: '7',
    songsKnown: '~300'
}

const AboutMe = () => (
    <div className='about-me'>
        <div className='about-me-content'>
            <h2>I'm Corey Rigney, Game Designer, Engine Developer, and Project Manager.</h2>
            <div className='about-me-content-stats'>
                <span>
                    <PhoneAndroidOutlined />
                    <h3>{STATS.mobilePublished}</h3>
                    <p>Mobile game(s) published</p>
                </span>
                <span>
                    <ComputerOutlined />
                    <h3>{STATS.desktopPublished}</h3>
                    <p>PC game engine(s) published</p>
                </span>
                <span>
                    <LeaderboardOutlined />
                    <h3>{STATS.teamLead}</h3>
                    <p>Team lead on gamedev project(s)</p>
                </span>
                <span>
                    <LibraryMusicOutlined />
                    <h3>{STATS.songsKnown}</h3>
                    <p>Song(s) known on drumkit</p>
                </span>
            </div>
            <p>
                I specialize in <b>graphics programming</b> and <b>gameplay systems</b>. I've worked in both a professional and indie capacity in <b>Unreal Engine</b> and <b>Unity</b>, as well as developing <b>my own game engine, SHOE</b>.
                <br/>I'm an expert in <b>large-scale systems</b>, having made major <b>optimizations</b> on <b>Windows 10 + 11</b> through my work at Microsoft.
                <br/>Currently I am <b>looking for work</b> in the industry after recently finishing a contract for the University of Evansville.
            </p>
        </div>
        <div className='about-me-portrait'>
            <img src={Portrait} />
        </div>
    </div>
)

const Experience = () => {

    const mapTechToLogo = (techName) => (
        <span className='experience-list-item-tech-logo'>
            <img src={techLogos[techName]} alt={`${techName} Logo`} />
            <p>{techName}</p>
        </span>
    )

    const mapJobToComponent = ({title, description, techArray}, index) => (
        <div className='experience-list-item' style={{ gridRow: index+1 }}>
            <h3>{title}</h3>
            <div className='experience-list-item-tech'>{techArray.map(mapTechToLogo)}</div>
            <p>{description}</p>
            <span className='circle' />
        </div>
    )

    return (
        <div className='experience'>
            <h2>My <span>Experience</span></h2>
            <div className='experience-list'>
                {jobData.map(mapJobToComponent)}
            </div>
        </div>
    )
}

const Projects = () => {
    const MAX_SHOWCASE_NUMBER = 7;
    const navigate = useNavigate();

    const mapProjectToComponent = ({title, description, brandingImage}) => (
        <div 
            className='projects-list-item'
            onClick={() => {
                navigate('/portfolio', { state: {
                    selectedProject: titleToProjectId(title)
                }})
            }}
        >
            <span>
                <h3>{title}</h3>
                <p>{description}</p>
            </span>
            <img src={brandingImage} />
        </div>
    )

    const handleNavigate = () => {
        navigate('/portfolio');
        window.scrollTo(0, 0);
    }

    return (
        <div className='projects'>
            <h2>My <span>Work</span></h2>
            <div className='projects-list'>
                {projectData.slice(0, MAX_SHOWCASE_NUMBER).map(mapProjectToComponent)}
                <div className='projects-list-item portfolio-link' onClick={handleNavigate}>
                    <h3>And even more!</h3>
                </div>
            </div>
        </div>
    )
}

const Home = () => {

    return (
        <div className='Home'>
            <Landing />
            <AboutMe />
            <Experience />
            <hr />
            <Projects />
        </div>
    );
}

export default Home;