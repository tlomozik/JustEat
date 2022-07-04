import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.containerStyle}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
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

    // <Search
    //   round={true}
    //   containerStyle={styles.containerStyle}
    //   inputContainerStyle={styles.inputContainerStyle}
    //   inputStyle={styles.inputStyle}
    //   leftIconContainerStyle={styles.leftIconContainerStyle}
    //   lightTheme={true}
    //   selectionColor={"#D90429"}
    //   searchIcon={
    //     <FontAwesome5 name="map-marker-alt" size={24} color="black" />
    //   }
    //   onChangeText={(text) => setSearch(text)}
    //   value={search}
    // />
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
});
