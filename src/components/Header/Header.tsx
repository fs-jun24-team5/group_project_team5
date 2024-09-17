import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to={RoutesPathes.HOME} className={styles.logo} />

      <ul className={styles.links}>
        <li>
          <Link to={RoutesPathes.HOME} className={styles.link}>
            home
          </Link>
        </li>
        <li>
          <Link to={RoutesPathes.PHONES} className={styles.link}>
            phones
          </Link>
        </li>
        <li>
          <Link to={RoutesPathes.TABLETS} className={styles.link}>
            tablets
          </Link>
        </li>
        <li>
          <Link to={RoutesPathes.ACCESSORIES} className={styles.link}>
            accessories
          </Link>
        </li>
      </ul>
      <ul className={styles.icons}>
        <li className={styles.icon}>
          <Link to={RoutesPathes.FAVOURITES} className={`${styles.iconLink_heart}`} />
        </li>
        <li className={styles.icon}>
          <Link to={RoutesPathes.CART} className={`${styles.iconLink_bag}`} />
        </li>
        <li className={styles.icon}>
          <a href="/" className={`${styles.iconLink_burger}`} />
        </li>
      </ul>
    </div>
  );
};
