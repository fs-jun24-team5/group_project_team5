import React, { useContext } from 'react';
import styles from './AcessoriesPage.module.scss';
import { ProductsMain } from '../../components/ProductsMain/ProductsMain';
import { Link } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { ProductCategories } from '../../utils/ProductCategories';
import classNames from 'classnames';
import { FavoritesContext } from '../../context/FavoritesContext';

export const AccessoriesPage: React.FC = () => {
  <h1>test</h1>
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
          Accessories
        </Link>
      </div>
      <ProductsMain pageLabel="Accessories" productsCategory={ProductCategories.ACCESSORIES} />
    </div>
  );
};
