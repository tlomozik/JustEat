import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image, Text } from "@rneui/base";

const Categories = () => {
  const icons = [
    {
      url: "https://img.icons8.com/plasticine/100/undefined/hamburger.png",
      name: "Fast Food",
    },

    {
      url: "https://img.icons8.com/plasticine/100/undefined/the-toast.png",
      name: "Drinks",
    },

    {
      url: "https://img.icons8.com/plasticine/100/undefined/sushi.png",
      name: "Asian",
    },
  ];

  return (
    <View style={styles.categoriesStyle}>
      {icons.map((icon, index) => (
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image source={{ uri: icon.url }} containerStyle={styles.imgStyle} />
          <Text style={{ fontWeight: "bold" }}>{icon.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
("https://img.icons8.com/plasticine/100/undefined/sushi.png");
export default Categories;

const styles = StyleSheet.create({
  categoriesStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imgStyle: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    transition: 5,
  },
});
