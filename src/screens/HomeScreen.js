import { View, Text, StyleSheet } from "react-native";
import { useUser } from "../context/UserContext";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ResultsList from "../components/ResultsList";
const HomeScreen = ({ navigation }) => {
  const user = useUser();

  return (
    <View style={styles.containerStyle}>
      <SearchBar />
      <Categories />
      <ResultsList />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: { flex: 1, backgroundColor: "#EDF2F4" },
});
export default HomeScreen;
