import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import ResultsList from "../components/home/ResultsList";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.containerStyle}>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <Categories />
        <ResultsList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: { flex: 1, backgroundColor: "#EDF2F4" },
});
export default HomeScreen;
