import React, { useRef } from 'react';
import styles from './HotPricesSlider.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductTypeExtended } from '../../api/type/ProductTypeExtended';
import { Card } from '../Card/Card';

type Props = {
  newPhones: ProductTypeExtended[];
};

export const HotPricesSlider: React.FC<Props> = ({ newPhones }) => {
  const sliderRef = useRef<Slider>(null);

  const handleNext = () => {
    if (sliderRef.current) {

      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {

      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className={styles.newPhoneModels__container}>
      <div className={styles.newPhoneModels__header}>
        <h2 className={styles.newPhoneModels__title}>Hot prices</h2>
        <div className={styles.newPhoneModels__buttonsWrapper}>
          <button
            className={styles.arrowLeft}
            onClick={handlePrev}
            aria-label="Previous slide"
          ></button>
          <button
            className={styles.arrowRight}
            onClick={handleNext}
            aria-label="Next slide"
          ></button>
        </div>
      </div>
      <div className={styles.newPhoneModels__bottom}>
        <Slider ref={sliderRef} {...settings}>
          {newPhones.map((phone) => {
            return <Card key={phone.id} product={phone} />;
          })}
        </Slider>
      </div>
    </div>
  );
};
