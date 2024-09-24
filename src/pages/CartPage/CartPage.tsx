import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartPage.module.scss';
import { CartContext } from '../../context/CartContextType';
import { FavoritesContext } from '../../context/FavoritesContext';
import classNames from 'classnames';
import { BackButton } from '../../components/BackButton/BackButton';
import { useTranslation } from 'react-i18next';

export const CartPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartContext = useContext(CartContext);
  const { theme } = useContext(FavoritesContext);
  const { t } = useTranslation();

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = cartContext;

  const totalAmount = cartItems.reduce(
    (total: number, item: { product: { price: number }; quantity: number }) => {
      return total + item.product.price * item.quantity;
    },
    0,
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
              <p>{t('empty')}</p>
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
                      <Link to={`./phones`}>
                        <div
                          className={styles.cart__image}
                          style={{ backgroundImage: `url(${product.image})` }}
                        ></div>
                      </Link>
                    </div>
                    <div className={styles.cart__name}>
                      <Link to={`./phones`} className={styles.cart__link}>
                        {product.name}
                      </Link>
                    </div>
                  </div>
                  <div className={styles.cart__priceCount}>
                    <div className={styles.cart__count}>
                      <button
                        type="button"
                        className={`${styles.button} ${styles.button__minus}`}
                        onClick={() => decreaseQuantity(product.id.toString())}
                      />
                      <div className={styles.cart__quantity}>{quantity}</div>
                      <button
                        type="button"
                        className={`${styles.button} ${styles.button__plus}`}
                        onClick={() => increaseQuantity(product.id.toString())}
                      />
                    </div>
                    <div className={styles.cart__price}>
                      ${(product.price * quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

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
                <div className={styles.modal__content}>
                  <h2 className={styles.modal__title}>{t('checkoutConfirm')}</h2>
                  <div className={styles.modal__tableContainer}>
                    <table className={styles.modal__table}>
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
                            <td>${(product.price * quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className={styles.modal__total}>
                    <span>{t('totalPrice')}:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className={styles.modal__actions}>
                    <button className={styles.confirm} onClick={toggleModal}>
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
        </div>
      </div>
    </div>
  );
};
