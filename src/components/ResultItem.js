import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, ListItem, Image } from "@rneui/base";
const ResultItem = () => {
  return (
    <Card>
      {/* <ListItem.Title>
          Limited supply! Its like digital gold!
        </ListItem.Title> */}

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        style={styles.ratingImage}
      />
    </Card>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  ratingImage: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
});
