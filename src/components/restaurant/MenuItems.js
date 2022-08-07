import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Card, Image } from "@rneui/base";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
} from "../../redux/reducers/restaurantSlice";
import { useSelector, useDispatch } from "react-redux";
const MenuItems = ({ useCheckBox, foods }) => {
  const count = useSelector((state) => state.restaurant.selectedItems);
  const dispatch = useDispatch();
  console.log(useCheckBox);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
          <Card
            key={index}
            containerStyle={{ elevation: 0, borderColor: "white" }}
            wrapperStyle={styles.menuItemStyle}
          >
            {useCheckBox ? (
              <BouncyCheckbox
                onPress={(checkboxValue) => {
                  if (checkboxValue) {
                    dispatch(ADD_TO_CART(food));
                  } else {
                    dispatch(DELETE_FROM_CART(food));
                  }
                }}
                fillColor="black"
                iconStyle={{
                  borderRadius: 10,
                  borderColor: "black",
                }}
              />
            ) : null}

            <MenuItemInfo
              title={food.title}
              description={food.description}
              price={food.price}
            />
            <MenuItemImage image={food.image} />
          </Card>
        ))}
      </ScrollView>
    </>
  );
};

const MenuItemInfo = ({ title, description, price }) => {
  return (
    <View style={styles.menuItemInfoStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.descriptionStyle}>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const MenuItemImage = ({ image }) => {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={styles.imageStyle}
    />
  );
};
export default MenuItems;

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  menuItemStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  menuItemInfoStyle: { width: 200 },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  descriptionStyle: {
    marginVertical: 10,
  },
});
