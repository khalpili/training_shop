const BASE_URL = 'http://192.168.0.3/training_shop/hs/app/';

const headers = {
  Authorization: 'Basic YXBwOmFwcA==',
  'Content-Type': 'application/json; charset=utf-8',
};

const request = async (route, method, data) => {
  const config = {
    method,
    headers,
  };

  if (method === 'POST') config.body = JSON.stringify(data);

  const response = await fetch(BASE_URL + route, config);
  if (response.ok) {
    const result = await response.json();
    return result;
  }

  throw response;
};

const getProducts = async () => request('products', 'GET');
const getProduct = async (id) => request(`product?id=${id}`, 'GET');
const postOrder = async (data) => request('order', 'POST', data);

export default { getProducts, getProduct, postOrder };
