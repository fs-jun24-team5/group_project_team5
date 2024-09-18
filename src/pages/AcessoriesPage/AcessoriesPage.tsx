import React from 'react';
import { PaginatedProducts } from '../../components/PaginatedProducts/PaginatedProducts';


export const AccessoriesPage: React.FC = () => {
  return (
    <PaginatedProducts pageLabel='Accessories' productsCategory='accessories' />
  )
};