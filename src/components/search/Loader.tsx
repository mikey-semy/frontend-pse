import React, { useState, useEffect } from 'react';

const Loader: React.FC = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showLoader]);

  return (
    <div className={`loader ${showLoader ? 'show' : 'hide'}`}>
      <img src="src\assets\animations\cat.gif" alt="Котик" />
    </div>
  );
};

export default Loader;