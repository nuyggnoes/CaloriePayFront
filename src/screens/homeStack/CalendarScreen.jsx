import { StyleSheet, View } from 'react-native';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import CalendarComponent from '../../components/units/Calendar';

export default function CalendarScreen() {
  return (
    <MainWrapper>
      <View style={styles.container}>
        <CalendarComponent />
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
