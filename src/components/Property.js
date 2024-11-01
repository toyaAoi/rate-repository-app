import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  value: {
    fontWeight: "800",
  },
});

const Property = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default Property;
