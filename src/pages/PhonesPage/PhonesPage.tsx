import React, { useState } from 'react';
import styles from './PhonesPage.module.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import mainPicture from '../../assets/images/phonePageItem_images/phone.png';
import Heart from '../../assets/icons/card_icons/heart_icon.svg';
import FilledHeart from '../../assets/icons/card_icons/filled_heart_icon.svg';

export const PhonesPage: React.FC = () => {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>('color1');
  const [selectedButton, setSelectedButton] = useState<string>('button1');

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <main className={styles.main}>
      <div className={styles.main__content}>
        <BackButton />
        <h1 className={styles.main_text}>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h1>
        <div className={styles.container}>
          <div className={styles.imgBlock}>
            <div className={styles.mainPicture}>
              <img className={styles.mainPicture_img} src={mainPicture} alt="iPhone11ProMax" />
            </div>
            <div className={styles.miniPictures}>
              <div className={styles.imgContainer}>
                <img className={styles.miniPicture} src={mainPicture} alt="iPhone11ProMax" />
              </div>
              <div className={styles.imgContainer}>
                <img className={styles.miniPicture} src={mainPicture} alt="iPhone11ProMax" />
              </div>
              <div className={styles.imgContainer}>
                <img className={styles.miniPicture} src={mainPicture} alt="iPhone11ProMax" />
              </div>
              <div className={styles.imgContainer}>
                <img className={styles.miniPicture} src={mainPicture} alt="iPhone11ProMax" />
              </div>
              <div className={styles.imgContainer}>
                <img className={styles.miniPicture} src={mainPicture} alt="iPhone11ProMax" />
              </div>
            </div>
          </div>
          <div className={styles.orderBlock}>
            <div className={styles.textAndId}>
              <h3 className={styles.text}>Available colors</h3>
              <h3 className={styles.textId}>ID: 802390</h3>
            </div>
            <div className={styles.chooseColor}>
              <div
                onClick={() => handleColorClick('color1')}
                className={selectedColor === 'color1' ? styles.colorPick_active : styles.colorPick}
              ></div>
              <div
                onClick={() => handleColorClick('color2')}
                className={
                  selectedColor === 'color2' ? styles.colorPick1_active : styles.colorPick1
                }
              ></div>
              <div
                onClick={() => handleColorClick('color3')}
                className={
                  selectedColor === 'color3' ? styles.colorPick2_active : styles.colorPick2
                }
              ></div>
              <div
                onClick={() => handleColorClick('color4')}
                className={
                  selectedColor === 'color4' ? styles.colorPick3_active : styles.colorPick3
                }
              ></div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.capacityBlock}>
              <h3 className={styles.text}>Select capacity</h3>
              <div className={styles.chooseStorage}>
                <button
                  onClick={() => handleButtonClick('button1')}
                  className={
                    selectedButton === 'button1' ? styles.storageActive : styles.storageDefault
                  }
                >
                  64 GB
                </button>
                <button
                  onClick={() => handleButtonClick('button2')}
                  className={
                    selectedButton === 'button2' ? styles.storageActive : styles.storageDefault
                  }
                >
                  256 GB
                </button>
                <button
                  onClick={() => handleButtonClick('button3')}
                  className={
                    selectedButton === 'button3' ? styles.storageActive : styles.storageDefault
                  }
                >
                  512 GB
                </button>
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.price}>
              <h3 className={styles.priceRegular}>$799</h3>
              <h3 className={styles.priceDiscount}>1199</h3>
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
                <p className={styles.right}>5.8” OLED</p>
              </div>

              <div className={styles.resolution}>
                <p className={styles.left}>Resolution</p>
                <p className={styles.right}>2688x1242</p>
              </div>
              <div className={styles.processor}>
                <p className={styles.left}>Processor</p>
                <p className={styles.right}>Apple A12 Bionic</p>
              </div>

              <div className={styles.ram}>
                <p className={styles.left}>RAM</p>
                <p className={styles.right}>4 GB</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container_text}>
          <div className={styles.about}>
            <h3 className={styles.bigText}>About</h3>
            <div className={styles.separator_text}></div>
            <h3 className={styles.mediumText}>And then there was Pro</h3>
            <p className={styles.smallText}>
              A transformative triple‑camera system that adds tons of capability without complexity.{' '}
              <br />
              <br />
              An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on
              machine learning and pushes the boundaries of what a smartphone can do. Welcome to the
              first iPhone powerful enough to be called Pro.
            </p>
            <h3 className={styles.mediumText}>Camera</h3>
            <p className={styles.smallText}>
              Meet the first triple‑camera system to combine cutting‑edge technology with the
              legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful
              images in drastically lower light. Shoot the highest‑quality video in a smartphone —
              then edit with the same tools you love for photos. You’ve never shot with anything
              like it.
            </p>
            <h3 className={styles.mediumText}>
              Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
            </h3>
            <p className={styles.smallText}>
              iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater
              detail and smoother motion. Epic processing power means it can shoot 4K video with
              extended dynamic range and cinematic video stabilization — all at 60 fps. You get more
              creative control, too, with four times more scene and powerful new editing tools to
              play with.
            </p>
          </div>
          <div className={styles.techSpecs}>
            <h3 className={styles.bigText}>Tech specs</h3>
            <div className={styles.separator_text}></div>
            <div className={styles.specs}>
              <div className={styles.techScreen}>
                <p className={styles.left_text}>Screen</p>
                <p className={styles.right_text}>6.5” OLED</p>
              </div>

              <div className={styles.techResolution}>
                <p className={styles.left_text}>Resolution</p>
                <p className={styles.right_text}>2688x1242</p>
              </div>

              <div className={styles.techProcessor}>
                <p className={styles.left_text}>Processor</p>
                <p className={styles.right_text}>Apple A12 Bionic</p>
              </div>
              <div className={styles.techRam}>
                <p className={styles.left_text}>RAM</p>
                <p className={styles.right_text}>3 GB</p>
              </div>
              <div className={styles.techMemory}>
                <p className={styles.left_text}>Built in memory</p>
                <p className={styles.right_text}>64 GB</p>
              </div>

              <div className={styles.techCamera}>
                <p className={styles.left_text}>Camera</p>
                <p className={styles.right_text}>12 Mp + 12 Mp + 12 Mp (Triple)</p>
              </div>

              <div className={styles.techZoom}>
                <p className={styles.left_text}>Zoom</p>
                <p className={styles.right_text}>Optical, 2x</p>
              </div>
              <div className={styles.techCell}>
                <p className={styles.left_text}>Cell</p>
                <p className={styles.right_text}>GSM, LTE, UMTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
