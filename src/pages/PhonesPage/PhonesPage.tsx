import React from 'react';
import styles from './PhonesPage.module.scss'
import { ProductsMain } from '../../components/ProductsMain/ProductsMain';
import { Link } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';

export const PhonesPage: React.FC = () => {
  return (
    <div className={styles.pagesContainer}>
        <div className={styles.route}>
          <Link to={RoutesPathes.HOME} className={styles.home}></Link>
          <i className={styles.arrow}></i>
          <Link to={RoutesPathes.PHONES} className={styles.pageName}>
            Phones
          </Link>
        </div>
          <ProductsMain pageLabel='Phones' productsCategory='phones' />
      </div>
  );
};
