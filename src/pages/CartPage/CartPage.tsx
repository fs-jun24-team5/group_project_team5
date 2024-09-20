import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextType';
import styles from './CartPage.module.scss';

export const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = cartContext;

  const totalAmount = cartItems.reduce((total: number, item: { product: { price: number }; quantity: number }) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className={styles.cartPage}>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map(({ product, quantity }) => (
              <li key={product.id.toString()} className={styles.cartItem}>
                <img src={product.image} alt={product.name} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => decreaseQuantity(product.id.toString())}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQuantity(product.id.toString())}>+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(product.id.toString())}>Remove</button>
              </li>
            ))}
          </ul>
          <div className={styles.totalAmount}>
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};
