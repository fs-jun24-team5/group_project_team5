import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { FavoritesContext } from '../../context/FavoritesContext';
import classNames from 'classnames';

export const Categories: React.FC = () => {
  const { theme } = useContext(FavoritesContext);

  return (
    <div className={styles.categories}>
      <h2
        className={classNames(styles.categories__title, {
          [styles.dark]: theme === 'dark',
        })}
      >
        Shop by category
      </h2>

      <div className={styles.categories__wrapper}>
        <article className={styles.category}>
          <Link to={RoutesPathes.PHONES}>
            <div className={`${styles.category__image} ${styles.category__image__phones}`} />
          </Link>
          <div className={styles.category__info}>
            <h3
              className={classNames(styles.category__title, {
                [styles.dark]: theme === 'dark',
              })}
            >
              Mobile phones
            </h3>
            <p className={styles.category__count}>95 models</p>
          </div>
        </article>
        
        <article className={styles.category}>
          <Link to={RoutesPathes.TABLETS}>
            <div className={`${styles.category__image} ${styles.category__image__tablets}`} />
          </Link>
          <div className={styles.category__info}>
            <h3
              className={classNames(styles.category__title, {
                [styles.dark]: theme === 'dark',
              })}
            >
              Tablets
            </h3>
            <p className={styles.category__count}>24 models</p>
          </div>
        </article>

        <article className={styles.category}>
          <Link to={RoutesPathes.ACCESSORIES}>
            <div className={`${styles.category__image} ${styles.category__image__accessories}`} />
          </Link>
          <div className={styles.category__info}>
            <h3
              className={classNames(styles.category__title, {
                [styles.dark]: theme === 'dark',
              })}
            >
              Accessories
            </h3>
            <p className={styles.category__count}>100 models</p>
          </div>
        </article>
      </div>
    </div>
  );
};
