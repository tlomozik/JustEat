import { StyleSheet, View } from "react-native";
import { Image, Text } from "@rneui/base";
import { useState } from "react";
import MenuItems from "./MenuItems";
import ViewCart from "./ViewCart";

const restaurantDetail = ({ route, navigation }) => {
  const { title, description, image } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const foods = [
    {
      title: "Kotlet mielony",
      description:
        "Kotlety mielone z tłuczonymi ziemniakami i smażonymi buraczkami. Klasyka w najlepszym wydaniu!",
      price: "14zł",
      image:
        "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/mielone_2.jpg",
    },
    {
      title: "Kotlet schabowy",
      description:
        "Usmażone schabowe odsączyć z tłuszczu na papierowym ręczniku i podawać z ziemniakami i kapustą lub mizerią.",
      price: "17zł",
      image:
        "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/schabowe_02.jpg",
    },
    {
      title: "Gołąbki tradycyjne",
      description:
        "Zawijać jak krokiety (najpierw założyć liść na mięso z jednej strony, później złożyć boki do środka, następnie zwinąć jak najciaśniej do końca pozostałą część liścia). Nie cała kapusta musi być wykorzystana.",
      price: "20zł",
      image:
        "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/golabki_01_1.jpg",
    },
    {
      title: "Kaszanka wiejska",
      description:
        "Najbardziej znaną potrawą „kiełbasianą” z wykorzystaniem kaszy jest kaszanka z kaszy gryczanej. Kaszankę przygotowujemy z bardzo świeżych produktów. Ten rodzaj wędliny pojawia się zazwyczaj na wsiach przy okazji tzw. “świniobicia",
      price: "25zł",
      image:
        "https://dobrakielbasa.pl/wp-content/uploads/2016/08/11_kasze_przepis_1.jpg?ceed78",
    },
  ];

  return (
    <View
      style={[
        styles.restaurantDetailsStyle,
        modalVisible ? styles.backgroundBlurred : styles.backgroundClear,
      ]}
    >
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />

      <MenuItems useCheckBox={true} foods={foods} />

      <ViewCart
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={title}
        navigation={navigation}
      />
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

  backgroundBlurred: {
    opacity: 0.3,
  },
  backgroundClear: {
    opacity: 1,
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
