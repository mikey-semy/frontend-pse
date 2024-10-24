import React, { useState }  from 'react';

const NavIcon: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
      setIsActive(!isActive);
        document.querySelector('.nav')?.classList.toggle('active');
    };

  return (
    <div className="nav__icon" onClick={handleClick}>
      ☰
    </div>
  );
};

export default NavIcon;