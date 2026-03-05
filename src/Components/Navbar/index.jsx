import { ExpandMore, Menu } from '@mui/icons-material';
import './Navbar.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { titleToPathname } from '../../Utils';
import { hobbyData } from '../../Utils/Data';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 1000px)'
    })
    const location = useLocation();
    const navigate = useNavigate();
    const [scrollYPos, setScrollYPos] = useState(0);
    const [isNavMenuActive, setIsNavMenuActive] = useState(false);
    const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollYPos(position);
    };

    const handleNavigate = (page) => {
        window.scrollTo(0, 0);
        setIsNavMenuActive(false);
        setIsHobbiesOpen(false);
        navigate(page);
    }

    const mapHobbyToLink = ({ title }) => {
        const pathname = titleToPathname(title);

        return (<button
            type='btn'
            className={`${location.pathname.includes(pathname) ? 'active' : ''}`}
            onClick={() => handleNavigate(`/hobbies/${pathname}`)}
            key={pathname}
        >
            {title}
        </button>)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`Navbar ${scrollYPos > 100 || isNavMenuActive ? 'Navbar-scroll' : ''}`}>
                <div className='page-branding'>
                    <h1 className={`${location.pathname !== '/' ? 'active' : ''}`}>Corey Rigney</h1>
                </div>
                <div className='nav-list'>
                    {!isMobile ? (
                        <>
                            <button 
                                type='btn' 
                                className={`${location.pathname === '/' ? 'active' : ''}`}
                                onClick={() => handleNavigate('/')}
                            >
                                Home
                            </button>
                            <button 
                                type='btn' 
                                className={`${location.pathname === '/portfolio' ? 'active' : ''}`}
                                onClick={() => handleNavigate('/portfolio')}
                            >
                                Portfolio
                            </button>
                            <button 
                                type='btn'
                                className={`${location.pathname.includes('/hobbies') ? 'active' : ''} expandable`}
                            >
                                Hobbies<ExpandMore />
                                <div className='expandable-content'>
                                    {hobbyData.map(mapHobbyToLink)}
                                    <span className='expandable-content-background' />
                                </div>
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => setIsNavMenuActive(!isNavMenuActive)}
                            >
                                <Menu />
                            </button>
                            
                        </>
                    )}
                </div>
                {isMobile && (
                    <div className={`nav-menu ${isNavMenuActive ? 'nav-menu-active' : ''}`}>
                        <button 
                            type='btn' 
                            className={`${location.pathname === '/' ? 'active' : ''}`}
                            onClick={() => handleNavigate('/')}
                        >
                            Home
                        </button>
                        <button 
                            type='btn' 
                            className={`${location.pathname === '/portfolio' ? 'active' : ''}`}
                            onClick={() => handleNavigate('/portfolio')}
                        >
                            Portfolio
                        </button>
                        <button 
                            type='btn'
                            className={`${location.pathname.includes('/hobbies') ? 'active' : ''} expandable ${isHobbiesOpen ? 'expanded' : ''}`}
                            onClick={() => setIsHobbiesOpen(!isHobbiesOpen)}
                        >
                            Hobbies<ExpandMore />
                            <div className='expandable-content'>
                                {hobbyData.map(mapHobbyToLink)}
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;