import React, { useState, useEffect } from 'react';
import '../../styles/reusable/Toast.css';

const Toast = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="toast">
      <p className='poppins-regular'>{message}</p>
    </div>
  );
};

export default Toast;
