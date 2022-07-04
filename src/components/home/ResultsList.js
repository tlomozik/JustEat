import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import ResultItem from "./ResultItem";
import useResults from "../../hooks/useResults";
const ResultsList = () => {
  const [searchApi, results, errorMessage] = useResults();

  useEffect(() => {
    searchApi("");
  }, []);

  console.log(results[0]?.name);
  return (
    <View style={styles.resultListStyle}>
      {results.map((result, index) => (
        <ResultItem
          name={result.name}
          image={result.image_url}
          rating={result.rating}
          reviews={result.review_count}
        />
      ))}
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  resultListStyle: { flex: 1, alignItems: "center", marginBottom: 15 },
});
