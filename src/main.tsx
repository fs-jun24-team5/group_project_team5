/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import './index.scss';
import { Root } from './Root';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContextType';

createRoot(document.getElementById('root') as HTMLElement).render(
  <FavoritesProvider>
    <CartProvider>
      <Root />
    </CartProvider>
  </FavoritesProvider>
);
