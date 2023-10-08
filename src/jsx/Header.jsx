import {useEffect, useState} from 'react';
import React from "react";
import '../scss/elements/_header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUtensils,
    faBath,
    faBriefcase,
    faBed,
    faChevronDown,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();
    const [headerText, setHeaderText] = useState('Zarządzanie budżetem remontowym');

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleMenuItemClick = () => {
        setMenuVisible(false);
    };

    const handleHomeIconClick = (e) => {
        if (menuVisible) {
            e.preventDefault();
        }
    };

    useEffect(() => {
        switch (location.pathname) {
            case '/salon':
                setHeaderText('Salon');
                break;
            case '/kuchnia':
                setHeaderText('Kuchnia');
                break;
            case '/lazienka':
                setHeaderText('Łazienka');
                break;
            case '/gabinet':
                setHeaderText('Gabinet');
                break;
            case '/sypialnia':
                setHeaderText('Sypialnia');
                break;
            default:
                setHeaderText('Zarządzanie budżetem remontowym');
                break;
        }
    }, [location.pathname]);


    return (
        <header className="header">
            <div className="menu">
                <Link to="/" onClick={handleHomeIconClick}>
                    <FontAwesomeIcon icon={faGlobe}/>
                </Link>
                <span>{headerText}</span>
                <FontAwesomeIcon onClick={toggleMenu} icon={faChevronDown}/>
            </div>
            {menuVisible && (
                <ul className="submenu">
                    <li>
                        <Link to="/salon" onClick={handleMenuItemClick}>
                            <FontAwesomeIcon icon={faHome}/>
                            <span> Salon</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/kuchnia" onClick={handleMenuItemClick}>
                            <FontAwesomeIcon icon={faUtensils}/>
                            <span> Kuchnia</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/lazienka" onClick={handleMenuItemClick}>
                            <FontAwesomeIcon icon={faBath}/>
                            <span> Łazienka</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gabinet" onClick={handleMenuItemClick}>
                            <FontAwesomeIcon icon={faBriefcase}/>
                            <span> Gabinet</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sypialnia" onClick={handleMenuItemClick}>
                            <FontAwesomeIcon icon={faBed}/>
                            <span> Sypialnia</span>
                        </Link>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Header;