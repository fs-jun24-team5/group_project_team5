import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhonesPage.module.scss';
import { RoutesPathes } from '../../utils/RoutesPathes';

export const PhonesPage: React.FC = () => {
  return (
    <div className={styles.pagesContainer}>
      <div className={styles.route}>
        <Link to={RoutesPathes.HOME} className={styles.home}></Link>
        <i className={styles.arrow}></i>
        <p className={styles.pageName}>Phones</p>
      </div>
    </div>
  );
};
