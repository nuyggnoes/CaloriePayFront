import { ButtonGroup } from '@rneui/themed';
import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';

export default function CustomButtonGroup({
  buttons,
  containerStyle,
  selectedIndex,
  setSelectedIndex,
}) {
  return (
    <ButtonGroup
      buttons={[...buttons]}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        console.log(value);
        setSelectedIndex(value);
      }}
      containerStyle={{ ...styles.containerStyle, ...containerStyle }}
      buttonStyle={styles.buttonStyle}
      selectedButtonStyle={styles.selectedButtonStyle}
      buttonContainerStyle={{
        borderWidth: 0,
        backgroundColor: globalStyles.mainBackgroundColor,
      }}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    borderWidth: 0,
    backgroundColor: 'yellow',
  },
  buttonStyle: {
    marginHorizontal: 10,
    backgroundColor: globalStyles.gray,
    borderRadius: 10,
  },
  selectedButtonStyle: {
    backgroundColor: globalStyles.mainColor,
  },
});
