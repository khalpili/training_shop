const axios = require('axios');

const URL = process.env.SHOP_URL || 'http://192.168.3.8/training_shop/hs/app';

const load = () => axios({
  url: `${URL}/products`,
  auth: {
    username: process.env.SHOP_USERNAME || 'app',
    password: process.env.SHOP_PASS || 'app',
  },
});

module.exports = {
  load,
};
