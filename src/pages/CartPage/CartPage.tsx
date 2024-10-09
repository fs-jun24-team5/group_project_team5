import React, { useContext, useState } from 'react';
import styles from './CartPage.module.scss';
import { CartContext } from '../../context/CartContextType';
import { FavoritesContext } from '../../context/FavoritesContext';
import classNames from 'classnames';
import { BackButton } from '../../components/BackButton/BackButton';
import { useTranslation } from 'react-i18next';

export const CartPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<number | null>(null);

  const cartContext = useContext(CartContext);
  const { theme } = useContext(FavoritesContext);
  const { t } = useTranslation();

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = cartContext;

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

  const handleConfirm = () => {
    clearCart();
    setIsModalOpen(false);
  };

  return (
    <div className={styles.page__container}>
      <div className={`${styles.page__category} ${styles.cart}`}>
        <BackButton />
        <div className={styles.cart__top}>
          <h2
            className={classNames(styles.cart__title, {
              [styles.dark]: theme === 'dark',
            })}
          >
            {t('cart')}
          </h2>
        </div>

        <div className={styles.cart__bottom}>
          <div className={styles.cart__list}>
            {cartItems.length === 0 ? (
              <p className={classNames(styles.emptyCart, { [styles.dark]: theme === 'dark' })}>
                {t('empty')}
              </p>
            ) : (
              cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id.toString()}
                  className={classNames(styles.cart__item, { [styles.dark]: theme === 'dark' })}
                >
                  <div className={styles.cart__row}>
                    <button
                      type="button"
                      aria-label="Delete item from cart"
                      className={classNames(styles.cart__delete, {
                        [styles.dark]: theme === 'dark',
                      })}
                      onClick={() => removeFromCart(product.id.toString())}
                    />
                    <div className={styles.cart__photo}>
                      <div
                        className={styles.cart__image}
                        style={{ backgroundImage: `url(${product.image})` }}
                      ></div>
                    </div>
                    <div className={styles.cart__name}>
                      <div
                        className={classNames(styles.cart__link, {
                          [styles.dark]: theme === 'dark',
                        })}
                      >
                        {product.name}
                      </div>
                    </div>
                  </div>
                  <div className={styles.cart__priceCount}>
                    <div className={styles.cart__count}>
                      <button
                        type="button"
                        className={classNames(styles.button, styles.button__minus, {
                          [styles.dark]: theme === 'dark',
                        })}
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
                          className={classNames(styles.cart__quantity, {
                            [styles.dark]: theme === 'dark',
                          })}
                          onDoubleClick={() => handleDoubleClick(product.id.toString(), quantity)}
                        >
                          {quantity}
                        </div>
                      )}

                      <button
                        type="button"
                        className={classNames(styles.button, styles.button__plus, {
                          [styles.dark]: theme === 'dark',
                        })}
                        onClick={() => increaseQuantity(product.id.toString())}
                      />
                    </div>
                    <div
                      className={classNames(styles.cart__price, {
                        [styles.dark]: theme === 'dark',
                      })}
                    >
                      ${product.price ? (product.price * quantity).toFixed(2) : 0}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {Boolean(cartItems.length) && (
            <div className={styles.cart__summary}>
              <div className={styles.cart__priceWrapper}>
                <div
                  className={classNames(styles.cart__summaryPrice, {
                    [styles.dark]: theme === 'dark',
                  })}
                >
                  {t('total')}: ${totalAmount.toFixed(2)}
                </div>

                <div className={styles.cart__summaryCount}>
                  {t('totalFor')} {cartItems.length} {t('items')}
                </div>
              </div>

              <div className={styles.cart__divider} />
              <button type="button" className={styles.cart__checkout} onClick={toggleModal}>
                {t('checkout')}
              </button>
              {isModalOpen && (
                <div className={styles.modal}>
                  <div
                    className={classNames(styles.modal__content, {
                      [styles.dark]: theme === 'dark',
                    })}
                  >
                    <h2
                      className={classNames(styles.modal__title, {
                        [styles.dark]: theme === 'dark',
                      })}
                    >
                      {t('checkoutConfirm')}
                    </h2>
                    <div className={styles.modal__tableContainer}>
                      <table
                        className={classNames(styles.modal__table, {
                          [styles.dark]: theme === 'dark',
                        })}
                      >
                        <thead>
                          <tr>
                            <th>{t('product')}</th>
                            <th>{t('quantity')}</th>
                            <th>{t('price')}</th>
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

                    <div
                      className={classNames(styles.modal__total, {
                        [styles.dark]: theme === 'dark',
                      })}
                    >
                      <span>{t('totalPrice')}:</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className={styles.modal__actions}>
                      <button className={styles.confirm} onClick={handleConfirm}>
                        {t('confirm')}
                      </button>
                      <button className={styles.cancel} onClick={toggleModal}>
                        {t('cancel')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
