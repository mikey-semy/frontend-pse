import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;