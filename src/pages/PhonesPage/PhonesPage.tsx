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
        <Link to={RoutesPathes.PHONES} className={styles.pageName}>Phones</Link>
      </div>
    </div>
  );
};
