import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Card, ListItem } from "@rneui/base";

const ResultsList = () => {
  return (
    <View style={styles.resultListStyle}>
      <Card>
        <ScrollView>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>
                Limited supply! Its like digital gold!
              </ListItem.Title>
              <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>
                Limited supply! Its like digital gold!
              </ListItem.Title>
              <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>
                Limited supply! Its like digital gold!
              </ListItem.Title>
              <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>
                Limited supply! Its like digital gold!
              </ListItem.Title>
              <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>
                Limited supply! Its like digital gold!
              </ListItem.Title>
              <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>
                Limited supply! Its like digital gold!
              </ListItem.Title>
              <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            </ListItem.Content>
          </ListItem>
        </ScrollView>
      </Card>
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  resultListStyle: { flex: 1 },
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey",
  },
});
