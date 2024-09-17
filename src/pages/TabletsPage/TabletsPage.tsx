import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TabletsPage.module.scss';
import { RoutesPathes } from '../../utils/RoutesPathes';

export const TabletsPage: React.FC = () => {
  return (
    <div className={styles.pagesContainer}>
      <div className={styles.route}>
        <Link to={RoutesPathes.HOME} className={styles.home}></Link>
        <i className={styles.arrow}></i>
        <p className={styles.pageName}>Tablets</p>
      </div>
    </div>
  );
};