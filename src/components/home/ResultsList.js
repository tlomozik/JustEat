import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import ResultItem from "./ResultItem";
import useResults from "../../hooks/useResults";

const ResultsList = ({ city, category, navigation }) => {
  const [searchApi, results, errorMessage] = useResults();

  useEffect(() => {
    searchApi(city, category);
  }, [city, category]);

  return (
    <>
      {results.map((result, index) => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            navigation.navigate("Details", {
              image: result.image_url,
              title: result.name,
              description: result.categories[0].title,
            })
          }
        >
          <View key={index} style={styles.resultListStyle}>
            <ResultItem
              name={result.name}
              image={result.image_url}
              rating={result.rating}
              reviews={result.review_count}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  resultListStyle: { flex: 1, alignItems: "center", marginBottom: 15 },
});
