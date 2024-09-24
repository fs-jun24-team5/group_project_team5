import { ProductTypeExtended } from '../../api/type/ProductTypeExtended';
import { BackButton } from '../BackButton/BackButton';
import styles from './ItemDescription.module.scss';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import Heart from '../../assets/icons/card_icons/heart_icon.svg';
import FilledHeart from '../../assets/icons/card_icons/filled_heart_icon.svg';
import { Product } from '../../api/type/ProductCart';
import { Link, useParams } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoritesContext';
import { RoutesPathes } from '../../utils/RoutesPathes';
import classNames from 'classnames';
import { RecommendedItemsSlider } from '../RecommendedItemsSlider/RecommendedItemsSlider';
import { CartContext } from '../../context/CartContextType';

type Props = {
  phone: ProductTypeExtended;
  selectedColor: string;
  selectedButton: string;
  selectedImg: string;
  setSelectedColor: (value: string) => void;
  setSelectedButton: (value: string) => void;
  setSelectedImg: (value: string) => void;
  recommendedPhones: Product[];
};

export const ItemDescription: React.FC<Props> = ({
  phone,
  selectedColor,
  selectedButton,
  selectedImg,
  setSelectedColor,
  setSelectedButton,
  setSelectedImg,
  recommendedPhones,
}) => {
  const favoritesContext = useContext(FavoritesContext);
  const cartContext = useContext(CartContext);

  if (!favoritesContext || !cartContext) {
    throw new Error('Contexts are not provided');
  }

  const { addToFavorites, favoriteProducts } = favoritesContext;
  const { addToCart, cartItems, removeFromCart } = cartContext; 

  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { phonesId } = useParams<{ phonesId: string }>();


  useEffect(() => {
    const heartState = favoriteProducts.some(p => p.name === phone.name);
    setIsHeartActive(heartState);

    const isProductInCart = cartItems.some(item => item.product.name === phone.name);
    setIsAdded(isProductInCart);
  }, [favoriteProducts, phone.name, cartItems]);

  const handleFavoriteClick = () => {
    const productToAdd: Product = {
      id: phone.id,
      category: phone.category,
      name: phone.name,
      fullPrice: phone.priceRegular,
      price: phone.priceDiscount,
      screen: phone.screen,
      capacity: phone.capacity,
      color: selectedColor,
      ram: phone.ram,
      image: selectedImg,
    };
  
    const isFavorite = favoriteProducts.some(p => p.name === phone.name);
  
    if (isFavorite) {
      favoritesContext.setFavoriteProducts(prevFavorites =>
        prevFavorites.filter(p => p.name !== phone.name)
      );
    } else {
      addToFavorites(productToAdd);
    }
    
    setIsHeartActive(!isHeartActive);
  };
  
  const handleAddToCart = () => {
    const productToAdd: Product = {
      id: phone.id,
      category: phone.category,
      name: phone.name,
      fullPrice: phone.priceRegular,
      price: phone.priceDiscount,
      screen: phone.screen,
      capacity: phone.capacity,
      color: selectedColor,
      ram: phone.ram,
      image: selectedImg,
    };
  
    const existingItem = cartItems.find(item => item.product.name === phone.name);
  
    if (existingItem) {
      removeFromCart(existingItem.product.id.toString());
      setIsAdded(false);
    } else {
      addToCart(productToAdd);
      setIsAdded(true);
    }
  };
  

  return (
    <>
      <div className={styles.route}>
        <Link to={RoutesPathes.HOME} className={classNames(styles.home)} />
        <i className={styles.arrow}></i>
        <Link to={RoutesPathes.PHONES} className={styles.linkClassName}>
          Phones
        </Link>
        {phonesId && (
          <>
            <i className={styles.arrow}></i>
            <p className={styles.pageName}>{phonesId}</p>
          </>
        )}
      </div>

      <BackButton />
      <h1 key={phone.id} className={styles.main_text}>
        {phone.name}
      </h1>
      <div className={styles.container}>
        <div className={styles.imgBlock}>
          <div className={styles.mainPicture}>
            <img className={styles.mainPicture_img} src={selectedImg} alt="Phone" />
          </div>
          <div className={styles.miniPictures}>
            {phone.images.map((img) => (
              <div
                onClick={() => setSelectedImg(img)}
                key={img}
                className={selectedImg === img ? styles.imgContainer_active : styles.imgContainer}
              >
                <img className={styles.miniPicture} src={img} alt="Phone" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.orderBlock}>
          <div className={styles.textAndId}>
            <h3 className={styles.text}>Available colors</h3>
            <h3 className={styles.textId}>ID: {phone.id}</h3>
          </div>
          <div className={styles.chooseColor}>
            {phone.colorsAvailable.map((color) => (
              <div
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
                key={color}
                className={selectedColor === color ? styles.colorPick_active : styles.colorPick}
              ></div>
            ))}
          </div>
          <div className={styles.separator}></div>
          <div className={styles.capacityBlock}>
            <h3 className={styles.text}>Select capacity</h3>
            <div className={styles.chooseStorage}>
              {phone.capacityAvailable.map((capacity) => (
                <button
                  key={capacity}
                  onClick={() => setSelectedButton(capacity)}
                  className={selectedButton === capacity ? styles.storageActive : styles.storageDefault}
                >
                  {capacity}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.price}>
            <h3 className={styles.priceRegular}>${phone.priceDiscount}</h3>
            <h3 className={styles.priceDiscount}>${phone.priceRegular}</h3>
          </div>
          <div className={styles.buttons}>
            <button
              className={`${styles.add} ${isAdded ? styles.added : ''}`}
              onClick={handleAddToCart}
            >
              {isAdded ? 'Added!' : 'Add to cart'}
            </button>
            <button className={styles.heart} onClick={handleFavoriteClick}>
              {isHeartActive ? (
                <img src={FilledHeart} alt="Added to favorites" />
              ) : (
                <img src={Heart} alt="Add to favorites" />
              )}
            </button>
          </div>
          <div className={styles.specs}>
            <div className={styles.screen}>
              <p className={styles.left}>Screen</p>
              <p className={styles.right}>{phone.screen}</p>
            </div>
            <div className={styles.resolution}>
              <p className={styles.left}>Resolution</p>
              <p className={styles.right}>{phone.resolution}</p>
            </div>
            <div className={styles.processor}>
              <p className={styles.left}>Processor</p>
              <p className={styles.right}>{phone.processor}</p>
            </div>
            <div className={styles.ram}>
              <p className={styles.left}>RAM</p>
              <p className={styles.right}>{phone.ram}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_text}>
        <div className={styles.about}>
          <h3 className={styles.bigText}>About</h3>
          <div className={styles.separator_text}></div>
          {phone.description.map((desc) => (
            <Fragment key={`${desc.title}-${desc.text}`}>
              <h3 className={styles.mediumText}>{desc.title}</h3>
              <p className={styles.smallText}>{desc.text}</p>
            </Fragment>
          ))}
        </div>
        <div className={styles.techSpecs}>
          <h3 className={styles.bigText}>Tech specs</h3>
          <div className={styles.separator_text}></div>
          <div className={styles.specs}>
            <div className={styles.techScreen}>
              <p className={styles.left_text}>Screen</p>
              <p className={styles.right_text}>{phone.screen}</p>
            </div>
            <div className={styles.techResolution}>
              <p className={styles.left_text}>Resolution</p>
              <p className={styles.right_text}>{phone.resolution}</p>
            </div>
            <div className={styles.techProcessor}>
              <p className={styles.left_text}>Processor</p>
              <p className={styles.right_text}>{phone.processor}</p>
            </div>
            <div className={styles.techRam}>
              <p className={styles.left_text}>RAM</p>
              <p className={styles.right_text}>{phone.ram}</p>
            </div>
          </div>
        </div>
      </div>
      <RecommendedItemsSlider recommendedPhones={recommendedPhones} />
    </>
  );
};
