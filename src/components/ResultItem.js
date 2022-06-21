import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { Card, ListItem, Image } from "@rneui/base";

const ResultItem = ({ name, image }) => {
  return (
    <TouchableOpacity>
      <Card containerStyle={styles.containerStyle}>
        <ResultImage image={image} />
        <Card.Divider />
        <ResultInfo name={name} />
      </Card>
    </TouchableOpacity>
  );
};

const ResultImage = ({ image }) => {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={styles.ratingImage}
    />
  );
};

const ResultInfo = ({ name }) => {
  return <Text style={styles.titleStyle}>{name}</Text>;
};

export default ResultItem;

const styles = StyleSheet.create({
  containerStyle: { alignItems: "center", width: 375, elevation: 25 },

  ratingImage: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
