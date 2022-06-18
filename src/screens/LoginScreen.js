import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Card, Text } from "@rneui/themed";
import LoginForm from "../components/LoginForm";

import { isLoggedIn } from "../utils/isLoggedIn";
const LoginScreen = () => {
  const [switcher, setSwitcher] = useState(false);

  return (
    <View style={styles.container}>
      <LoginForm type={switcher} />
      <TouchableOpacity
        onPress={() => setSwitcher((prevSwitcher) => !prevSwitcher)}
      >
        <Card containerStyle={styles.accountButtonStyle}>
          <Text>Already have an account?</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  accountButtonStyle: {
    borderRadius: 15,
    elevation: 20,
  },
});
export default LoginScreen;
