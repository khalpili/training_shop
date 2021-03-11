const getPrice = (price) => `${String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} ₽`;
const getBalance = (balance) => `${balance} шт.`;

export default { getPrice, getBalance };
