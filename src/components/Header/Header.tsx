import React, { useContext, useState } from 'react';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { MobileBurgerMenu } from '../MobileBurgerMenu/MobileBurgerMenu';
import classNames from 'classnames';
import { FavoritesContext } from '../../context/FavoritesContext';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { CartContext } from '../../context/CartContextType';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { favoriteProducts, theme } = useContext(FavoritesContext);
  const { favoriteProducts } = useContext(FavoritesContext);
  const cartContext = useContext(CartContext);
  const cartCount = cartContext ? cartContext.cartItems.length : 0;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.container}>
      <Link
        to={RoutesPathes.HOME}
        className={classNames(styles.logo, {
          [styles.dark]: theme === 'dark',
        })}
      />

      <ul className={styles.links}>
        <li>
          <Link
            to={RoutesPathes.HOME}
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === RoutesPathes.HOME,
              [styles.dark]: theme === 'dark',
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
              [styles.dark]: theme === 'dark',
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
              [styles.dark]: theme === 'dark',
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
              [styles.dark]: theme === 'dark',
            })}
          >
            accessories
          </Link>
        </li>
      </ul>

      <ul className={styles.icons}>
        <ThemeSwitcher />
        <li className={styles.icon}>
          <Link
            data-count={favoriteProducts.length > 0 ? favoriteProducts.length : ''}
            to={RoutesPathes.FAVOURITES}
            className={classNames(styles.iconLink_heart, {
              [styles.selected]: location.pathname.includes(RoutesPathes.FAVOURITES),
              [styles.dark]: theme === 'dark',
            })}
          />
        </li>
        <li className={styles.icon}>
          <Link
            data-count={cartCount > 0 ? cartCount : ''}
            to={RoutesPathes.CART}
            className={classNames(styles.iconLink_bag, {
              [styles.selected]: location.pathname.includes(RoutesPathes.CART),
              [styles.dark]: theme === 'dark',
            })}
          />
        </li>
        <li className={styles.icon}>
          <button
            onClick={toggleMenu}
            className={classNames(styles.iconLink_burger, {
              [styles.dark]: theme === 'dark', 
            })}
          />
        </li>
      </ul>

      <MobileBurgerMenu isOpen={isMenuOpen} handleClose={() => setIsMenuOpen(false)} />
    </div>
  );
};
