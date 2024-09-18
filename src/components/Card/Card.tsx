import React, { useState } from 'react';
import Heart from '../../assets/icons/card_icons/heart_icon.svg';
import FilledHeart from '../../assets/icons/card_icons/filled_heart_icon.svg';
import styles from './Card.module.scss';
import { ProductTypeExtended } from '../../api/type/ProductTypeExtended';

type Props = {
  product: ProductTypeExtended;
};

export const Card: React.FC<Props> = ({ product }) => {
  const [isHeartActive, setIsHeartActive] = useState(false);

  return (
    <article className={styles.card}>
      <img src={product.images[0]} alt="iphone" className={styles.image} />

      <h3 className={styles.text}>{product.name}</h3>

      <div className={styles.price}>
        <h3 className={styles.priceRegular}>${product.priceDiscount}</h3>
        <h3 className={styles.priceDiscount}>${product.priceRegular}</h3>
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
        <button className={styles.heart} onClick={() => setIsHeartActive(!isHeartActive)}>
          {isHeartActive ? <img src={FilledHeart} alt="" /> : <img src={Heart} alt="" />}
        </button>
      </div>
    </article>
  );
};
