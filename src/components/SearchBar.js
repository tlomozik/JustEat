import { StyleSheet } from "react-native";
import { useState } from "react";
import { SearchBar as Search } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <Search
      round={true}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      leftIconContainerStyle={styles.leftIconContainerStyle}
      lightTheme={true}
      selectionColor={"#D90429"}
      searchIcon={<AntDesign name="search1" size={24} color="#2B2D42" />}
      onChangeText={(text) => setSearch(text)}
      value={search}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  containerStyle: { marginBottom: 5 },
  inputContainerStyle: {
    elevation: 15,
    opacity: 2,
  },
  inputStyle: { color: "#2B2D42" },
});
