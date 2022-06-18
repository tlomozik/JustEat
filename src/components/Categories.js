import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "@rneui/base";

const Categories = () => {
  return (
    <View style={styles.categoriesStyle}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/food.png")}
          containerStyle={styles.imgStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/drinks.png")}
          containerStyle={styles.imgStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imgStyle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    transition: 5,
  },
});
