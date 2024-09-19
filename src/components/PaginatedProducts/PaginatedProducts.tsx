import { useSearchParams } from 'react-router-dom';
import { PerPageOptions } from '../../utils/PerPageOptions';
import { getPreparedProducts } from '../../utils/getPreparedProducts';
import { getSearchWith } from '../../utils/searchHelper';
import React, { useEffect, useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Pagination } from '../Pagination/Pagination';
import { SortOptions } from '../../utils/SortOptions';
import { getProducts } from '../../api/api';

const productsFromServer = [
  { name: '1', price: 100, year: 2000 },
  { name: '2', price: 200, year: 2001 },
  { name: '3', price: 300, year: 2002 },
  { name: '4', price: 400, year: 2003 },
  { name: '5', price: 500, year: 2004 },
  { name: '6', price: 600, year: 2005 },
  { name: '7', price: 700, year: 2006 },
  { name: '8', price: 800, year: 2007 },
  { name: '9', price: 900, year: 2008 },
  { name: '10', price: 1000, year: 2009 },
];

type Props = {
  pageLabel: string;
  productsCategory: string;
};

export const PaginatedProducts: React.FC<Props> = ({ pageLabel, productsCategory }) => {
  const defaultPage = 1;

  const [prod, setProd] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = (searchParams.get('itemsPerPage') as PerPageOptions) || PerPageOptions.ALL;
  const currentPage = searchParams.get('page') || defaultPage;
  const sortParam = (searchParams.get('sort') as SortOptions) || SortOptions.NEWEST;
  const products = getPreparedProducts(productsFromServer, itemsPerPage, sortParam);

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
      const needetProducts = productsFromServer.filter(
        (product) => product.category === productsCategory,
      );

      setProd(needetProducts);
    });
  }, []);

  return (
    <div style={{ gridColumn: "span 24"}}>
      <h2>{pageLabel}</h2>
      <Dropdown
        label="Sort by"
        options={Object.values(SortOptions)}
        activeOption={SortOptions.NEWEST}
        onChange={handleSortChange}
      />
      <Dropdown
        label="Items on page"
        options={Object.values(PerPageOptions)}
        activeOption={itemsPerPage}
        onChange={handlePerPageSelectorChange}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products[+currentPage - 1].map((product) => (
          <div
            key={product.name}
            style={{ width: '200px', height: '200px', border: '1px solid black' }}
          >
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.year}</p>
          </div>
        ))}
      </div>

      {products.length > 1 && (
        <Pagination
          total={productsFromServer.length}
          perPage={itemsPerPage}
          currentPage={+currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
