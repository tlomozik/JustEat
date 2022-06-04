import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Profile", {
            userID: "jane",
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
