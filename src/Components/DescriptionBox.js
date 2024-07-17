import './Project.css';

const TitleBox = ({
    titleText
}) => {

    return (
        <div className='TitleBox'>
            <p className='TitleText'>{titleText}</p>
        </div>
    );
}

const DescriptionBox = ({
    descriptionText
}) => {

    return (
        <div className='DescriptionBox'>
            <p className='DescriptionText'>{descriptionText}</p>
        </div>
    );
}

export {
    TitleBox,
    DescriptionBox
}