import { ProductTypeExtended } from "./type/ProductTypeExtended";
//import { ProductTypeExtended } from "./type/ProductTypeExtended";

export const getHotDeals = (products: ProductTypeExtended[]): ProductTypeExtended[] => {
  const phones = products.filter(product => product.category === "phones");

  const sortedPhones = phones.sort((a, b) => (b.priceRegular - b.priceDiscount) - (a.priceRegular - a.priceDiscount));

  return sortedPhones.slice(0, 6);
};

export const getNewModels = (products: ProductTypeExtended[]):ProductTypeExtended[] => {
  
/*   const phones = products.filter(product => product.category === "phones");

  const sortedPhones = phones.sort((a, b) => b.year - a.year);

  const uniqueModels = new Map<string, ProductType>();

  for (const phone of sortedPhones) {
    const model = phone.itemId.split('-')[0];
    const key = `${model}-${phone.color}`;
    if (!uniqueModels.has(key)) {
      uniqueModels.set(key, phone);
    }
  }

  return Array.from(uniqueModels.values()).slice(0, 6); */
  const shuffledProducts = products.sort(() => 0.5 - Math.random());

  return shuffledProducts.slice(0, 6);
};

