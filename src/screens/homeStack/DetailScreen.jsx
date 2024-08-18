import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import { useAuth } from '../../context/authContext';

export default function DetailScreen() {
  const { logOut } = useAuth();
  return (
    <MainWrapper>
      <View style={styles.container}>
        <Text>Detail</Text>
        <TouchableOpacity
          onPressOut={() => {
            logOut();
          }}
        >
          <Text>RESET BUTTON</Text>
        </TouchableOpacity>
      </View>
    </MainWrapper>
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
