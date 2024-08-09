import { StyleSheet, Text, View } from "react-native";
export default function DetailPage() {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
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
