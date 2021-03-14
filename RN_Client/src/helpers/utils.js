import constants from '../constants/constants';

const {
  DRESS_CLOTHES, DRESS_CLOTHES_1C, HOODY_CLOTHES, HOODY_CLOTHES_1C, SHOES_CLOTHES, SHOES_CLOTHES_1C,
} = constants.types.typeСlothes;

const getPrice = (price) => `${String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} ₽`;
const getBalance = (balance) => `${balance} шт.`;
const getType = (type) => {
  switch (type) {
    case DRESS_CLOTHES_1C: return DRESS_CLOTHES;
    case HOODY_CLOTHES_1C: return HOODY_CLOTHES;
    case SHOES_CLOTHES_1C: return SHOES_CLOTHES;
    default: return null;
  }
};

export default { getPrice, getBalance, getType };
