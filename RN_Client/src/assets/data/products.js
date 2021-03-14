/* eslint-disable max-len */
// import constants from '../../constants/constants';

// const { DRESS_CLOTHES, SHOES_CLOTHES, HOODY_CLOTHES } = constants.types.typeСlothes;

const products = [
  // {
  //   id: 'dress-1',
  //   name: 'Eva Manchini / Платье',
  //   type: DRESS_CLOTHES,
  //   price: 1864,
  //   description: 'Трикотажное базовое повседневное платье для офиса и для прогулок. Выполнено из качественного трикотажного мягкого полотна с эластаном, очень приятного к телу.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/dress-1-big.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/dress-1-big.jpg?raw=true',
  //   isFavorite: true,
  //   isCart: false,
  //   count: 0,
  //   balance: 8,
  //   views: 12899,
  // },
  // {
  //   id: 'dress-2',
  //   name: 'Emansipe / Платье',
  //   type: DRESS_CLOTHES,
  //   price: 2328,
  //   description: 'Комбинезон приталенного силуэта выполнен из тенселя. Детали: округлый вырез горловины, прорезные карманы, короткий рукав, застежка на молнию и пуговицу.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/dress-2.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/dress-2-big.jpg?raw=true',
  //   isFavorite: false,
  //   isCart: false,
  //   count: 0,
  //   balance: 12,
  //   views: 7650,
  // },
  // {
  //   id: 'dress-3',
  //   name: 'SVETOZARA / Платье',
  //   type: DRESS_CLOTHES,
  //   price: 1865,
  //   description: 'Универсальное платье А-силуэта из трикотажа меланж, замечательно подойдет и девушкам с идеальной фигурой, выгодно ее подчеркнув.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/dress-3.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/dress-3-big.jpg?raw=true',
  //   isFavorite: false,
  //   isCart: false,
  //   count: 0,
  //   balance: 5,
  //   views: 15645,
  // },
  // {
  //   id: 'hoody-1',
  //   name: 'A2 SPORT / Худи',
  //   type: HOODY_CLOTHES,
  //   price: 2794,
  //   description: 'Худи MEGA OVERSIZE марки A2 SPORT – это идеальное худи для повседневной жизни. Ультрамодный оверсайз крой: свободная посадка, спущенная линия плеча.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-1.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-1-big.jpg?raw=true',
  //   isFavorite: false,
  //   isCart: false,
  //   count: 0,
  //   balance: 21,
  //   views: 9845,
  // },
  // {
  //   id: 'hoody-2',
  //   name: 'Raven / Худи',
  //   type: HOODY_CLOTHES,
  //   price: 2190,
  //   description: 'Оверсайз худи марки RAVEN. Толстовка свободного силуэта, с увеличенной проймой, шириной рукавов и спущенной плечевой линией.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-2.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-2-big.jpg?raw=true',
  //   isFavorite: true,
  //   isCart: true,
  //   count: 1,
  //   balance: 9,
  //   views: 6532,
  // },
  // {
  //   id: 'hoody-3',
  //   name: 'people in hoodie / Худи',
  //   type: HOODY_CLOTHES,
  //   price: 2416,
  //   description: 'Укроченное худи с начесом oversize. Наша команда развивает себя по этим направлениям. Это сложная практика, длиною в жизнь.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-3.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-3-big.jpg?raw=true',
  //   isFavorite: true,
  //   isCart: true,
  //   count: 1,
  //   balance: 12,
  //   views: 14274,
  // },
  // {
  //   id: 'hoody-4',
  //   name: 'NELEENE / Худи',
  //   type: HOODY_CLOTHES,
  //   price: 1866,
  //   description: 'Уютный, обьемный, удлиненный, теплый худи в стиле супер оверсайз, выполнен из мягкого хлопкового футера трехнитки с начесом.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-4.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-4-big.jpg?raw=true',
  //   isFavorite: false,
  //   isCart: false,
  //   count: 0,
  //   balance: 22,
  //   views: 10980,
  // },
  // {
  //   id: 'hoody-5',
  //   name: 'people in hoodie / Худи',
  //   type: HOODY_CLOTHES,
  //   price: 1327,
  //   description: 'Стильное худи с начесом oversize. Наша команда развивает себя по этим направлениям. Это сложная практика, длиною в жизнь.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-5.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/hoody-5-big.jpg?raw=true',
  //   isFavorite: false,
  //   isCart: false,
  //   count: 0,
  //   balance: 2,
  //   views: 8790,
  // },
  // {
  //   id: 'shoes-1',
  //   name: 'Reversal / Ботинки',
  //   type: SHOES_CLOTHES,
  //   price: 4778,
  //   description: 'Данная модель ботинок выполнена из натуральной кожи. Отличительная особенность - крепкая подошва, которая обеспечивает хорошее сцепление с неровной и скользкой поверхностью.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/shoes-1.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/shoes-1-big.jpg?raw=true',
  //   isFavorite: true,
  //   isCart: true,
  //   count: 2,
  //   balance: 3,
  //   views: 19870,
  // },
  // {
  //   id: 'shoes-2',
  //   name: 'BNB / Кроссовки',
  //   type: SHOES_CLOTHES,
  //   price: 1560,
  //   description: 'Хит сезона 2021! Лёгкие, удобные, стильные кроссовки,отлично сочетаются с джинсами,шортами, спортивными штанами.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/shoes-2.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/shoes-2-big.jpg?raw=true',
  //   isFavorite: false,
  //   isCart: false,
  //   count: 0,
  //   balance: 7,
  //   views: 12850,
  // },
  // {
  //   id: 'shoes-3',
  //   name: 'Muzza / Кеды',
  //   type: SHOES_CLOTHES,
  //   price: 1432,
  //   description: 'Женские кеды белого цвета станут отличной базой образа. Шнуровка станет стильным акцентом аутдор образа.',
  //   src: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/shoes-3.jpg?raw=true',
  //   bigSrc: 'https://github.com/evgeniipopkov/training_shop/blob/master/images/shoes-3-big.jpg?raw=true',
  //   isFavorite: false,
  //   isCart: false,
  //   count: 0,
  //   balance: 5,
  //   views: 18155,
  // },
];

export default products;
