import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Image } from "@rneui/base";

const MenuItems = () => {
  const foods = [
    {
      title: "Kotlet mielony",
      description:
        "Kotlety mielone z tłuczonymi ziemniakami i smażonymi buraczkami. Klasyka w najlepszym wydaniu!",
      price: "22zł",
      image:
        "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/mielone_2.jpg",
    },
    {
      title: "Kotlet schabowy",
      description:
        "Usmażone schabowe odsączyć z tłuszczu na papierowym ręczniku i podawać z ziemniakami i kapustą lub mizerią.",
      price: "25zł",
      image:
        "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/schabowe_02.jpg",
    },
  ];

  return (
    <>
      {foods.map((food, index) => (
        <Card
          key={index}
          containerStyle={{ elevation: 0, borderColor: "white" }}
          wrapperStyle={styles.menuItemStyle}
        >
          <MenuItemInfo
            title={food.title}
            description={food.description}
            price={food.price}
          />
          <MenuItemImage image={food.image} />
        </Card>
      ))}
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
