import './Home.css';
import { ProjectLink } from '../Components/ProjectLink';


const Home = () => {

    return (
        <div className='HomePage'>
            <div className='MainContainer'>
                <div className='TopLinks'>
                    <ProjectLink id={10} type='Project'/>
                </div>
                <div className='CenterLinks'>

                </div>
                <div className='BottomLinks'>

                </div>
            </div>
        </div>
    );
}

export default Home;