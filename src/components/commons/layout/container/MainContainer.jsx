import { StyleSheet, View } from 'react-native';

export default function MainContainer(props) {
  return <View style={styles.mainContainer}>{props.children}</View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    width: '100%',
    padding: 12,
  },
});
