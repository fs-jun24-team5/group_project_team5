// Header.tsx
import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { MobileBurgerMenu } from '../MobileBurgerMenu/MobileBurgerMenu';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.container}>
      <Link to={RoutesPathes.HOME} className={styles.logo} />

      <ul className={styles.links}>
      <li>
        <Link
          to={RoutesPathes.HOME}
          className={classNames(styles.link, {
            [styles.selected]: location.pathname === RoutesPathes.HOME,
          })}
        >
          home
        </Link>
      </li>
      <li>
        <Link
          to={RoutesPathes.PHONES}
          className={classNames(styles.link, {
            [styles.selected]: location.pathname.includes(RoutesPathes.PHONES),
          })}
        >
          phones
        </Link>
      </li>
      <li>
        <Link
          to={RoutesPathes.TABLETS}
          className={classNames(styles.link, {
            [styles.selected]: location.pathname.includes(RoutesPathes.TABLETS),
          })}
        >
          tablets
        </Link>
      </li>
      <li>
        <Link
          to={RoutesPathes.ACCESSORIES}
          className={classNames(styles.link, {
            [styles.selected]: location.pathname.includes(RoutesPathes.ACCESSORIES),
          })}
        >
          accessories
        </Link>
      </li>    
    </ul>

      <ul className={styles.icons}>
      <li className={styles.icon}>
        <Link
          to={RoutesPathes.FAVOURITES}
          className={classNames(styles.iconLink_heart, {
            [styles.selected]: location.pathname.includes(RoutesPathes.FAVOURITES),
          })}
        />
      </li>
      <li className={styles.icon}>
        <Link
          to={RoutesPathes.CART}
          className={classNames(styles.iconLink_bag, {
            [styles.selected]: location.pathname.includes(RoutesPathes.CART),
          })}
        />
      </li>
        <li className={styles.icon}>
          <button onClick={toggleMenu} className={`${styles.iconLink_burger}`} />
        </li>
      </ul>

      <MobileBurgerMenu isOpen={isMenuOpen} handleClose={() => setIsMenuOpen(false)} />
    </div>
  );
};
