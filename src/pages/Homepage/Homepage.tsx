import React, { useEffect, useState } from 'react';
import { NewPhoneModelsSlider } from '../../components/NewPhoneModelsSlider/NewPhoneModelsSlider';
import { Carousel } from '../../components/Carousel/Carousel';
import { Categories } from '../../components/Categories/Categories';
import { HotPricesSlider } from '../../components/HotPricesSlider/HotPricesSlider';
import { getPhones } from '../../api/api';
import { getHotDeals, getNewModels } from '../../api/function';
//import { CardsList } from '../../components/CardsList/CardsList';
import { ProductTypeExtended } from '../../api/type/ProductTypeExtended';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<ProductTypeExtended[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: ProductTypeExtended[] = await getPhones();

      setPhones(data);
    };
    fetchData();
  }, []);

  const newPhones = getHotDeals(phones);
   const newModels = getNewModels(phones); 

  return (
    <main className="main">
      <h1 className="title">Welcome to Nice Gadgets store!</h1>

      {/* <CardsList newPhones={newPhones} /> */}

      <Carousel />

       <NewPhoneModelsSlider newModels={newModels} />  

      <Categories />

      <HotPricesSlider newPhones={newPhones} />
    </main>
  );
};
