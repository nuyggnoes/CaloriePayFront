import { StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';
import { Button } from '@rneui/base';

export default function CustomButton2({
  title,
  icon,
  iconContainerStyle,
  iconPosition,
  titleStyle,
  buttonStyle,
  containerStyle,
  onPress,
}) {
  return (
    <Button
      title={title}
      icon={icon}
      iconContainerStyle={iconContainerStyle}
      iconPosition={iconPosition}
      titleStyle={{ ...styles.titleStyle, ...titleStyle }}
      buttonStyle={{ ...styles.buttonStyle, ...buttonStyle }}
      containerStyle={containerStyle}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: globalStyles.mainColor,
    paddingVertical: 15,
    borderRadius: 10,
    width: 270,
    height: 50,
  },
});
