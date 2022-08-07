import { StyleSheet, View, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text } from "@rneui/base";
import React from "react";

const SearchBar = (props) => {
  const icons = [
    {
      url: "https://img.icons8.com/plasticine/100/undefined/hamburger.png",
      name: "Fast Food",
      searchName: "hotdogs",
    },

    {
      url: "https://img.icons8.com/plasticine/100/undefined/the-toast.png",
      name: "Drinks",
      searchName: "beer_and_wine",
    },

    {
      url: "https://img.icons8.com/plasticine/100/undefined/sushi.png",
      name: "Asian",
      searchName: "asianfusion",
    },
  ];

  return (
    <>
      <View style={styles.containerStyle}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            props.changeCityHandler(data.description.split(",")[0]);
          }}
          query={{
            key: "AIzaSyA2zIs34O9nV-RrDZq-zFzl6CLKqBd0qmw",
            language: "pl",
          }}
          styles={{
            textInputContainer: {
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 50,
              paddingHorizontal: 20,
              marginHorizontal: 20,
            },
            textInput: {
              height: 50,
              fontSize: 17,
              backgroundColor: "white",
              borderRadius: 20,
              marginTop: 5,
              fontWeight: "700",
            },
            row: {
              marginHorizontal: 20,
              backgroundColor: "#EDF2F4",
              padding: 13,
              height: 44,
              flexDirection: "row",
            },
            separator: {
              height: 0,
            },
            poweredContainer: {
              justifyContent: "flex-end",
              alignItems: "center",
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              backgroundColor: "#EDF2F4",
              borderTopWidth: 0.5,
              marginHorizontal: 20,
            },
          }}
          renderLeftButton={() => (
            <View style={{}}>
              <FontAwesome5 name="map-marker-alt" size={24} color="black" />
            </View>
          )}
          renderRightButton={() => (
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Categories */}
      <View style={styles.categoriesStyle}>
        {icons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => props.changeCategoryHandler(icon.searchName)}
            style={{ alignItems: "center" }}
          >
            <Image
              source={icon.url ? { uri: icon.url } : null}
              containerStyle={styles.imgStyle}
            />
            <Text style={{ fontWeight: "bold" }}>{icon.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  containerStyle: { flexDirection: "row", marginTop: 5 },
  inputContainerStyle: {
    elevation: 15,
    opacity: 2,
  },
  inputStyle: { color: "#2B2D42" },

  categoriesStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imgStyle: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    transition: 5,
  },
});
