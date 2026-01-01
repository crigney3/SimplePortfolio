import './Home.css';
import { ProjectLink } from '../Components/ProjectLink';
import { FrontPageCropImages } from '../Components/ProjectData';


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
                <ProjectLink id={2} type='Project'/>
                <ProjectLink id={0} type='Project'/>
                <ProjectLink id={3} type='Project' croppedImage={FrontPageCropImages[2]}/>
                <ProjectLink id={0} type='Job' croppedImage={FrontPageCropImages[5]}/>
                <ProjectLink id={4} type='Project' croppedImage={FrontPageCropImages[3]}/>
                <ProjectLink id={1} type='Job' croppedImage={FrontPageCropImages[4]}/>  
                <ProjectLink id={1} type='Project'/>
                <ProjectLink id={0} type='Hobby' croppedImage={FrontPageCropImages[6]}/>
                <ProjectLink id={1} type='Hobby' croppedImage={FrontPageCropImages[0]}/>
                <ProjectLink id={2} type='Hobby' croppedImage={FrontPageCropImages[1]}/>            
                <ProjectLink id={7} type='Project' croppedImage={FrontPageCropImages[7]}/>
                <ProjectLink id={5} type='Project' croppedImage={FrontPageCropImages[8]}/>
            </div>
        </div>
    );
}

export default Home;