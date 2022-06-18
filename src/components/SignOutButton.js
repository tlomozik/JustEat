import { TouchableOpacity, StyleSheet } from "react-native";
import { Card, Text } from "@rneui/themed";
import signout from "../containers/auth/signout";
import { useNavigation } from "@react-navigation/native";
const SignOutButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        signout(), navigation.navigate("Home");
      }}
    >
      <Card containerStyle={styles.signoutButtonStyles}>
        <Text>Sign out</Text>
      </Card>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  signoutButtonStyles: {
    borderRadius: 15,
    elevation: 20,
  },
});

export default SignOutButton;
