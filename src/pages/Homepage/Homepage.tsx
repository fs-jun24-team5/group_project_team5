import React, { useEffect, useState } from 'react';
import { NewPhoneModelsSlider } from '../../components/NewPhoneModelsSlider/NewPhoneModelsSlider';
import { Carousel } from '../../components/Carousel/Carousel';
import { Categories } from '../../components/Categories/Categories';
import { HotPricesSlider } from '../../components/HotPricesSlider/HotPricesSlider';
import { getProducts } from '../../api/api';
import { getHotDeals, getNewModels } from '../../api/function';
import { ProductType } from '../../api/type/ProductType';
//import { CardsList } from '../../components/CardsList/CardsList';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);  
      try {
        const data: ProductType[] = await getProducts();
        setPhones(data);   
      } catch (error) {
        console.error("Error", error);  
      } finally {
        setIsLoading(false);  
      }
    };
    
    fetchData();
  }, []);

  console.log(phones);
  

  const newPhones = getHotDeals(phones);
  const newModels = getNewModels(phones);

  return (
    <main className="main">
      <h1 className="title">Welcome to Nice Gadgets store!</h1>

      {/*    <CardsList newPhones={newPhones} />  */}

      <Carousel />

      <NewPhoneModelsSlider newModels={newModels} isLoading={isLoading} />   

      <Categories />

      <HotPricesSlider newPhones={newPhones} isLoading={isLoading} />
    </main>
  );
};
