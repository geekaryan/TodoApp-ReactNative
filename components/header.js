import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 38,
    backgroundColor: "yellow",
  },
  title: {
    marginLeft: 15,
    marginTop: 4,
    textAlign: "center",
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
});
