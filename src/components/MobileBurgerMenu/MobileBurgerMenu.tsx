import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './MobileBurgerMenu.module.scss';
import { useLocation } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { FavoritesContext } from '../../context/FavoritesContext';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const MobileBurgerMenu: React.FC<Props> = ({ isOpen, handleClose }) => {
  const location = useLocation();
  const { theme } = useContext(FavoritesContext);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.bodyNoScroll);
    } else {
      document.body.classList.remove(styles.bodyNoScroll);
    }

    return () => {
      document.body.classList.remove(styles.bodyNoScroll);
    };
  }, [isOpen]);

  return (
    <aside
      className={classNames(styles.menu, {
        [styles.menuOpen]: isOpen,
        [styles.dark]: theme === 'dark',
      })}
    >
      <div className={styles.menuTop}>
        <Link
          to={RoutesPathes.HOME}
          className={classNames(styles.logo, {
            [styles.dark]: theme === 'dark',
          })}
        />

        <button
          className={classNames(styles.iconClose, {
            [styles.dark]: theme === 'dark', 
          })}
          onClick={handleClose}
        ></button>
      </div>
      <ul className={styles.links}>
        <li>
          <Link
            to={RoutesPathes.HOME}
            className={classNames(styles.link, {
              [styles.selectedLink]: location.pathname === RoutesPathes.HOME,
              [styles.dark]: theme === 'dark',
            })}
            onClick={handleClose}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to={RoutesPathes.PHONES}
            className={classNames(styles.link, {
              [styles.selectedLink]: location.pathname.includes(RoutesPathes.PHONES),
              [styles.dark]: theme === 'dark',
            })}
            onClick={handleClose}
          >
            phones
          </Link>
        </li>
        <li>
          <Link
            to={RoutesPathes.TABLETS}
            className={classNames(styles.link, {
              [styles.selectedLink]: location.pathname.includes(RoutesPathes.TABLETS),
              [styles.dark]: theme === 'dark',
            })}
            onClick={handleClose}
          >
            tablets
          </Link>
        </li>
        <li>
          <Link
            to={RoutesPathes.ACCESSORIES}
            className={classNames(styles.link, {
              [styles.selectedLink]: location.pathname.includes(RoutesPathes.ACCESSORIES),
              [styles.dark]: theme === 'dark',
            })}
            onClick={handleClose}
          >
            accessories
          </Link>
        </li>
      </ul>

      <ul className={styles.icons}>
        <li className={styles.iconItem}>
          <Link
            to={RoutesPathes.FAVOURITES}
            className={classNames(styles.iconLinkHeart, {
              [styles.selected]: location.pathname.includes(RoutesPathes.FAVOURITES),
              [styles.dark]: theme === 'dark',
            })}
            onClick={handleClose}
          />
        </li>
        <li className={styles.iconItem}>
          <Link
            to={RoutesPathes.CART}
            className={classNames(styles.iconLinkBag, {
              [styles.selected]: location.pathname.includes(RoutesPathes.CART),
              [styles.dark]: theme === 'dark',
            })}
            onClick={handleClose}
          />
        </li>
      </ul>
    </aside>
  );
};
