const CONTENT_URL = 'http://192.168.3.8:1337';
const ORDER_URL = 'http://192.168.3.8/training_shop/hs/app/';

const request = (URL, headers) => async (route, method, data) => {
  const config = {
    method,
    headers,
  };

  if (method === 'POST') config.body = JSON.stringify(data);

  const response = await fetch(URL + route, config);
  if (response.ok) {
    const result = await response.json();
    return result;
  }

  throw response;
};

const contentRequest = request(CONTENT_URL);
const orderRequest = request(ORDER_URL, {
  Authorization: 'Basic YXBwOmFwcA==',
  'Content-Type': 'application/json; charset=utf-8',
});

const getProducts = async () => contentRequest('/products', 'GET')
  .then((products) => products.map((product) => ({ ...product, id: product.pid })));

const getProduct = async (id) => contentRequest(`/products?_where[pid]=${id}`, 'GET')
  .then((r) => r[0])
  .then((product) => ({ ...product, id: product.pid }));

const postOrder = async (data) => orderRequest('order', 'POST', data);

export default {
  getProducts, getProduct, postOrder, CONTENT_URL, ORDER_URL,
};
