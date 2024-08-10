import { Input } from '@rneui/themed';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function CustomInput({ title, placeholder }) {
  return (
    <View style={styles.container}>
      <Input
        placeholder={placeholder}
        inputContainerStyle={styles.inputContainerStyle}
        label={title}
        labelStyle={styles.labelStyle}
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
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  labelStyle: {
    marginBottom: 10,
    color: 'black',
  },
});
