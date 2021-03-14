/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  Text, View, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import productsContext from '../context/products/productsContext';
import colors from '../constants/colors';
import constants from '../constants/constants';
import utils from '../helpers/utils';

const ProductListItem = ({
  id, name, price, src, balance, navigation,
}) => {
  const { favoriteProducts } = useContext(productsContext);

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation(id)}>
      <View>
        <Image
          source={{ uri: src }}
          style={styles.image}
        />
        <View style={
          [
            styles.favorites,
            {
              backgroundColor: favoriteProducts.length
                && favoriteProducts.find((product) => product.id === id)
                ? colors.neonCarrot
                : colors.twilight,
            },
          ]
        }
        >
          <Icon
            name="star"
            size={15}
            color={colors.white}
          />
        </View>
      </View>
      <View style={styles.wrapperPrice}>
        <Text style={styles.price}>{utils.getPrice(price)}</Text>
        <Text style={styles.balance}>{utils.getBalance(balance)}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Math.round(constants.width * 0.4),
    marginBottom: 25,
  },
  image: {
    width: '100%',
    height: Math.round(constants.width * 0.51),
    borderRadius: 15,
  },
  wrapperPrice: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: constants.fontMainBold,
    fontSize: 18,
    color: colors.blueMagenta,
  },
  balance: {
    fontFamily: constants.fontMainRegular,
    fontSize: 14,
    color: colors.gullGray,
  },
  name: {
    fontFamily: constants.fontMainRegular,
    fontSize: 15,
    color: colors.gullGray,
  },
  favorites: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 7,
  },
});

export default ProductListItem;
