import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantDetail from "../components/restaurantDetail/RestaurantDetail";
const RestaurantScreen = ({ route }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <RestaurantDetail route={route} />
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
