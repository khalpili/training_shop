import { Dimensions } from 'react-native';

const fontMainRegular = 'Roboto-Regular';
const fontMainMedium = 'Roboto-Medium';
const fontMainBold = 'Roboto-Bold';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const types = {
  typeСlothes: {
    ALL_CLOTHES: 'ALL_CLOTHES',
    DRESS_CLOTHES: 'DRESS_CLOTHES',
    SHOES_CLOTHES: 'SHOES_CLOTHES',
    HOODY_CLOTHES: 'HOODY_CLOTHES',

  },
};

export default {
  fontMainRegular,
  fontMainMedium,
  fontMainBold,
  width,
  height,
  types,
};
