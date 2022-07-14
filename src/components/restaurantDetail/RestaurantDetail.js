import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, Image } from "@rneui/base";
import { ScrollView } from "react-native-gesture-handler";
import MenuItems from "./MenuItems";
const restaurantDetail = ({ route }) => {
  const { title, description, image } = route.params;

  return (
    <View style={styles.restaurantDetailsStyle}>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItems />
      </ScrollView>
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
    margin: 10,
    paddingBottom: 520,
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
  },

  descriptionStyle: {
    fontWeight: "bold",
  },
});
