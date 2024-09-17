import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './MobileBurgerMenu.module.scss';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const MobileBurgerMenu: React.FC<Props> = ({ isOpen, handleClose }) => {
  return (
    <aside
      className={classNames(styles.menu, {
        [styles.menuOpen]: isOpen,
      })}
    >
      <div className={styles.menuTop}>
        <Link to="/" className={styles.logo} />
        <button className={styles.iconClose} onClick={handleClose}></button>
      </div>
      <ul className={styles.links}>
        <li>
          <Link to="/" className={styles.link} onClick={handleClose}>
            home
          </Link>
        </li>
        <li>
          <Link to="/phones" className={styles.link} onClick={handleClose}>
            phones
          </Link>
        </li>
        <li>
          <Link to="/tablets" className={styles.link} onClick={handleClose}>
            tablets
          </Link>
        </li>
        <li>
          <Link to="/accessories" className={styles.link} onClick={handleClose}>
            accessories
          </Link>
        </li>
      </ul>
      <ul className={styles.icons}>
        <li className={styles.icon}>
          <Link to="/favourites" className={styles.iconLinkHeart} onClick={handleClose} />
        </li>
        <li className={styles.icon}>
          <Link to="/cart" className={styles.iconLinkBag} onClick={handleClose} />
        </li>
      </ul>
    </aside>
  );
};
