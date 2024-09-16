import React, { useState } from 'react';
import Heart from '../../assets/icons/card_icons/heart_icon.svg';
import FilledHeart from '../../assets/icons/card_icons/filled_heart_icon.svg';
import IphoneImage from '../../assets/images/card_images/iPhone_XS.png';
import styles from './Card.module.scss';

export const Card: React.FC = () => {
  const [isHeartActive, setIsHeartActive] = useState(false);

  return (
    <article className={styles.card}>
      <img src={IphoneImage} alt="iphone" className={styles.image} />

      <h3 className={styles.text}>Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</h3>

      <div className={styles.price}>
        <h3 className={styles.priceRegular}>$799</h3>
        <h3 className={styles.priceDiscount}>$899</h3>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.specs}>
        <div className={styles.screen}>
          <p className={styles.left}>Screen</p>
          <p className={styles.right}>5.8” OLED</p>
        </div>

        <div className={styles.memory}>
          <p className={styles.left}>Capacity</p>
          <p className={styles.right}>64 GB</p>
        </div>

        <div className={styles.ram}>
          <p className={styles.left}>RAM</p>
          <p className={styles.right}>4 GB</p>
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
