import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ResultItem from "./ResultItem";

const ResultsList = () => {
  return (
    <View style={styles.resultListStyle}>
      <ResultItem />
      <ResultItem />
      <ResultItem />
      <ResultItem />
      <ResultItem />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  resultListStyle: { flex: 1 },
});
