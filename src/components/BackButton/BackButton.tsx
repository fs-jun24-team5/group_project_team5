import React from 'react';
import styles from './BackButton.module.scss';

export const BackButton: React.FC = () => {
  return(
    <div className={styles.backButton}>
      <a href="#" className={styles.arrow}></a>
      <h3 className={styles.text}>Back</h3>
    </div>
  )
}