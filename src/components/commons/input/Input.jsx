import { Input } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';

export default function CustomInput({
  title,
  placeholder,
  error,
  errorComponent,
  errorMessage,
  onChange,
  value,
  onBlur,
}) {
  return (
    <View style={styles.container}>
      <Input
        placeholder={placeholder}
        inputContainerStyle={styles.inputContainerStyle}
        label={title}
        labelStyle={styles.labelStyle}
        errorProps={error}
        ErrorComponent={errorComponent}
        errorMessage={errorMessage}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 330,
    borderWidth: 1,
    paddingVertical: 10,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    borderRadius: 12,
    backgroundColor: globalStyles.gray,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  labelStyle: {
    marginBottom: 10,
    color: 'black',
  },
});
