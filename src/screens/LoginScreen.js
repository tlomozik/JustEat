import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      }
    );
  };

  return (
    <View>
      <Text>LoginScreen</Text>

      <Input
        disabledInputStyle={{ background: "#ddd" }}
        errorMessage="Oops! that's not correct."
        label="User Form"
        leftIcon={<Icon name="account-outline" size={20} />}
        rightIcon={<Icon name="close" size={20} />}
        placeholder="Enter Name"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <Input
        disabledInputStyle={{ background: "#ddd" }}
        errorMessage="Oops! that's not correct."
        label="User Form"
        leftIcon={<Icon name="account-outline" size={20} />}
        rightIcon={<Icon name="close" size={20} />}
        placeholder="Enter password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity>
        <Button title="Register" onPress={handleSignUp}></Button>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
