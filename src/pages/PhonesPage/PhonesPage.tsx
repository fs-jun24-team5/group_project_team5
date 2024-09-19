import React from 'react';
import styles from './PhonesPage.module.scss'
import { ProductsMain } from '../../components/ProductsMain/ProductsMain';
import { Link } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { useParams } from 'react-router-dom';

export const PhonesPage: React.FC = () => {
  const { phonesId } = useParams<{ phonesId: string }>();

  const linkClassName = phonesId ? styles.pageNameActive : styles.pageName;

  return (
    <div className={styles.pagesContainer}>
      <div className={styles.route}>
        <Link to={RoutesPathes.HOME} className={styles.home}></Link>
        <i className={styles.arrow}></i>
        <Link to={RoutesPathes.PHONES} className={linkClassName}>
          Phones
        </Link>
        {phonesId && (
          <>
            <i className={styles.arrow}></i>
            <p className={styles.pageName}>{phonesId}</p>
          </>
        )}
      </div>
      <ProductsMain pageLabel="Phones" productsCategory="phones" />
    </div>
  );
};