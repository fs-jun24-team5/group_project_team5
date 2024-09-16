
const BASE_URL = 'public/api';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function get(url: string) {

  const fullURL = BASE_URL + url + '.json';

  return wait(300)
    .then(() => fetch(fullURL))
    .then(res => res.json());
}

export const getProducts = () => get('/products');
export const getPhones = () => get('/phones');
export const getTablets = () => get('/tablets');
export const getAccessories = () => get('/accessories');