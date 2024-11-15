import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, {useState, useEffect} from 'react';
import './SideNavbar.css';

const SideNavbar = ({
    
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='SideNavbar'>
            <MenuOpenIcon/>
        </div>
    );
}

export default SideNavbar;