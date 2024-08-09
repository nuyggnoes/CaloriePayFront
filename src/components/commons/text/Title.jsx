import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function Title() {
  const [fontsLoaded] = useFonts({
    'Kanit-Bold': require('../../../assets/fonts/Kanit-Bold.ttf'),
  });
  // expo-splash-screen으로 변경?
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Text style={styles.title}>Calorie Pay</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Kanit-Bold',
    fontSize: 24,
  },
});
