import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AcessoriesPage.module.scss';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { PaginatedProducts } from '../../components/PaginatedProducts/PaginatedProducts';

export const AccessoriesPage: React.FC = () => {
  return (
    <div className={styles.pagesContainer}>
      <div className={styles.route}>
        <Link to={RoutesPathes.HOME} className={styles.home}></Link>
        <i className={styles.arrow}></i>
        <Link to={RoutesPathes.ACCESSORIES} className={styles.pageName}>Accessories</Link>
      </div>
      <PaginatedProducts pageLabel='Accessories' productsCategory='accessories' />
    </div>
  );
};