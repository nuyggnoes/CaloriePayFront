import { StyleSheet, Text, View } from "react-native";
export default function TestScreen3Page() {
  return (
    <View style={styles.container}>
      <Text>TestScreen3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
