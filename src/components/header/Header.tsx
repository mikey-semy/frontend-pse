import React from 'react';
import Logo from './Logo';
import NavIcon from './NavIcon';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <NavIcon />
      <Menu />
    </header>
  );
};

export default Header;