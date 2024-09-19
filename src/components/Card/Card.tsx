import React, { useState, useContext } from 'react';
import Heart from '../../assets/icons/card_icons/heart_icon.svg';
import FilledHeart from '../../assets/icons/card_icons/filled_heart_icon.svg';
import styles from './Card.module.scss';
import { Product } from '../../api/type/ProductCart';
import { FavoritesContext } from '../../context/FavoritesContext';
import { Link } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = ({ product }) => {
  const { favoriteProducts, addToFavorites } = useContext(FavoritesContext);
  const [isHeartActive, setIsHeartActive] = useState(favoriteProducts.some(p => p.id === product.id));

  const handleFavoriteClick = () => {
    addToFavorites(product);
    setIsHeartActive(!isHeartActive);
  };

  return (
    <article className={styles.card}>
      <Link to={`${RoutesPathes.PHONES}/${product.id}`}>
        <img src={product.image} alt="iphone" className={styles.image} />
      </Link>

      <Link to={`${RoutesPathes.PHONES}/${product.id}`} className={styles.link}>
        <h3 className={styles.text}>{product.name}</h3>
      </Link>

      <div className={styles.price}>
        <h3 className={styles.priceRegular}>${product.price}</h3>
        <h3 className={styles.priceDiscount}>${product.fullPrice}</h3>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.specs}>
        <div className={styles.screen}>
          <p className={styles.left}>Screen</p>
          <p className={styles.right}>{product.screen}</p>
        </div>

        <div className={styles.memory}>
          <p className={styles.left}>Capacity</p>
          <p className={styles.right}>{product.capacity}</p>
        </div>

        <div className={styles.ram}>
          <p className={styles.left}>RAM</p>
          <p className={styles.right}>{product.ram}</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.add}>Add to cart</button>
        <button className={styles.heart} onClick={handleFavoriteClick}>
          {isHeartActive ? <img src={FilledHeart} alt="addToFavorites" /> : <img src={Heart} alt="" />}
        </button>
      </div>
    </article>
  );
};