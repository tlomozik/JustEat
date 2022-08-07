import { StyleSheet, Text, View, LogBox } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { Card } from "@rneui/base";
import MenuItems from "../components/restaurant/MenuItems";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);

const OrderCompleted = (navigation) => {
  const items = useSelector((state) => state.restaurant.selectedItems);
  const docSnap = getDoc(docRef);
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

  const total = items
    .map((item) => Number(item.price.replace("zł", "")))
    .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <Card containerStyle={{ borderRadius: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          Order from {navigation.route.params.title} has been placed for {total}
          zł
        </Text>
      </Card>
      <View style={{ height: 200 }}>
        <MenuItems useCheckBox={false} foods={foods} />
      </View>

      <LottieView
        style={{
          width: "100%",
          alignSelf: "center",
        }}
        source={require("../../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
        loop={true}
      />
    </View>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({});
