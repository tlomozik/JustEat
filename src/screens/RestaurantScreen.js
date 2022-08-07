import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantDetail from "../components/restaurant/RestaurantDetail";
const RestaurantScreen = ({ route, navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <RestaurantDetail route={route} navigation={navigation} />
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
