import React from 'react';
import { PaginatedProducts } from '../../components/PaginatedProducts/PaginatedProducts';


export const TabletsPage: React.FC = () => {
  return (
    <PaginatedProducts pageLabel='Tablets' productsCategory='tablets' />
  )
};