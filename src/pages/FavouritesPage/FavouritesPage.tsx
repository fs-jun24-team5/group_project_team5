import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './FavouritesPage.module.scss';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { Card } from '../../components/Card/Card';
import { FavoritesContext } from '../../context/FavoritesContext';
import classNames from 'classnames';

export const FavouritesPage: React.FC = () => {
  const { favoriteProducts, theme } = useContext(FavoritesContext);

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
        <Link to={RoutesPathes.FAVOURITES} className={styles.pageName}>
          Favourites
        </Link>
      </div>

      <div className={styles.products_main}>
        <div className={styles.category_info}>
          <h2 className={styles.category_name}>Favourites</h2>
          {!!favoriteProducts.length && (
            <p className={styles.category_models}>{`${favoriteProducts.length} models`}</p>
          )}
        </div>
        <div className={styles.product_cards}>
          {favoriteProducts.length === 0 ? (
            <div className={styles.no_favourites}>
              <h3>No favourites yet.</h3>
            </div>
          ) : (
            favoriteProducts.map((product) => (
              <div key={product.id} className={styles.product_card}>
                <Card product={product} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
