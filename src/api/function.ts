import { ProductType } from "./type/ProductType";
//import { ProductTypeExtended } from "./type/ProductTypeExtended";

export const getHotDeals = (products: ProductType[]): ProductType[] => {
    
  const phones = products.filter(product => product.category === "phones");

  const sortedPhones = phones.sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price));

  return sortedPhones.slice(0, 6);
};

 export const getNewModels = (products: ProductType[]):ProductType[] => {
  
   const phones = products.filter(product => product.category === "phones");

  const sortedPhones = phones.sort((a, b) => b.year - a.year);

  const uniqueModels = new Map<string, ProductType>();

  for (const phone of sortedPhones) {
    const model = phone.itemId.split('-')[0];
    const key = `${model}-${phone.color}`;
    if (!uniqueModels.has(key)) {
      uniqueModels.set(key, phone);
    }
  }

  return Array.from(uniqueModels.values()).slice(0, 6);  
};

export const getRecommendedPhones = (products: ProductType[]):ProductType[] => {
  const phones = products.filter(product => product.category === "phones");

  const recommendedPhones = phones.slice().sort(() => 0.5 - Math.random());
  return recommendedPhones.slice(0, 6); 
}
 
