import './Home.css';
import { ProjectLink } from '../Components/ProjectLink';


const Home = () => {

    return (
        <div className='HomePage'>
            <h1 className='TitleTop'>Corey Rigney</h1>
            <div className='MainContainer'>
                <ProjectLink id={1} type='Project'/>
                <ProjectLink id={1} type='Project'/>
                <ProjectLink id={3} type='Project'/>
                <ProjectLink id={1} type='Project'/>
                <ProjectLink id={1} type='Project'/>
                <ProjectLink id={0} type='Hobby'/>
                <ProjectLink id={1} type='Hobby'/>
                <ProjectLink id={0} type='Hobby'/>
                <ProjectLink id={3} type='Hobby'/>
                <ProjectLink id={0} type='Job'/>
                <ProjectLink id={8} type='Project'/>
                <ProjectLink id={1} type='Project'/>
            </div>
        </div>
    );
}

export default Home;