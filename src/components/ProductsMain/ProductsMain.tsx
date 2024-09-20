import { useSearchParams } from 'react-router-dom';
import { PerPageOptions } from '../../utils/PerPageOptions';
import { getPreparedProducts } from '../../utils/getPreparedProducts';
import { getSearchWith } from '../../utils/searchHelper';
import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Pagination } from '../Pagination/Pagination';
import { SortOptions } from '../../utils/SortOptions';
import { getProducts } from '../../api/api';
import styles from './ProductsMain.module.scss';
import { ProductType } from '../../api/type/ProductType';
import { Card } from '../Card/Card';
import { FavoritesContext } from '../../context/FavoritesContext';
import classNames from 'classnames';

type Props = {
  pageLabel: string;
  productsCategory: string;
};

export const ProductsMain: React.FC<Props> = ({ pageLabel, productsCategory }) => {
  const defaultPage = 1;

  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = (searchParams.get('itemsPerPage') as PerPageOptions) || PerPageOptions.ALL;
  const currentPage = searchParams.get('page') || defaultPage;
  const sortParam = (searchParams.get('sort') as SortOptions) || SortOptions.NEWEST;
  const preparedProducts = getPreparedProducts(products, itemsPerPage, sortParam);
  const { theme } = useContext(FavoritesContext);

  const handlePerPageSelectorChange = (option: PerPageOptions) => {
    if (option === PerPageOptions.ALL) {
      setSearchParams(getSearchWith(searchParams, { page: null, itemsPerPage: null }));
    } else {
      setSearchParams(
        getSearchWith(searchParams, { page: `${defaultPage}`, itemsPerPage: option }),
      );
    }
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams(getSearchWith(searchParams, { page: `${newPage}` }));
  };

  const handleSortChange = (sort: SortOptions) => {
    if (sort === SortOptions.NEWEST) {
      setSearchParams(getSearchWith(searchParams, { sort: null }));
    } else {
      setSearchParams(getSearchWith(searchParams, { sort: sort }));
    }
  };

  useEffect(() => {
    getProducts().then((productsFromServer) => {
      const neededProducts = productsFromServer.filter(
        (product) => product.category === productsCategory,
      );

      setProducts(neededProducts);
    });
  }, []);

  return (
    <>
      <div className={styles.products_main}>
        <div className={styles.category_info}>
          <h2
            className={classNames(styles.category_name, {
              [styles.dark]: theme === 'dark',
            })}
          >
            {pageLabel}
          </h2>

          <p className={styles.category_models}>{`${products.length} models`}</p>
        </div>
        <Dropdown
          label="Sort by"
          options={Object.values(SortOptions)}
          activeOption={sortParam}
          onChange={handleSortChange}
        />

        <Dropdown
          label="Items on page"
          options={Object.values(PerPageOptions)}
          activeOption={itemsPerPage}
          onChange={handlePerPageSelectorChange}
        />
        <div className={styles.product_cards}>
          {preparedProducts.length !== 0 &&
            preparedProducts[+currentPage - 1].map((product) => (
              <div key={product.id} className={styles.product_card}>
                <Card product={product} />
              </div>
            ))}
        </div>
      </div>

      {preparedProducts.length > 1 && (
        <Pagination
          total={products.length}
          perPage={itemsPerPage}
          currentPage={+currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};
