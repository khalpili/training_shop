/* eslint-disable react/prop-types */
import React from 'react';
import {
  Text, TouchableOpacity, StyleSheet, View,
} from 'react-native';

import colors from '../constants/colors';
import constants from '../constants/constants';

const Button = ({
  label, onPress, styleButton, touchable = true,
}) => (
  <>
    {touchable
      ? (
        <TouchableOpacity
          style={[styles.cart, styleButton]}
          onPress={() => onPress()}
        >
          <Text style={styles.cartText}>{label}</Text>
        </TouchableOpacity>
      )
      : (
        <View style={[styles.cart, styleButton]}>
          <Text style={styles.cartText}>{label}</Text>
        </View>
      )}
  </>
);

const styles = StyleSheet.create({
  cart: {
    width: '100%',
    backgroundColor: colors.mayGreen,
    paddingVertical: 10,
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cartText: {
    fontFamily: constants.fontMainMedium,
    fontSize: 16,
    color: colors.white,
  },
});

export default Button;
