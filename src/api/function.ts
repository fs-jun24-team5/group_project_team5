import { getProducts } from "./api";
import { ProductType } from "./type/ProductType";

export const getHotDeals = async (): Promise<ProductType[]> => {
  const products = await getProducts();
  
  const phones = products.filter(product => product.category === "phones");

  const sortedPhones = phones.sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price));

  return sortedPhones.slice(0, 6);
};

export const getNewModels = async (): Promise<ProductType[]> => {
  const products = await getProducts();
  
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

