import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={styles.categoriesStyle}>
      <MaterialCommunityIcons name="food-turkey" size={40} color="black" />
      <Entypo name="drink" size={40} color="black" />
      <FontAwesome name="coffee" size={40} color="black" />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesStyle: { flexDirection: "row", justifyContent: "space-evenly" },
});
