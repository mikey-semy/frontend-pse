import React, { useState } from 'react';
import { menuItems } from '../../data/menu';

const NavigationLocal: React.FC = () => {

    const [items] = useState(menuItems);

  return (
        <nav className='nav'>
            <ul className='nav__items'>
                {items.map((item) => (
                        <li className='nav__item' key={item.id}>
                            <a className='nav__item--link' href={item.url}>
                                <span className='nav__item--icon'>{item.icon}</span>
                                <span className='nav__item--title'>{item.title}</span>
                            </a>
                        </li>
                ))}
            </ul>
        </nav>
  );
};

export default NavigationLocal;