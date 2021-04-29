const axios = require('axios');

const URL = 'http://localhost:1337/products' || process.env.CMS_URL;

const createProducts = ({ data }) => Promise.all([data]
  .flat(1)
  .map((product) => axios({
    url: URL,
    method: 'POST',
    data: {
      ...product,
      id: undefined,
      pid: product.id,
    },
  })));

module.exports = {
  createProducts,
};
