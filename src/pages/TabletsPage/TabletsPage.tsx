import React, { useContext } from 'react';
import styles from './TabletsPage.module.scss';
import { ProductsMain } from '../../components/ProductsMain/ProductsMain';
import { Link } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { ProductCategories } from '../../utils/ProductCategories';
import { FavoritesContext } from '../../context/FavoritesContext';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export const TabletsPage: React.FC = () => {
  const { theme } = useContext(FavoritesContext);
  const { t } = useTranslation();

  return (
    <div className={styles.pagesContainer}>
      <div className={styles.route}>
        <Link
          to={RoutesPathes.HOME}
          className={classNames(styles.home, {
            [styles.dark]: theme === 'dark',
          })}
        />

        <i className={styles.arrow}></i>
        <Link to={RoutesPathes.PHONES} className={styles.pageName}>
          {t('tablets')}
        </Link>
      </div>
      <ProductsMain pageLabel='Tablets' productsCategory={ProductCategories.TABLETS} />
    </div>
  );
};
