/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import {
  Text, View, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import productsContext from '../context/products/productsContext';
import colors from '../constants/colors';
import constants from '../constants/constants';
import utils from '../helpers/utils';

const CartListItem = ({
  id, name, price, src, count, remove,
}) => {
  const [countState, setCount] = useState(count);
  const { changeCount } = useContext(productsContext);

  const minus = () => {
    if (countState >= 2) {
      changeCount(id, -1);
      setCount(countState - 1);
    }
  };
  const plus = () => {
    changeCount(id, 1);
    setCount(countState + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={{ uri: src }}
          style={styles.image}
        />
        <View style={styles.description}>
          <Text style={styles.price}>{utils.getPrice(price)}</Text>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={() => minus()}>
              <Icon
                name="remove-outline"
                size={20}
                color={colors.blueMagenta}
              />
            </TouchableOpacity>
            <View style={styles.circle}><Text style={styles.count}>{countState}</Text></View>
            <TouchableOpacity onPress={() => plus()}>
              <Icon
                name="add-outline"
                size={25}
                color={colors.blueMagenta}
              />
            </TouchableOpacity>
          </View>
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
};

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
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 20,
    backgroundColor: colors.gullGray,
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  count: {
    fontFamily: constants.fontMainRegular,
    fontSize: 12,
    color: colors.white,
  },
});

export default CartListItem;
