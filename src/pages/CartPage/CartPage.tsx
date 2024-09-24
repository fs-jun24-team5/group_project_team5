import React, { useContext, useState } from 'react';
import styles from './CartPage.module.scss';
import { CartContext } from '../../context/CartContextType';

export const CartPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<number | null>(null); 

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { cartItems, increaseQuantity, decreaseQuantity, updateQuantity, removeFromCart } =
    cartContext;

  const totalAmount = cartItems.reduce((total: number, item) => {
    const price = item.product.price ?? 0;
    return total + price * item.quantity;
  }, 0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDoubleClick = (id: string, quantity: number) => {
    setEditItemId(id);
    setInputValue(quantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? null : +e.target.value;
    setInputValue(value);
  };
  
  const handleBlur = (id: string) => {
    if (inputValue !== null) {
      const validValue = Math.max(1, inputValue);
      updateQuantity(id, validValue);
    }
    setEditItemId(null);
  };
  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: string) => {
    if (e.key === 'Enter') {
      handleBlur(id);
    }
  };

  return (
    <div className={styles.page__container}>
      <div className={`${styles.page__category} ${styles.cart}`}>
        <div className={styles.cart__top}>
          <h2 className={styles.cart__title}>Cart</h2>
        </div>
        <div className={styles.cart__bottom}>
          <div className={styles.cart__list}>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map(({ product, quantity }) => (
                <div key={product.id.toString()} className={styles.cart__item}>
                  <div className={styles.cart__row}>
                    <button
                      type="button"
                      aria-label="Delete item from cart"
                      className={styles.cart__delete}
                      onClick={() => removeFromCart(product.id.toString())}
                    />
                    <div className={styles.cart__photo}>
                      <div
                        className={styles.cart__image}
                        style={{ backgroundImage: `url(${product.image})` }}
                      ></div>
                    </div>
                    <div className={styles.cart__name}>
                      <div className={styles.cart__link}>{product.name}</div>
                    </div>
                  </div>
                  <div className={styles.cart__priceCount}>
                    <div className={styles.cart__count}>
                      <button
                        type="button"
                        className={`${styles.button} ${styles.button__minus}`}
                        onClick={() => decreaseQuantity(product.id.toString())}
                      />
                      {editItemId === product.id.toString() ? (
                        <input
                          type="number"
                          className={styles.cart__input}
                          value={inputValue !== null ? inputValue : quantity}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur(product.id.toString())}
                          onKeyDown={(e) => handleKeyDown(e, product.id.toString())}
                        />
                      ) : (
                        <div
                          className={styles.cart__quantity}
                          onDoubleClick={() => handleDoubleClick(product.id.toString(), quantity)}
                        >
                          {quantity}
                        </div>
                      )}

                      <button
                        type="button"
                        className={`${styles.button} ${styles.button__plus}`}
                        onClick={() => increaseQuantity(product.id.toString())}
                      />
                    </div>
                    <div className={styles.cart__price}>
                      ${product.price ? (product.price * quantity).toFixed(2) : 0}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className={styles.cart__summary}>
            <div className={styles.cart__priceWrapper}>
              <div className={styles.cart__summaryPrice}>Total: ${totalAmount.toFixed(2)}</div>
              <div className={styles.cart__summaryCount}>
                Total for {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
              </div>
            </div>
            <div className={styles.cart__divider} />
            <button type="button" className={styles.cart__checkout} onClick={toggleModal}>
              Checkout
            </button>
            {isModalOpen && (
              <div className={styles.modal}>
                <div className={styles.modal__content}>
                  <h2 className={styles.modal__title}>Do you confirm the checkout?</h2>
                  <div className={styles.modal__tableContainer}>
                    <table className={styles.modal__table}>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map(({ product, quantity }) => (
                          <tr key={product.id.toString()}>
                            <td>{product.name}</td>
                            <td>{quantity}</td>
                            <td>${product.price ? (product.price * quantity).toFixed(2) : 0}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className={styles.modal__total}>
                    <span>Total Price:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className={styles.modal__actions}>
                    <button className={styles.confirm} onClick={toggleModal}>
                      Confirm
                    </button>
                    <button className={styles.cancel} onClick={toggleModal}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
