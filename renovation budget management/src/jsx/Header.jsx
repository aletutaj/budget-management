import React, {useState} from 'react';
import '../scss/elements/_header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faHome, faUtensils, faBath, faBriefcase, faBed} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header className="header">
            <div className="menu" onClick={toggleMenu}>
                <span>Zarządzanie budżetem remontowym</span>
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
            {menuVisible && (
                <ul className="submenu">
                    <li>
                        <FontAwesomeIcon icon={faHome}/>
                        <span>Salon</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUtensils}/>
                        <span>Kuchnia</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBath}/>
                        <span>Łazienka</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBriefcase}/>
                        <span>Gabinet</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Sypialnia</span>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Header;