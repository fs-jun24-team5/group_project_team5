import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartPage.module.scss';

export const CartPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.page__container}>
      <div className={`${styles.page__category} ${styles.cart}`}>
        <div className={styles.cart__top}>
          <h2 className={styles.cart__title}>Cart</h2>
        </div>
        <div className={styles.cart__bottom}>
          <div className={styles.cart__list}></div>
          <div className={styles.cart}>
            <div className={styles.cart__item}>
              <div className={styles.cart__row}>
                <button
                  type="button"
                  aria-label="Delete item from cart"
                  className={styles.cart__delete}
                />
                <div className={styles.cart__photo}>
                  <Link to={`./phones`}>
                    <div className={styles.cart__image}></div>
                  </Link>
                </div>
                <div className={styles.cart__name}>
                  <Link
                    to={`./phones`}
                    state={{
                      location,
                    }}
                    className={styles.cart__link}
                  >
                    Apple iPhone 14 Pro 128GB Silver (MQ023)
                  </Link>
                </div>
              </div>
              <div className={styles.cart__priceCount}>
                <div className={styles.cart__count}>
                  <button type="button" className={`${styles.button} ${styles.button__minus}`} />
                  <div className={styles.cart__quantity}>1</div>
                  <button type="button" className={`${styles.button} ${styles.button__plus}`} />
                </div>
                <div className={styles.cart__price}>$999</div>
              </div>
            </div>
          </div>

          <div className={styles.cart__summary}>
            <div className={styles.cart__priceWrapper}>
              <div className={styles.cart__summaryPrice}>$999</div>
              <div className={styles.cart__summaryCount}>Total for 1 item</div>
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
                    {' '}
                    <table className={styles.modal__table}>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Apple iPhone 14 Pro</td>
                          <td>1</td>
                          <td>$999</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className={styles.modal__total}>
                    <span>Total Price:</span>
                    <span>$999</span>
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
