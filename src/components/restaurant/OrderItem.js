import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const OrderItem = ({ total }) => {
  const menuItem = useSelector((state) => state.restaurant.selectedItems);

  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        padding: 10,
      }}
    >
      {menuItem.map((item, index) => (
        <View key={index} style={styles.menuItemStyle}>
          <Text style={styles.textStyle}>{item.title}</Text>
          <Text style={styles.textStyle}>{item.price}</Text>
        </View>
      ))}
      <View style={[styles.menuItemStyle, { margin: 20 }]}>
        <Text style={styles.textStyle}>Total</Text>
        <Text style={styles.textStyle}>{total}zł</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    margin: 5,
  },

  textStyle: { fontWeight: "bold", fontSize: 15 },
});
