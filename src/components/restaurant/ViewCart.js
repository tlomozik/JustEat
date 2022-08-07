import { StyleSheet, View, TouchableOpacity, Modal } from "react-native";
import { Text } from "@rneui/base";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase.js";
const ViewCart = ({ modalVisible, setModalVisible, title, navigation }) => {
  const items = useSelector((state) => state.restaurant.selectedItems);

  const total = items
    .map((item) => Number(item.price.replace("zł", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const checkoutModal = () => {
    return (
      <View
        style={{
          backgroundColor: "#8d99ae",
          alignItems: "center",
          justifyContent: "center",
          top: "50%",
          height: 300,
          elevation: 5,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <OrderItem total={total} />
        <TouchableOpacity
          onPress={() => addOrderToFireBase()}
          style={{
            borderRadius: 10,
            elevation: 5,
            backgroundColor: "black",
            width: 150,
            alignItems: "center",
            padding: 10,
            margin: 20,
          }}
        >
          <Text style={{ color: "#fff" }}> Checkout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const addOrderToFireBase = async () => {
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        items: items,
        title: title,
        createdAt: serverTimestamp(),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setModalVisible(false);
    navigation.navigate("OrderCompleted", { title: title });
  };

  // useEffect(() => {
  //   addOrderToFireBase();
  // }, [items]);

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModal()}
      </Modal>

      {total && !modalVisible ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            top: "90%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              elevation: 5,
              position: "relative",
              width: 250,
              height: 40,
              backgroundColor: "black",
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>

            <Text style={{ color: "white", fontSize: 20 }}> {total}zł </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({});
