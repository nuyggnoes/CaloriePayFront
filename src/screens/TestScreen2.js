import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function TestScreen2Page() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>TestScreen2</Text>
      <TouchableOpacity onPress={() => navigation.navigate('detail')}>
        <Text>detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
