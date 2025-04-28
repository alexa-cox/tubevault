import React from 'react';
import styles from './logo.module.css';
import { useNavigate } from 'react-router-dom';

function Logo({ size = 50, width, height, className }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleLogoClick();
    }
  };

  return (
    <div
      className={styles.logoWrapper}
      role='button'
      tabIndex='0'
      onClick={handleLogoClick}
      onKeyDown={handleKeyPress}
    >
      <img
        style={{
          height: height || size,
          width: width || size,
        }}
        className={`${className} ${styles.logo}`}
        src='/images/logo.svg'
        alt='Tube Valut Logo'
      />
    </div>
  );
}

export default Logo;
