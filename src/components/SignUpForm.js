import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import signup from "../containers/auth/signup";
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Input
        disabledInputStyle={{ background: "#ddd" }}
        label="Email"
        containerStyle={{ width: 300 }}
        leftIcon={<AntDesign name="user" size={20} color="black" />}
        // rightIcon={<Icon name="close" size={20} />}
        placeholder="Enter Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <Input
        disabledInputStyle={{ background: "#ddd" }}
        label="Password"
        leftIcon={
          <MaterialCommunityIcons name="security" size={20} color="black" />
        }
        containerStyle={{ width: 300 }}
        // rightIcon={<Icon name="close" size={20} />}
        placeholder="Enter password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <Button
        buttonStyle={styles.buttonStyle}
        type="solid"
        onPress={() => signup({ email, password })}
      >
        <Feather name="check" size={24} color="black" />
        Sign in
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: { backgroundColor: "#f4511e" },
});

export default SignUpForm;
