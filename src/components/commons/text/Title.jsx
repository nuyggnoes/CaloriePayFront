import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
// import AppLoading from 'expo-app-loading';

SplashScreen.preventAutoHideAsync();

export default function Title() {
  const [fontsLoaded] = useFonts({
    'Kanit-Bold': require('../../../assets/fonts/Kanit-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded]);
  // expo-splash-screen으로 변경?
  if (!fontsLoaded) {
    return null;
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
    fontSize: 25,
  },
});
