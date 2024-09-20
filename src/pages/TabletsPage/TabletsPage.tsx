import React from 'react';
import styles from './TabletsPage.module.scss'
import { ProductsMain } from '../../components/ProductsMain/ProductsMain';
import { Link } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { ProductCategories } from '../../utils/ProductCategories';

export const TabletsPage: React.FC = () => {
  return (
    <div className={styles.pagesContainer}>
        <div className={styles.route}>
          <Link to={RoutesPathes.HOME} className={styles.home}></Link>
          <i className={styles.arrow}></i>
          <Link to={RoutesPathes.PHONES} className={styles.pageName}>
            Tablets
          </Link>
        </div>
          <ProductsMain pageLabel='Tablets' productsCategory={ProductCategories.TABLETS} />
      </div>
  );
};