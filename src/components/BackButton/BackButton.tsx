import React from 'react';
import styles from './BackButton.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Link to="#" onClick={handleGoBack} style={{textDecoration: "none"}}>
      <div className={styles.backButton}>
        <i className={styles.arrow}></i>
        <h3 className={styles.text}>Back</h3>
      </div>
    </Link>
  );
};
