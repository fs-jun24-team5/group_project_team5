import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './FavouritesPage.module.scss';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { Card } from '../../components/Card/Card';
import { FavoritesContext } from '../../context/FavoritesContext';

export const FavouritesPage: React.FC = () => {
  const { favoriteProducts } = useContext(FavoritesContext);

  return (
    <div className={styles.pagesContainer}>
      <div className={styles.route}>
        <Link to={RoutesPathes.HOME} className={styles.home}></Link>
        <i className={styles.arrow}></i>
        <Link to={RoutesPathes.FAVOURITES} className={styles.pageName}>
          Favourites
        </Link>
      </div>
      <div className={styles.cardsContainer}>
        {favoriteProducts.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favoriteProducts.map((product) => <Card key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};
