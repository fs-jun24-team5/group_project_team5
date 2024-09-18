import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TabletsPage.module.scss';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { PaginatedProducts } from '../../components/PaginatedProducts/PaginatedProducts';

export const TabletsPage: React.FC = () => {
  return (
    <div className={styles.pagesContainer}>
      <div className={styles.route}>
        <Link to={RoutesPathes.HOME} className={styles.home}></Link>
        <i className={styles.arrow}></i>
        <Link to={RoutesPathes.TABLETS} className={styles.pageName}>Tablets</Link >
      </div>
      <PaginatedProducts pageLabel='Tablets' productsCategory='tablets' />
    </div>
  );
};