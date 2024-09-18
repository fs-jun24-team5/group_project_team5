import React from 'react';
import { PaginatedProducts } from '../../components/PaginatedProducts/PaginatedProducts';


export const PhonesPage: React.FC = () => {
  return (
    <PaginatedProducts pageLabel='Phones' productsCategory='phones' />
  )
};
