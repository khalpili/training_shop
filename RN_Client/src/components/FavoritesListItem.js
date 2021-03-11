/* eslint-disable react/prop-types */
import React from 'react';
import {
  Text, View, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../constants/colors';
import constants from '../constants/constants';
import utils from '../helpers/utils';

const FavoritesListItem = ({
  name, price, src, balance, remove,
}) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <Image
        source={{ uri: src }}
        style={styles.image}
      />
      <View style={styles.description}>
        <Text style={styles.price}>{utils.getPrice(price)}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.balance}>{utils.getBalance(balance)}</Text>
      </View>
    </View>
    <TouchableOpacity onPress={remove}>
      <Icon
        name="trash"
        size={25}
        color={colors.neonCarrot}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  wrapper: {
    flexDirection: 'row',
  },
  image: {
    width: Math.round(constants.width * 0.18),
    height: Math.round(constants.width * 0.23),
    borderRadius: 10,
  },
  description: {
    paddingLeft: 25,
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: constants.fontMainBold,
    fontSize: 17,
    color: colors.blueMagenta,
  },
  name: {
    fontFamily: constants.fontMainRegular,
    fontSize: 15,
    color: colors.gullGray,
  },
  balance: {
    fontFamily: constants.fontMainRegular,
    fontSize: 13,
    color: colors.gullGray,
  },
});

export default FavoritesListItem;
