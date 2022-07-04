import { View, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { Button, Input, Text } from "@rneui/base";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import signup from "../../containers/auth/signup";
import signin from "../../containers/auth/signin";
import { useNavigation } from "@react-navigation/native";

const SignUpForm = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  return (
    <View>
      <Input
        disabledInputStyle={{ background: "#ddd" }}
        label="Email"
        containerStyle={{ width: 300 }}
        leftIcon={<AntDesign name="user" size={20} color="black" />}
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
        placeholder="Enter password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      {type ? (
        <Button
          buttonStyle={styles.buttonStyle}
          type="solid"
          onPress={() => {
            signin({ email, password }), navigation.navigate("Home");
          }}
        >
          <Feather name="check" size={24} color="black" />
          Sign in
        </Button>
      ) : (
        <View>
          <Input
            disabledInputStyle={{ background: "#ddd" }}
            label="Name"
            containerStyle={{ width: 300 }}
            leftIcon={<AntDesign name="user" size={20} color="black" />}
            placeholder="Enter Name"
            onChangeText={(text) => setName(text)}
            value={name}
          />

          <Button
            buttonStyle={styles.buttonStyle}
            type="solid"
            onPress={() => {
              signup({ email, password, name }), navigation.navigate("Home");
            }}
          >
            <Feather name="check" size={24} color="black" />
            Sign up
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: { backgroundColor: "#EF233C", borderRadius: 20 },
});

export default SignUpForm;
