import './Projects.css';
import Project from '../Components/Project';

const Projects = () => {


    return (
        <body className='ProjectsBackground'>
            <div className='ProjectsPage'>
                <Project 
                titleText="wadihj" 
                descriptionText="This is a description. It's a test and it's kinda long because it has to be. for the test. You know."
                videoLink='https://www.youtube.com/embed/PU6Bopb1CVE?si=jGryBpGV5gyTENGD'></Project>
            </div>
        </body>
    );
}

export default Projects;