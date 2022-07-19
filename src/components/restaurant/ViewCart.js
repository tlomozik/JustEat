import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "@rneui/base";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const items = useSelector((state) => state.restaurant.selectedItems);

  const total = items
    .map((item) => Number(item.price.replace("zł", "")))
    .reduce((prev, curr) => prev + curr, 0);
  console.log(total);
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 999,
        width: "100%",
        top: "90%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          elevation: 5,
          position: "relative",
          width: 300,
          height: 40,
          backgroundColor: "black",
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        {total ? (
          <Text style={{ color: "white", fontSize: 20 }}> {total}zł </Text>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default ViewCart;

const styles = StyleSheet.create({});
