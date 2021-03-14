/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Modal, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import colors from '../constants/colors';
import constants from '../constants/constants';

const Alert = ({
  title, success, isOpen, setIsOpen,
}) => (
  <Modal animationType="none" transparent visible={isOpen}>
    <View style={styles.container}>
      <View style={[styles.window]}>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setIsOpen(false)}>
          <Text style={[
            styles.textButton,
            { color: success ? colors.mayGreen : colors.neonCarrot },
          ]}
          >
            OK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.modal,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  window: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 70,
    padding: 30,
    borderRadius: 20,
    elevation: 5,
  },
  button: {
    marginTop: 20,
  },
  textButton: {
    fontFamily: constants.fontMainMedium,
    fontSize: 16,
  },
  text: {
    fontFamily: constants.fontMainRegular,
    fontSize: 15,
    color: colors.blueMagenta,
  },
});

export default Alert;
