import { StyleSheet, Text, View } from "react-native";
export default function TestScreen4Page() {
  return (
    <View style={styles.container}>
      <Text>TestScreen4</Text>
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
