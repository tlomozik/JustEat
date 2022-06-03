import { View } from "react-native";
import { Button, Text } from "@rneui/base";
import React from "react";

const ProfileScreen = ({ route, navigation }) => {
  const { userID } = route.params;
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Text> userID: {userID}</Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileScreen;
