import './TechBanner.css';
import { TechToImage, TechToLink } from './ProjectData';
import { useState, useEffect } from 'react';

const TechBanner = ({
    TechArray = []
}) => {
    const [techElements, setTechElements] = useState([]);

    useEffect(() => {
        createTechElements();
    }, []);

    const createTechElements = () => {
        let tempTechElements = [];
        let keys = Object.keys(TechArray);

        for (let i = 0; i < keys.length; i++) {
            tempTechElements.push(
            <a key={TechArray[i].toString()} className='InternalTech' href={TechToLink[i]}>
                <img src={'/logos/' + TechArray[i].toString() + '.webp'}/>
                <p>{TechArray[i]}</p>
            </a>);
        }

        setTechElements(tempTechElements);
    };

    return (
        <div className='TechBanner'>
            {techElements}
        </div>
    )

}

export default TechBanner;