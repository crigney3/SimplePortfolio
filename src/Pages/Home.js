import './Home.css';
import { ProjectLink } from '../Components/ProjectLink';


const Home = () => {

    return (
        <div className='HomePage'>
            <div className='InfoContainer'>
                <img className='CoverImage' src='SmallMe.jpg'></img>
                <div className='InfoItself'>
                    <h1 className='TitleTop ForegroundLight'>Corey Rigney</h1>
                    <p className='JobDesc ForegroundLight'>Game Designer and Software Engineer</p>
                </div>
            </div>
            
            <div className='MainContainer'>
                <ProjectLink id={1} type='Project'/>
                <ProjectLink id={0} type='Project'/>
                <ProjectLink id={3} type='Project'/>
                <ProjectLink id={1} type='Project'/>
                <ProjectLink id={1} type='Project'/>
                <ProjectLink id={0} type='Hobby'/>
                <ProjectLink id={1} type='Hobby'/>
                <ProjectLink id={2} type='Hobby'/>
                <ProjectLink id={3} type='Hobby'/>
                <ProjectLink id={0} type='Job'/>
                <ProjectLink id={8} type='Project'/>
                <ProjectLink id={11} type='Project'/>
            </div>
        </div>
    );
}

export default Home;