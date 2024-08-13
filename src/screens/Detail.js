import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainWrapper from '../components/commons/layout/wrapper/MainWrapper';
import { useAuth } from '../navigations/AppNavigation';
export default function DetailPage() {
  const { setIsLoggedIn } = useAuth();
  return (
    <MainWrapper>
      <View style={styles.container}>
        <Text>Detail</Text>
        <TouchableOpacity
          onPressOut={() => {
            setIsLoggedIn(false);
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
