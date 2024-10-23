import React from 'react';

interface ErrorMessageProps {
    message?: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({message = 'Опс...'}) => {

  return (
    <div className='error--message'>
      {message}
    </div>
  );
};

export default ErrorMessage;