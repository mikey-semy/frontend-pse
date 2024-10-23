import React from 'react';

const Main: React.FC = () => {

  return (
    <>
        <footer className='footer'>
          <div className="footer-bottom">
            PSE ©{new Date().getFullYear()} Создано для удобства
          </div>
        </footer>    
    </>
  );
};

export default Main;