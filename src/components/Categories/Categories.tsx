import React from "react";
import { Link } from "react-router-dom";
import styles from './Categories.module.scss';
import { RoutesPathes } from "../../utils/RoutesPathes";

export const Categories: React.FC = () => {
  return (
    <div className={styles.categories}>
      <h2 className={styles.categories__title}>Shop by category</h2>

      <div className={styles.categories__wrapper}>
        <article className={styles.category}>
          <Link to={RoutesPathes.PHONES}>
            <div className={`${styles.category__image} ${styles.category__image__phones}`} />
          </Link>
          <div className={styles.category__info}>
            <h3 className={styles.category__title}>Mobile phones</h3>
            <p className={styles.category__count}>95 models</p>
          </div>
        </article>
        <article className={styles.category}>
          <Link to={RoutesPathes.TABLETS}>
            <div className={`${styles.category__image} ${styles.category__image__tablets}`} />
          </Link>
          <div className={styles.category__info}>
            <h3 className={styles.category__title}>Tablets</h3>
            <p className={styles.category__count}>24 models</p>
          </div>
        </article>
        <article className={styles.category}>
          <Link to={RoutesPathes.ACCESSORIES}>
            <div className={`${styles.category__image} ${styles.category__image__accessories}`} />
          </Link>
          <div className={styles.category__info}>
            <h3 className={styles.category__title}>Accessories</h3>
            <p className={styles.category__count}>100 models</p>
          </div>
        </article>
      </div>
    </div>
  );
};
