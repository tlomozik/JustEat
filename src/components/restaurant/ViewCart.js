import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "@rneui/base";
import { TouchableOpacity } from "react-native-gesture-handler";

const ViewCart = () => {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 999,
        width: "100%",
        top: "85%",
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
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewCart;

const styles = StyleSheet.create({});
