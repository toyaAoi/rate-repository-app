import { ScrollView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#091057",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    padding: 16,
    color: "white",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to={"/"}>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to={"/signin"}>
          <Text style={styles.text}>Sign In</Text>
        </Link>
        <Link to={"/bm"}>
          <Text style={styles.text}>bm</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
