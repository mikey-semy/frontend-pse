import React, { useState } from 'react';
import Button from '../buttons/Button';
import { getBookmark } from '../../api';


const CopyButton: React.FC = () => {
    const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
        const text = await getBookmark();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }   catch (error) {
        console.error('Ошибка при копировании:', error);
    }
  };

  return (
    <>
        <Button
            className="button--copy"
            type="button"
            onClick={handleCopy} 
            icon={copied ? '👍' : '📋'}
        />
    </>
  );
};

export default CopyButton;
