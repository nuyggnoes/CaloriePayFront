import { StyleSheet, Text, View } from 'react-native';
import MainWrapper from '../components/commons/layout/wrapper/MainWrapper';
export default function TestScreen3Page() {
  return (
    <MainWrapper>
      <Text>TestScreen3</Text>
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
