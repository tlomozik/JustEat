import { View, StyleSheet } from "react-native";
import React from "react";

import SignUpForm from "../components/SignUpForm";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginScreen;
