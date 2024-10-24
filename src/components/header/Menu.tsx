import React, { useState } from 'react';
import { menuItems } from '../../data/menu';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {

    const [items] = useState(menuItems);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };
    
    return (
        <>
            <button 
                className="nav-toggle" 
                onClick={toggleMobileMenu}> ☰ 
            </button>
            <nav className={`nav ${isMobileMenuOpen ? 'nav--open' : ''}`}>
                <ul className='nav__items'>
                    {items.map((item) => (
                        <li className='nav__item' key={item.id}>
                            <Link 
                                className='nav__item--link' 
                                to={item.url} 
                                onClick={handleLinkClick}
                            >
                                <span className='nav__item--icon'>{item.icon}</span>
                                <span className='nav__item--title'>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Menu;