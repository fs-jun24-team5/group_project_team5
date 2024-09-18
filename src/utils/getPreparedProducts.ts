import { PerPageOptions } from './PerPageOptions';
import { SortOptions } from './SortOptions';

export const getPreparedProducts = (
  products: { name: string; price: number; year: number }[],
  perPage: PerPageOptions,
  sort: SortOptions,
) => {
  const prepared = [];

  if (sort) {
    products.sort((a, b) => {
      switch (sort) {
        case SortOptions.ALPHABETICALLY:
          return a.name.localeCompare(b.name);
        case SortOptions.CHEAPEST:
          return a.price - b.price;
        case SortOptions.NEWEST:
          return b.year - a.year;
        default: return 0;
      }
    });
  }

  if (perPage === PerPageOptions.ALL) {
    prepared.push(products);
  } else {
    for (let i = 1; i < Math.ceil(products.length / +perPage) + 1; i++) {
      prepared.push(products.slice(i * +perPage - +perPage, i * +perPage));
    }
  }

  return prepared;
};
