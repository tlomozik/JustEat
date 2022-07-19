import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/home/SearchBar";
import ResultsList from "../components/home/ResultsList";
import { useState } from "react";
const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState("Wrocław");
  const [category, setCategory] = useState("hotdogs");

  const changeCityHandler = (city) => {
    setCity(city);
  };

  const changeCategoryHandler = (category) => {
    setCategory(category);
  };

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        changeCityHandler={changeCityHandler}
        changeCategoryHandler={changeCategoryHandler}
      />

      <ResultsList city={city} category={category} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: { flex: 1, backgroundColor: "#EDF2F4" },
});
export default HomeScreen;
