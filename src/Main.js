import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import { StatusBar } from "expo-status-bar";
import AppBar from "./components/AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./components/SignIn";
import BodyMassIndexCalculator from "./test/BM";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/bm" element={<BodyMassIndexCalculator />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <StatusBar style="auto" />
    </View>
  );
};

export default Main;
