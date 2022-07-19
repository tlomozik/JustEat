import { StyleSheet, View } from "react-native";
import { Card, Image, Text } from "@rneui/base";

import MenuItems from "./MenuItems";
import ViewCart from "./ViewCart";

const restaurantDetail = ({ route }) => {
  const { title, description, image } = route.params;

  return (
    <View style={styles.restaurantDetailsStyle}>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />

      <MenuItems />
      <ViewCart />
    </View>
  );
};

const RestaurantImage = ({ image }) => {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={styles.resultImage}
    />
  );
};

const RestaurantTitle = ({ title }) => {
  return <Text style={styles.titleStyle}>{title}</Text>;
};

const RestaurantDescription = ({ description }) => {
  return <Text style={styles.descriptionStyle}>{description}</Text>;
};

export default restaurantDetail;

const styles = StyleSheet.create({
  restaurantDetailsStyle: {
    paddingBottom: 550,
  },

  resultImage: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  titleStyle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },

  descriptionStyle: {
    fontWeight: "bold",
    margin: 5,
  },
});
