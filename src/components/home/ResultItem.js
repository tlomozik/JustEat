import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, Image } from "@rneui/base";
import { Rating } from "react-native-ratings";
const ResultItem = ({ name, image, rating, reviews }) => {
  return (
    <Card containerStyle={styles.containerStyle}>
      <ResultImage image={image} />
      <Card.Divider />
      <View style={styles.itemDetailsStyle}>
        <ResultInfo name={name} />
        <ResultRating rating={rating} reviews={reviews} />
      </View>
    </Card>
  );
};

const ResultImage = ({ image }) => {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={styles.resultImage}
    />
  );
};

const ResultInfo = ({ name }) => {
  return <Text style={styles.titleStyle}>{name}</Text>;
};

const ResultRating = ({ rating, reviews }) => {
  return (
    <View style={styles.ratingStyle}>
      <Rating imageSize={20} readonly={true} startingValue={rating} />
      <Text style={{ marginLeft: 10 }}>{reviews} ocen</Text>
    </View>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  containerStyle: { alignItems: "center", width: 400, borderRadius: 20 },

  resultImage: {
    height: 200,
    width: 300,
    resizeMode: "cover",
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemDetailsStyle: {
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  ratingStyle: {
    flexDirection: "row",
  },
});
