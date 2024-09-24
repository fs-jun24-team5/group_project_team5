import { ProductTypeExtended } from '../../api/type/ProductTypeExtended';
import { BackButton } from '../BackButton/BackButton';
import styles from './ItemDescription.module.scss';
import React, { Fragment, useContext, useState } from 'react';
import Heart from '../../assets/icons/card_icons/heart_icon.svg';
import FilledHeart from '../../assets/icons/card_icons/filled_heart_icon.svg';
import { Product } from '../../api/type/ProductCart';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoritesContext';
import { RoutesPathes } from '../../utils/RoutesPathes';
import classNames from 'classnames';
import { RecommendedItemsSlider } from '../RecommendedItemsSlider/RecommendedItemsSlider';
import { COLOR_PALLETE } from '../../utils/Colors';

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
  const [isHeartActive, setIsHeartActive] = useState(false);
  const { phonesId } = useParams<{ phonesId: string }>();
  const { theme } = useContext(FavoritesContext);
  const location = useLocation();

  const root = location.pathname.split('/')[1];

  const linkClassName = phonesId ? styles.pageNameActive : styles.pageName;

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  const handleImgClick = (img: string) => {
    setSelectedImg(img);
  };

  return (
    <>
      <div className={styles.route}>
        <Link
          to={RoutesPathes.HOME}
          className={classNames(styles.home, {
            [styles.dark]: theme === 'dark',
          })}
        />
        <i className={styles.arrow}></i>
        <Link to={RoutesPathes.PHONES} className={linkClassName}>
          Phones
        </Link>
        {phonesId && (
          <>
            <i className={styles.arrow}></i>
            <p className={styles.pageName}>{phone.name}</p>
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
            <img className={styles.mainPicture_img} src={selectedImg} alt={phone.id} />
          </div>
          <div className={styles.miniPictures}>
            {phone.images.map((img) => (
              <div
                onClick={() => handleImgClick(img)}
                key={img}
                className={selectedImg === img ? styles.imgContainer_active : styles.imgContainer}
              >
                <img className={styles.miniPicture} src={img} alt={phone.id} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.orderBlock}>
          <div className={styles.textAndId}>
            <h3 className={styles.text}>Available colors</h3>
            <h3 className={styles.textId}>ID: 802390</h3>
          </div>
          <div className={styles.chooseColor}>
            {phone.colorsAvailable.map((color) => (
              <Link
                key={color}
                to={`/${root}/${phone.namespaceId}-${selectedButton.toLocaleLowerCase()}-${color}`}
              >
                <div
                  onClick={() => handleColorClick(color)}
                  style={{ backgroundColor: COLOR_PALLETE[color] }}
                  className={selectedColor === color ? styles.colorPick_active : styles.colorPick}
                ></div>
              </Link>
            ))}
          </div>
          <div className={styles.separator}></div>
          <div className={styles.capacityBlock}>
            <h3 className={styles.text}>Select capacity</h3>
            <div className={styles.chooseStorage}>
              {phone.capacityAvailable.map((capacity) => (
                <Link
                  key={capacity}
                  to={`/${root}/${phone.namespaceId}-${capacity.toLocaleLowerCase()}-${selectedColor}`}
                >
                  <button
                    onClick={() => handleButtonClick(capacity)}
                    className={
                      selectedButton === capacity ? styles.storageActive : styles.storageDefault
                    }
                  >
                    {capacity}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.price}>
            <h3 className={styles.priceRegular}>${phone.priceDiscount}</h3>
            <h3 className={styles.priceDiscount}>{phone.priceRegular}</h3>
          </div>
          <div className={styles.buttons}>
            <button className={styles.add}>Add to cart</button>
            <button className={styles.heart} onClick={() => setIsHeartActive(!isHeartActive)}>
              {isHeartActive ? <img src={FilledHeart} alt="" /> : <img src={Heart} alt="" />}
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
            <div className={styles.techMemory}>
              <p className={styles.left_text}>Built in memory</p>
              <p className={styles.right_text}>{phone.capacity}</p>
            </div>

            <div className={styles.techCamera}>
              <p className={styles.left_text}>Camera</p>
              <p className={styles.right_text}>{phone.camera}</p>
            </div>

            <div className={styles.techZoom}>
              <p className={styles.left_text}>Zoom</p>
              <p className={styles.right_text}>{phone.zoom}</p>
            </div>
            <div className={styles.techCell}>
              <p className={styles.left_text}>Cell</p>
              <p className={styles.right_text}>{phone.cell.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>

      <RecommendedItemsSlider recommendedPhones={recommendedPhones} />
    </>
  );
};
