import React from 'react';
import { NewPhoneModelsSlider } from '../../components/NewPhoneModelsSlider/NewPhoneModelsSlider';
import { Carousel } from '../../components/Carousel/Carousel';
import { Categories } from '../../components/Categories/Categories';
import { HotPricesSlider } from '../../components/HotPricesSlider/HotPricesSlider';

export const HomePage: React.FC = () => {
  return (
    <main className="main">
      <h1 className="title">Welcome to Nice Gadgets store!</h1>

      <Carousel />

      <NewPhoneModelsSlider />

      <Categories />

      <HotPricesSlider />
      
    </main>
  );
};
