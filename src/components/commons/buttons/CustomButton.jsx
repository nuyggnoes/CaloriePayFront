import { StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';
import { Button } from '@rneui/base';

export default function CustomButton({
  title,
  icon,
  iconContainerStyle,
  iconPosition,
  titleStyle,
  buttonStyle,
  containerStyle,
  onPress,
  width,
}) {
  return (
    <Button
      title={title}
      icon={icon}
      iconContainerStyle={styles.iconContainerStyle}
      iconPosition={iconPosition}
      titleStyle={{ ...styles.titleStyle, ...titleStyle }}
      buttonStyle={{
        ...styles.buttonStyle,
        width: width || styles.buttonStyle.width,
        ...buttonStyle,
      }}
      containerStyle={{
        ...styles.containerStyle,
        ...containerStyle,
      }}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    marginHorizontal: 40,
  },
  buttonStyle: {
    backgroundColor: globalStyles.mainColor,
    paddingVertical: 15,
    borderRadius: 10,
    height: 50,
  },
  containerStyle: {
    height: 60,
    width: '100%',
    paddingHorizontal: 10,
    // Android
    elevation: 5,

    // iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  iconContainerStyle: {
    // marginRight: 10,
  },
});
