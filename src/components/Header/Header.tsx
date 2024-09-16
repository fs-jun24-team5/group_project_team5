import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo} />

      <ul className={styles.links}>
        <li>
          <Link to="/" className={styles.link}>
            home
          </Link>
        </li>
        <li>
          <Link to="/phones" className={styles.link}>
            phones
          </Link>
        </li>
        <li>
          <Link to="/tablets" className={styles.link}>
            tablets
          </Link>
        </li>
        <li>
          <Link to="/accessories" className={styles.link}>
            accessories
          </Link>
        </li>
      </ul>
      <ul className={styles.icons}>
        <li className={styles.icon}>
          <Link to="/favourites" className={`${styles.iconLink_heart}`} />
        </li>
        <li className={styles.icon}>
          <Link to="/cart" className={`${styles.iconLink_bag}`} />
        </li>
        <li className={styles.icon}>
          <a href="/" className={`${styles.iconLink_burger}`} />
        </li>
      </ul>
    </div>
  );
};
