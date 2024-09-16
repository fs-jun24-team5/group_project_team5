import { Card } from '../Card/Card';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './NewPhoneModelsSlider.module.scss';

export const NewPhoneModelsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [widthOfCard, setWidthOfCard] = useState(212);
  const [clickCount, setClickCount] = useState(0);
  const cards = [1, 2, 3, 4, 5];
  const gap = 16;
  let maxClickCount = cards.length - 1;

  const updateDimensions = useCallback(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      setWidthOfCard(272);
    } else if (screenWidth >= 640) {
      setWidthOfCard(237);
    } else {
      setWidthOfCard(212);
    }
  }, [clickCount]);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setClickCount((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setClickCount((prev) => prev - 1);
  };

  const getCurrentMaxClicks = () => {
    if (window.innerWidth >= 480) {
      maxClickCount = cards.length - 2;
    }
    if (window.innerWidth >= 776) {
      maxClickCount = cards.length - 3;
    }
    if (window.innerWidth >= 1030) {
      maxClickCount = cards.length - 4;
    }
  };

  getCurrentMaxClicks();


  return (
    <div className={styles.newPhoneModels__container}>
      <div className={styles.newPhoneModels__header}>
        <h2 className={styles.newPhoneModels__title}>Brand new models</h2>
        <div className={styles.newPhoneModels__buttonsWrapper}>
          <button
            className={styles.arrowLeft}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          ></button>
          <button
            className={styles.arrowRight}
            onClick={handleNext}
            disabled={clickCount === maxClickCount}
          ></button>
        </div>
      </div>
      <div className={styles.newPhoneModels__bottom}>
        <div
          className={styles.cardsContainer}
          style={{
            transform: `translateX(-${currentIndex * widthOfCard + currentIndex * gap}px)`,
            transition: 'transform 0.5s ease',
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
