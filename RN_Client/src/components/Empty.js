/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import constants from '../constants/constants';

import strings from '../constants/strings';

const Empty = ({ header }) => (
  <>
    {header}
    <View style={styles.container}>
      <Text style={styles.text}>{strings.empty}</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: constants.fontMainRegular,
    color: colors.gullGray,
    fontSize: 16,
  },
});

export default Empty;
