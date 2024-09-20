import React, { useContext } from 'react';
import styles from './TabletsPage.module.scss';
import { ProductsMain } from '../../components/ProductsMain/ProductsMain';
import { Link } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { ProductCategories } from '../../utils/ProductCategories';
import { FavoritesContext } from '../../context/FavoritesContext';
import classNames from 'classnames';

export const TabletsPage: React.FC = () => {
  const { theme } = useContext(FavoritesContext);

  return (
    <div className={styles.pagesContainer}>
      <div className={styles.route}>
        <Link
          to={RoutesPathes.HOME}
          className={classNames(styles.home, {
            [styles.dark]: theme === 'dark',
          })}
        />

        <i className={styles.arrow}></i>
        <Link to={RoutesPathes.PHONES} className={styles.pageName}>
          Tablets
        </Link>
      </div>
      <ProductsMain pageLabel='Tablets' productsCategory={ProductCategories.TABLETS} />
    </div>
  );
};
