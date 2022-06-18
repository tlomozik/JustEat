import { View, StyleSheet } from "react-native";
import { Button, Text, Card } from "@rneui/base";
import { auth } from "../firebase/firebase";
import SignOutButton from "../components/SignOutButton";
import { useUser } from "../context/UserContext";
import { isLoggedIn } from "../utils/isLoggedIn";
const ProfileScreen = () => {
  const user = useUser();

  return (
    <View style={styles.containerStyle}>
      <Card containerStyle={styles.cardStyle}>
        <Text h4>{user?.email}</Text>
      </Card>
      <SignOutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "center",
  },
  cardStyle: {
    borderRadius: 15,
    elevation: 20,
  },
});
export default ProfileScreen;
